import * as R from 'ramda';
import BigNumber from 'bignumber.js';
import { AccountingAbi } from '../abis/Accounting.abi';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';
import { toBigNumber } from '../utils/toBigNumber';

export interface FundCalculations {
  sharePrice: BigNumber;
  gav: BigNumber;
  nav: BigNumber;
  feesInDenominationAsset: BigNumber;
  feesInShares: BigNumber;
  gavPerShareNetManagementFee: BigNumber;
}

export type FundHoldings = {
  [key: string]: BigNumber;
};

export class Accounting extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AccountingAbi, address));
  }

  /**
   * Gets the length of the owned assets array.
   *
   * @param block The block number to execute the call on.
   */
  public async getOwnedAssetsLength(block?: number) {
    const result = await this.makeCall<string>('getOwnedAssetsLength', undefined, block);
    return parseInt(result, 10);
  }

  /**
   * Gets the address of an owned asset by its index.
   *
   * @param index The index in the ownedAssets array.
   * @param block The block number to execute the call on.
   */
  public async getOwnedAsset(index: number, block?: number) {
    const result = await this.makeCall<Address>('ownedAssets', [index], block);
    return result;
  }

  /**
   * Gets a list of all owned assets.
   *
   * @param block The block number to execute the call on.
   */
  public async getOwnedAssets(block?: number) {
    const length = await this.getOwnedAssetsLength(block);
    return Promise.all(R.range(0, length).map(index => this.getOwnedAsset(index, block)));
  }

  /**
   * Gets the holding of a specific asset.
   *
   * @param asset The address of the asset.
   * @param block The block number to execute the call on.
   */
  public async getAssetHolding(asset: Address, block?: number) {
    const result = await this.makeCall<string>('assetHoldings', [asset], block);
    return toBigNumber(result);
  }

  /**
   * Gets the holdings of all owned assets.
   *
   * @param block The block number to execute the call on.
   */
  public async getFundHoldings(block?: number) {
    const { '0': quantities, '1': assets } = await this.makeCall<{
      '0': string[];
      '1': string[];
    }>('getFundHoldings', undefined, block);

    const output = assets.reduce((carry, key, index) => {
      const quantity = toBigNumber(quantities[index]);
      return { ...carry, [key]: quantity };
    }, {}) as FundHoldings;

    return output;
  }

  /**
   * Gets the default share price.
   *
   * @param block The block number to execute the call on.
   */
  public async getDefaultSharePrice(block?: number) {
    const result = await this.makeCall<string>('DEFAULT_SHARE_PRICE', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Gets the address of the denomination asset.
   *
   * @param block The block number to execute the call on.
   */
  public async getDenominationAsset(block?: number) {
    const result = await this.makeCall<Address>('DENOMINATION_ASSET', undefined, block);
    return result;
  }

  /**
   * Gets the address of the native asset (address only).
   *
   * @param block The block number to execute the call on.
   */
  public async getNativeAsset(block?: number) {
    const result = await this.makeCall<Address>('NATIVE_ASSET', undefined, block);
    return result;
  }

  /**
   * Gets the GAV.
   *
   * @param block The block number to execute the call on.
   */
  public async getGAV(block?: number) {
    const result = await this.makeCall<string>('calcGav', undefined, block);
    return toBigNumber(result);
  }

  /**
   * Performs accounting calculations (GAV, NAV, share price, etc).
   *
   * @param block The block number to execute the call on.
   */
  public async getCalculationResults(block?: number) {
    const result = await this.makeCall<FundCalculations>('performCalculations', undefined, block);

    return {
      sharePrice: toBigNumber(result.sharePrice),
      gav: toBigNumber(result.gav),
      nav: toBigNumber(result.nav),
      feesInDenominationAsset: toBigNumber(result.feesInDenominationAsset),
      feesInShares: toBigNumber(result.feesInShares),
      gavPerShareNetManagementFee: toBigNumber(result.gavPerShareNetManagementFee),
    } as FundCalculations;
  }

  /**
   * Gets the share costs in a certain asset.
   *
   * @param numShares The number of shares.
   * @param asset The requested asset.
   * @param block The block number to execute the call on.
   */
  public async getShareCostInAsset(numShares: BigNumber, asset: Address, block?: number) {
    const result = await this.makeCall<string>('getShareCostInAsset', [numShares.toString(), asset], block);
    return toBigNumber(result);
  }
}

export interface Accounting extends Spoke {}
applyMixins(Accounting, [Spoke]);
