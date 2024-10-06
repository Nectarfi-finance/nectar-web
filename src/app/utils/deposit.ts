import { ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { getProgram } from "./anchor-config";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import * as anchor from '@project-serum/anchor';
import { NctMint, NECTARFI_PROGRAM_ID, usdcMint } from "./helper";

export async function deposit(
  wallet: AnchorWallet,
  connection: Connection,
  setErrorMessage: (message: string) => void,
  amount: number
) {
    const program = getProgram(wallet, connection);

    const amountToDeposit = amount * Math.pow(10, 6); // Assuming 6 decimals for USDC
  
    const [nectarfiState,] = await PublicKey.findProgramAddress(
      [Buffer.from("nectar_acct")],
      NECTARFI_PROGRAM_ID
    )
  
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
  
    let preInstructions = [];
  
    // Check if user's NCT account exists, if not, add instruction to create it
    const userNctAccountInfo = await connection.getAccountInfo(userNctAccount);
    if (!userNctAccountInfo) {
      console.log("Creating user's NCT account...");
      preInstructions.push(
        createAssociatedTokenAccountInstruction(
          wallet.publicKey,
          userNctAccount,
          wallet.publicKey,
          NctMint
        )
      );
    }
  
    try {
      console.log("Initiating deposit transaction...");
      const tx = await program.methods
        .deposit(new anchor.BN(amountToDeposit))
        .accounts({
          nectarfiState: nectarfiState,
          user: wallet.publicKey,
          userTokenAccount: userUsdcAccount,
          vaultTokenAccount: vaultTokenAccount,
          usdcMint: usdcMint,
          nctMint: NctMint,
          userNctAccount: userNctAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: SYSVAR_RENT_PUBKEY,
        })
        .preInstructions(preInstructions)
        .rpc();
  
      console.log("Deposit successful! Transaction signature:", tx);
    } catch (error) {
      console.error("Error during deposit:", error);
      setErrorMessage(`Failed to fetch balances: ${error}`)
    }
  }