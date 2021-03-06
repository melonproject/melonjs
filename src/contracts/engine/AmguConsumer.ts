import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { AmguConsumerAbi } from '../../abis/AmguConsumer.abi';
import { Engine } from './Engine';
import { IPriceSource } from '../prices/IPriceSource';
import { ERC20WithFields } from '../dependencies/token/ERC20WithFields';
import BigNumber from 'bignumber.js';

export class AmguConsumer extends Contract {
  public static readonly abi = AmguConsumerAbi;

  /**
   * Gets the amgu token.
   *
   * @param block The block number to execute the call on.
   */
  public getAmguToken(block?: number) {
    return this.makeCall<Address>('mlnToken', undefined, block);
  }

  /**
   * Gets the engine address.
   *
   * @param block The block number to execute the call on.
   */
  public getEngine(block?: number) {
    return this.makeCall<Address>('engine', undefined, block);
  }

  /**
   * Gets the price source address.
   *
   * @param block The block number to execute the call on.
   */
  public getPriceSource(block?: number) {
    return this.makeCall<Address>('priceSource', undefined, block);
  }

  /**
   * Gets the version address.
   *
   * @param block The block number to execute the call on.
   */
  public getVersion(block?: number) {
    return this.makeCall<Address>('version', undefined, block);
  }

  /**
   * Calculates the required AMGU value for a transaction.
   *
   * @param gasEstimation The gas estimation value.
   * @param block The block number to execute the call on.
   */
  protected async calculateAmgu(gasEstimation: number, block?: number) {
    const [amguTokenAddress, engineAddress, priceSourceAddress] = await Promise.all([
      this.getAmguToken(block),
      this.getEngine(block),
      this.getPriceSource(block),
    ]);

    // TODO: Can we derive the price feed type somehow or create a lightweight, common denominator just based
    // on the interface for cases like this?
    const prices = new IPriceSource(this.environment, priceSourceAddress);
    const engine = new Engine(this.environment, engineAddress);
    const amgu = new ERC20WithFields(this.environment, amguTokenAddress);

    const [amguDecimals, mlnPerAmgu, ethPerMln] = await Promise.all([
      amgu.getDecimals(block),
      engine.getAmguPrice(block),
      prices.getPrice(amguTokenAddress, block),
    ]);

    const result = new BigNumber(1)
      .multipliedBy(mlnPerAmgu)
      .multipliedBy(ethPerMln.price)
      .multipliedBy(gasEstimation)
      .dividedBy(new BigNumber(10).exponentiatedBy(amguDecimals))
      .decimalPlaces(0, BigNumber.ROUND_CEIL);

    return result;
  }
}
