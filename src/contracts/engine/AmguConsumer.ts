import { Contract } from '../../Contract';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { AmguConsumerAbi } from '../../abis/AmguConsumer.abi';

export class AmguConsumer extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AmguConsumerAbi, address));
  }

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
}