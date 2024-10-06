import { AnchorProvider, Program } from '@project-serum/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import rawIdl from './idl/idl.json';
import { NECTARFI_PROGRAM_ID } from './helper';

export const getProgram = (wallet: AnchorWallet, connection: Connection) => {
  if (!wallet.publicKey) {
    throw new Error("Wallet not connected");
  }

  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: 'confirmed',
  });

  const programId = new PublicKey(NECTARFI_PROGRAM_ID);

  return new Program(rawIdl as any, programId, provider);
};

export const useNectarfiProgram = (wallet: AnchorWallet, connection: Connection) => {
  try {
    return getProgram(wallet, connection);
  } catch (error) {
    console.error("Error initializing NectarFi program:", error);
    return null;
  }
};