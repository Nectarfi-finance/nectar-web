import { web3} from '@project-serum/anchor';
import { Connection, PublicKey, SystemProgram} from '@solana/web3.js';
import { NECTARFI_PROGRAM_ID } from './helper';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { getProgram } from './anchor-config';

// export const initializeNctMint = async (
//   wallet: AnchorWallet,
//   connection: Connection,
//   setErrorMessage: (message: string) => void,
//   setIsLoading: (isLoading: boolean) => void
// ) => {
//   setIsLoading(true);
//   setErrorMessage('');

//   try {
//     if (!wallet || !wallet.publicKey) {
//       console.log("No wallet provided...");
//       setErrorMessage('Wallet is not connected.');
//       return false;
//     }

//     const program = getProgram(wallet, connection)

//     const [nctMint, nctMintBump] = PublicKey.findProgramAddressSync(
//       [Buffer.from("nct_mint")],
//       NECTARFI_PROGRAM_ID
//     );

//     console.log("NCT Mint PDA:", nctMint.toBase58());
//     console.log("NCT Mint bump:", nctMintBump);

//     const [nectarfiState] = PublicKey.findProgramAddressSync(
//       [Buffer.from("nectarfi_state")],
//       NECTARFI_PROGRAM_ID
//     );

//     console.log("NectarFi state PDA:", nectarfiState.toBase58());

//     console.log("Creating NCT Mint account");

//     const lamports = await connection.getMinimumBalanceForRentExemption(MINT_SIZE);

//     const transaction = new Transaction().add(
//       SystemProgram.createAccount({
//         fromPubkey: wallet.publicKey,
//         newAccountPubkey: nctMint,
//         space: MINT_SIZE,
//         lamports,
//         programId: TOKEN_PROGRAM_ID,
//       }),
//       createInitializeMintInstruction(
//         nctMint,
//         2,
//         wallet.publicKey,
//         wallet.publicKey,
//         TOKEN_PROGRAM_ID
//       )
//     );

//     console.log("Transaction created for NCT Mint account creation");

//     const { blockhash } = await connection.getLatestBlockhash();
//     transaction.recentBlockhash = blockhash;
//     transaction.feePayer = wallet.publicKey;

//     const signedTransaction = await wallet.signTransaction(transaction);
//     console.log("Transaction signed successfully");
    
//     const rawTransaction = signedTransaction.serialize();
//     const txId = await connection.sendRawTransaction(rawTransaction);
//     console.log("Transaction sent. Awaiting confirmation...");
    
//     await connection.confirmTransaction(txId);
//     console.log("NCT Mint account created successfully. Transaction ID:", txId);

//     console.log("Initializing NCT Mint in NectarFi program");

//     return true;
//   } catch (error) {
//     console.error("Error in initializeNctMint function:", error);
//     if (error instanceof web3.SendTransactionError) {
//       console.error("Transaction logs:", error.logs);
//     }
//     setErrorMessage(`Failed to initialize NCT Mint: ${error instanceof Error ? error.message : String(error)}`);
//     return false;
//   } finally {
//     setIsLoading(false);
//   }
// };

export const initializeNctMint = async (
  wallet: AnchorWallet,
  connection: Connection,
  setErrorMessage: (message: string) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);
  setErrorMessage('');

  try {
    if (!wallet || !wallet.publicKey) {
      console.log("No wallet provided...");
      setErrorMessage('Wallet is not connected.');
      return false;
    }

    const program = getProgram(wallet, connection);

    const [nctMint, nctMintBump] = PublicKey.findProgramAddressSync(
      [Buffer.from("nct_mint")],
      NECTARFI_PROGRAM_ID
    );

    console.log("NCT Mint PDA:", nctMint.toBase58());
    console.log("NCT Mint bump:", nctMintBump);

    const [nectarfiState] = PublicKey.findProgramAddressSync(
      [Buffer.from("nectarfi_state")],
      NECTARFI_PROGRAM_ID
    );

    console.log("NectarFi state PDA:", nectarfiState.toBase58());

    console.log("Initializing NCT Mint");

    const tx = await program.methods
      .initializeNctMint(nctMintBump)
      .accounts({
        nctMint: nctMint,
        payer: wallet.publicKey,
        nectarfiState: nectarfiState,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .rpc();

    console.log("NCT Mint initialized successfully. Transaction ID:", tx);

    return true;
  } catch (error) {
    console.error("Error in initializeNctMint function:", error);
    if (error instanceof web3.SendTransactionError) {
      console.error("Transaction logs:", error.logs);
    }
    setErrorMessage(`Failed to initialize NCT Mint: ${error instanceof Error ? error.message : String(error)}`);
    return false;
  } finally {
    setIsLoading(false);
  }
};
