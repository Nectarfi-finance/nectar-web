import { Connection } from '@solana/web3.js';
import { getAssociatedTokenAddress, getAccount } from '@solana/spl-token';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { NctMint, usdcMint } from './helper'

export const fetchBalances = async (
  wallet: AnchorWallet,
  connection: Connection,
  setErrorMessage: (message: string) => void,
  setUsdcBalance: (balance: number) => void,
  setNctBalance: (balance: number) => void,
) => {
  try {
    console.log("Fetching balances...");
    console.log("Wallet public key:", wallet.publicKey.toBase58());

    // Fetch USDC balance
    const userUsdcAccount = await getAssociatedTokenAddress(usdcMint, wallet.publicKey);
    console.log("User USDC account:", userUsdcAccount.toBase58());
    // Fetch NCT balance
    const userNctAccount = await getAssociatedTokenAddress(NctMint, wallet.publicKey);
    console.log("User USDC account:", userNctAccount.toBase58());
    
    try {
      const usdcAccountInfo = await getAccount(connection, userUsdcAccount);
      const usdcBalance = Number(usdcAccountInfo.amount) / 1e6; // Assuming 6 decimals for USDC
      console.log("USDC balance:", usdcBalance);
      const nctAccountInfo = await getAccount(connection, userNctAccount);
      const nctBalance = Number(nctAccountInfo.amount)
      console.log("USDC balance:", usdcBalance);
      setUsdcBalance(usdcBalance);
      setNctBalance(nctBalance);
    } catch (error) {
        throw error;
    }

    // ... rest of the function remains the same
  } catch (error) {
    throw error;
  }
};