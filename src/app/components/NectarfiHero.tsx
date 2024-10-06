"use client"
import { ArrowDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { fetchBalances } from '@/app/utils/fetchBalances';
import { deposit } from '@/app/utils/deposit';
import { withdraw } from '@/app/utils/withdraw';
import TokenInput from './TokenInput';

const NectaerfiHero = () => {
    const [amount, setAmount] = useState<string>('');
    const wallet = useAnchorWallet();
    const { connection } = useConnection();
    const { connected } = useWallet();
    const [usdcBalance, setUsdcBalance] = useState(0);
    const [nctBalance, setNctBalance] = useState(0);
    const [isBuying, setIsBuying] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (connected && wallet?.publicKey) {
            //   fetchNctMintStatus();
            fetchBalances(wallet, connection, setErrorMessage, setNctBalance, setUsdcBalance,);
        }
    }, [wallet, connection, connected]);

    const handleTransaction = async () => {
        setIsLoading(true);
        setErrorMessage('');
        try {
            if (!wallet) {
                setErrorMessage('Wallet not connected');
                return;
            }

            if (isBuying) {
                await deposit(wallet, connection, setErrorMessage, Number(amount));
            } else {
                await withdraw(wallet, connection, setErrorMessage, Number(amount));
            // Refresh balances after transaction
            await fetchBalances(wallet, connection, setErrorMessage, setNctBalance, setUsdcBalance,);
            }
        } catch (error) {
            console.error("Transaction error:", error);
            setErrorMessage('Transaction failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div>loading...</div>;
      }
      
      if (errorMessage) {
        return <div>error...</div>;
      }

    return (
        <div className='w-full mt-14 p-20 bg-gray-900 text-white min-h-screen py-4 font-sans mb-20'>
            <main className=" flex items-center space-x-10">

                <div className="bg-gray-900 text-white my-6 rounded-lg flex-1">
                    <h1 className="text-[60px] font-bold mb-2 text-center">Simplified
                    On-Chain Saving</h1>
                    <p className="text-[20px] mb-6 text-center">Simplified DeFi Yield Optimization on Solana</p>2
                    {/* <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
                            <p className="text-sm text-center">Deposit Stablecoins</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <ArrowRight className="text-yellow-500" />
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
                            <p className="text-sm text-center">$Nectar Token In</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
                            <p className="text-sm text-center">Get $Nectar Token</p>
                        </div>
                        <div className="bg-yellow-500 p-4 rounded-lg flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-gray-700 rounded-full mb-2 flex items-center justify-center">
                                <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                            </div>
                            <p className="text-xs text-center font-bold">Yield Optimization</p>
                            <p className="text-xs text-center">Accumulates & increases the token's value over time</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center">
                            <p className="text-sm text-center">Withdraw In Stablecoins</p>
                        </div>
                    </div> */}
                </div>

                <div className="bg-gray-00 text-white mt-10 rounded-lg w-[350px] lg:w-[450px]">
                    <div className="flex justify-between mb-4 bg-gray-800 p-2 rounded-md">
                        <button
                            className={`${isBuying ? 'bg-gray-900' : ''} w-full text-white px-4 py-2 rounded-md`}
                            onClick={() => setIsBuying(true)}
                        >
                            Buy
                        </button>
                        <button
                            className={`${!isBuying ? 'bg-gray-900' : ''} w-full text-white px-4 py-2 rounded-md`}
                            onClick={() => setIsBuying(false)}
                        >
                            Redeem
                        </button>
                    </div>

                    {isBuying ? (
                        <>
                            <TokenInput isActive={isBuying} isUSDC={true} amount={amount} setAmount={setAmount} usdcBalance={usdcBalance} nctBalance={nctBalance}/>
                            <div className="flex justify-center my-2">
                                <ArrowDown size={20} className="text-gray-500" />
                            </div>
                            <TokenInput isActive={!isBuying} isUSDC={false} amount={amount} setAmount={setAmount} usdcBalance={usdcBalance} nctBalance={nctBalance}/>
                        </>
                    ) : (
                        <>
                            <TokenInput isActive={!isBuying} isUSDC={false} amount={amount} setAmount={setAmount}usdcBalance={usdcBalance} nctBalance={nctBalance} />
                            <div className="flex justify-center my-2">
                                <ArrowDown size={20} className="text-gray-500" />
                            </div>
                            <TokenInput isActive={isBuying} isUSDC={true} amount={amount} setAmount={setAmount} usdcBalance={usdcBalance} nctBalance={nctBalance}/>
                        </>
                    )
                    }



                    <button className="bg-yellow-500 text-white w-full py-3 rounded-lg font-semibold flex items-center justify-center" style={{
                        background: "linear-gradient(94.42deg, #DF8F24 0%, #744200 100%)"

                    }} onClick={handleTransaction}>
                        {isBuying? "Deposit" : "Withdraw"}
                        {/* <ExternalLink size={16} className="ml-2" /> */}
                    </button>
                </div>
            </main>
        </div>
    )
}

export default NectaerfiHero