import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { deployHub } from '../../../utils/tests/deployHub';
import { PolicyManagerFactory } from './PolicyManagerFactory';
import { PolicyManagerFactoryBytecode } from '../../../abis/PolicyManagerFactory.bin';

describe('PolicyManagerFactory', () => {
  let environment: TestEnvironment;
  let policyManagerFactory: PolicyManagerFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = PolicyManagerFactory.deploy(environment, PolicyManagerFactoryBytecode, environment.accounts[0]);
    policyManagerFactory = await deploy.send(await deploy.prepare());
  });

  it('should check if a contract is an instance of the PolicyManagerFactory', async () => {
    const result = await policyManagerFactory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });

  it('should create an instance of a PolicyManager contract', async () => {
    const hub = await deployHub(environment, environment.accounts[0], {
      name: 'policymanager-test-fund',
      manager: environment.accounts[0],
    });

    const tx = policyManagerFactory.createInstance(environment.accounts[0], hub.contract.address);

    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
