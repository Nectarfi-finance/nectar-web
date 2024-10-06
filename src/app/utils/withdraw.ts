import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, SystemProgram } from "@solana/web3.js";
import { NctMint, NECTARFI_PROGRAM_ID, usdcMint } from "./helper";
import { getProgram } from "./anchor-config";
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as anchor from '@project-serum/anchor';

export const withdraw = async (
    wallet: AnchorWallet,
    connection: Connection,
    setErrorMessage: any,
    amount: number
) => {
    if (!wallet?.publicKey) return;
    setErrorMessage('');

    const program = getProgram(wallet, connection)

    const nctAmountToWithdraw = amount * Math.pow(10, 6); 

  const [nectarfiState, stateBump] = await PublicKey.findProgramAddress(
    [Buffer.from("nectar_acct")],
    NECTARFI_PROGRAM_ID
  );

  const userUsdcAccount = await getAssociatedTokenAddress(
    usdcMint,
    wallet.publicKey
  );

  const userNctAccount = await getAssociatedTokenAddress(
    NctMint,
    wallet.publicKey
  );

  const vaultTokenAccount = await getAssociatedTokenAddress(
    usdcMint,
    nectarfiState,
    true // allowOwnerOffCurve: true
  );

  console.log("NectarFi State:", nectarfiState.toBase58());
  console.log("User USDC Account:", userUsdcAccount.toBase58());
  console.log("User NCT Account:", userNctAccount.toBase58());
  console.log("Vault Token Account:", vaultTokenAccount.toBase58());

  try {
    console.log("Initiating withdrawal transaction...");
    const tx = await program.methods
      .withdraw(new anchor.BN(nctAmountToWithdraw))
      .accounts({
        nectarfiState: nectarfiState,
        user: wallet.publicKey,
        userTokenAccount: userUsdcAccount,
        vaultTokenAccount: vaultTokenAccount,
        usdcMint: usdcMint,
        nctMint: NctMint,
        userNctAccount: userNctAccount,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    console.log("Withdrawal successful! Transaction signature:", tx);
  } catch (error) {
    throw error;
  }
};