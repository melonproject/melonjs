import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { toBigNumber } from '../../../utils/toBigNumber';
import { IFeeAbi } from '../../../abis/IFee.abi';
import BigNumber from 'bignumber.js';
import { ValidationError } from '../../../errors/ValidationError';
import { toDate } from '../../../utils/toDate';

export interface FeeInitializationArguments {
  feeRate: BigNumber;
  feePeriod: number;
  denominationAsset: Address;
}

export class FeeAlreadyInitializedError extends ValidationError {
  public readonly name = 'FeeAlreadyInitializedError';

  constructor(message: string = 'Fee is already initialized for user.') {
    super(message);
  }
}

export class IFee extends Contract {
  public static readonly abi = IFeeAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<IFee>(environment, bytecode, from);
  }

  /**
   * Gets the identifier.
   *
   * @param block The block number to execute the call on.
   */
  public async identifier(block?: number) {
    const result = await this.makeCall<string>('identifier', undefined, block);
    return parseInt(result, 10);
  }

  /**
   * Gets the fee amount.
   *
   * @param block The block number to execute the call on.
   */
  public async feeAmount(block?: number) {
    const result = await this.makeCall<string>('feeAmount', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Gets the last payout time.
   *
   * @param feeManagerAddress The address of the fee manager contract
   * @param block The block number to execute the call on.
   */
  public async getLastPayoutTime(feeManagerAddress: Address, block?: number) {
    const result = await this.makeCall<string>('lastPayoutTime', [feeManagerAddress], block);
    return toDate(result);
  }

  /**
   * Initializes a fee for a user (e.g. sets the parameters for a fund)
   *
   * @param from The sender address
   * @param fee The fee rate, period and denomination asset
   */
  public initializeForUser(from: Address, fee: FeeInitializationArguments) {
    const args = [fee.feeRate.toFixed(0), fee.feePeriod, fee.denominationAsset];

    const validate = async () => {
      const lastPayoutTime = await this.getLastPayoutTime(from);
      if (lastPayoutTime.getTime() !== 0) {
        throw new FeeAlreadyInitializedError();
      }
    };

    return this.createTransaction({ from, method: 'initializeForUser', args, validate });
  }

  /**
   * Updates the state for a fee
   */
  public updateState(from: Address) {
    return this.createTransaction({ from, method: 'updateState' });
  }
}
