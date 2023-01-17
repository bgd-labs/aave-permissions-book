import { ethers, providers, utils } from 'ethers';
import gnosisSafeABI from '../abis/gnosisSafe.json';

export const getSafeOwners = async (
  provider: providers.Provider,
  address: string,
): Promise<string[]> => {
  const gnosisContract = new ethers.Contract(address, gnosisSafeABI, provider);

  try {
    const safeOwners = await gnosisContract.getOwners();
    console.log('safe owners: ', safeOwners);
    return safeOwners;
  } catch (error) {
    return [];
  }
};
