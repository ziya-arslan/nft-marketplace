import { ethers } from "ethers";
// TODO: Remove logs
export const checkWalletConnection = async () => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();

    if (network && network.chainId) {
      console.log("Wallet is connected!");
      return true;
    } else {
      console.log("Wallet is not connected");
      return false;
    }
  } else {
    console.log("No wallet detected");
    return false;
  }
};
