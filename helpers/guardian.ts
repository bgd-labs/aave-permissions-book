import { gnosisSafeABI } from '../abis/gnosisSafe.js';
import { Client, getAddress, getContract } from 'viem';

export const getSafeOwners = async (
  provider: Client,
  address: string,
): Promise<string[]> => {
  const gnosisContract = getContract({ address: getAddress(address), abi: gnosisSafeABI, client: provider });
  try {
    const safeOwners = await gnosisContract.read.getOwners() as string[];
    return safeOwners;
  } catch (error) {
    return [];
  }
};

export const getSafeThreshold = async (
  provider: Client,
  address: string,
): Promise<number> => {
  const gnosisContract = getContract({ address: getAddress(address), abi: gnosisSafeABI, client: provider });

  try {
    const signersThreshold = await gnosisContract.read.getThreshold() as bigint;
    return Number(signersThreshold);
  } catch (error) {
    return 0;
  }
};
