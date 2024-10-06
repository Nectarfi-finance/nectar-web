import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, Keypair, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { BN } from "@project-serum/anchor";
import { getProgram } from "./anchor-config";
import { NECTARFI_PROGRAM_ID } from "./helper";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

// Define the structure of the NectarfiState account
interface NectarfiState {
  lastYieldCheck: BN;
  currentBestYield: BN;
  totalDeposits: BN;
  currentBestProtocol: string;
  nctMint: PublicKey;
}

export async function initialize(
  wallet: AnchorWallet,
  connection: Connection, 
  setErrorMessage: (error: any) => void
): Promise<PublicKey> {
  const program = getProgram(wallet, connection);
  const [nectarfiState,] = await PublicKey.findProgramAddress(
    [Buffer.from("nectar_acct")],
    NECTARFI_PROGRAM_ID
  );

  // Check if the account already exists
  const accountInfo = await connection.getAccountInfo(nectarfiState);
  
  if (accountInfo !== null) {
    console.log("NectarFi state account already exists. Fetching existing data...");
    const state = await program.account.nectarfiState.fetch(nectarfiState) as NectarfiState;
    if (state.nctMint) {
      console.log("Existing NCT Mint address:", state.nctMint.toBase58());
      return state.nctMint;
    } else {
      throw new Error("Existing state does not contain a valid NCT Mint address");
    }
  }

  const nctMint = Keypair.generate();

  try {
    const tx = await program.methods
      .initialize()
      .accounts({
        nectarfiState: nectarfiState,
        user: wallet.publicKey,
        nctMint: nctMint.publicKey,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
      })
      .signers([nctMint])
      .rpc();

    console.log("Initialization transaction signature", tx);
    console.log("New NCT Mint address:", nctMint.publicKey.toBase58());
    return nctMint.publicKey;
  } catch (error) {
    setErrorMessage(error)
    console.error("Error initializing program:", error);
    throw error;
  }
}