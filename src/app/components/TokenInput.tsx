import { ChevronDown } from "lucide-react";

interface TokenInputProps {
    isActive: boolean;
    isUSDC: boolean;
    amount: string;
    setAmount: (e: string) => void
    usdcBalance: number;
    nctBalance: number
}

const TokenInput: React.FC<TokenInputProps> = ({ isActive, isUSDC, amount, setAmount, usdcBalance,  nctBalance}) => {


    return (
        <div className={`bg-gray-800 p-4 rounded-lg ${isActive ? 'mb-2' : 'mb-4'}`}>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <div className={`${isUSDC ? 'bg-blue-500' : 'bg-yellow-500'} w-6 h-6 rounded-full flex items-center justify-center mr-2`}>
                        <span className="text-xs">{isUSDC ? '$' : 'N'}</span>
                    </div>
                    <span className="mr-1">{isUSDC ? 'USDC' : 'Nectar'}</span>
                    <ChevronDown size={16} />
                </div>
                {isActive && (
                <div>
                    <button className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md mr-2">25%</button>
                    <button className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md mr-2">25%</button>
                    <button className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md mr-2">25%</button>
                    <button className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md">Max</button>
                </div>
                )}
            </div>
            {isActive ? (
                <>
                    <div className="flex flex-col justify-center mt-10 items-center px-">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full text-[60px] text-center bg-transparent outline-none rounded text-white"
                            placeholder="0.00"
                        />
                        <p>{isUSDC ? usdcBalance : nctBalance}</p>
                    </div>
                    {/* <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-gray-700 p-2 rounded text-white mb-4"
                        placeholder="0.00"
                    /> */}
                </>
            ) : (
                <div className="text-lg font-semibold">{isUSDC ? usdcBalance : nctBalance}</div>
            )}
        </div>
    );
}

export default TokenInput;