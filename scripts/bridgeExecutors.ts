import { ethers, providers } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { ContractInfo, Contracts } from '../helpers/configs';
import { getStaticPermissionsJson } from '../helpers/fileSystem';
import { generateRoles } from '../helpers/jsonParsers';
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book';
import polygonBridgeExecutorABI from '../abis/polygonBridgeExecutorABI.json';
import { getSafeOwners } from '../helpers/guardian';

export const bridgeExecutors: Record<number, string> = {
  [ChainId.optimism]: './statics/bridgeExecutors/optimism.json',
  [ChainId.arbitrum_one]: './statics/bridgeExecutors/arbitrum.json',
  [ChainId.polygon]: './statics/bridgeExecutors/polygon.json',
};

export const getBridgeExecutor = async (
  provider: providers.Provider,
  chainId: ChainId,
): Promise<Contracts> => {
  const bridgeExecutorPermissionsObj = getStaticPermissionsJson(
    bridgeExecutors[chainId],
  );

  const obj: Contracts = {};
  const roles = generateRoles(bridgeExecutorPermissionsObj);

  if (chainId === ChainId.polygon) {
    const bridgeExecutorContract = new ethers.Contract(
      AaveGovernanceV2.POLYGON_BRIDGE_EXECUTOR,
      polygonBridgeExecutorABI,
      provider,
    );
    const guardian = await bridgeExecutorContract.getGuardian();
    // const ethereumGovExecutor =
    //   await bridgeExecutorContract.getEthereumGovernanceExecutor();
    const fxChild = await bridgeExecutorContract.getFxChild();
    const fxRootSender = await bridgeExecutorContract.getFxRootSender();

    obj['PolygonBridgeExecutor'] = {
      address: AaveGovernanceV2.POLYGON_BRIDGE_EXECUTOR,
      modifiers: [
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: guardian,
              owners: await getSafeOwners(provider, guardian),
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyGuardian'],
        },
        {
          modifier: 'onlyThis',
          addresses: [
            {
              address: AaveGovernanceV2.POLYGON_BRIDGE_EXECUTOR,
              owners: [],
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyThis'],
        },
        {
          modifier: 'onlyFxChild',
          addresses: [
            {
              address: fxChild,
              owners: await getSafeOwners(provider, fxChild),
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyFxChild'],
        },
        {
          modifier: 'onlyFxRootSender',
          addresses: [
            {
              address: fxRootSender,
              owners: await getSafeOwners(provider, fxRootSender),
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyFxRootSender'],
        },
      ],
    };
  } else if (chainId === ChainId.optimism) {
    // } else if () {
  } else {
    return {};
  }

  return obj;
};
