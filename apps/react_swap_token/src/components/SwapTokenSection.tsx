import { ArrowDownUp } from "lucide-react";
import { useState } from "react";
import SelectTokenWithDialog from "./SelectTokenWithDialog";
import Input from "./Input";

const SwapTokenSection = () => {
  const [swapData, setSwapData] = useState({
    sellToken: {
      logo: "https://token-icons.s3.amazonaws.com/eth.png",
      name: "ETH",
    },
    buyToken: {
      logo: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
      name: "USDT",
    },
  });

  return (
    <div className="mx-auto text-white p-6 rounded-lg shadow-lg border-2 border-white/10 w-full md:w-2/3 flex flex-col md:max-w-[500px] relative">
      <div className="sell border-2 p-4 rounded-xl border-white/10 hover:border-white/30 transition-all duration-300">
        <p className="text-gray-400 text-md">Sell</p>
        <div className="flex items-center gap-2 py-4">
          <Input
            type="number"
            className="bg-transparent border-none outline-none text-white placeholder:text-gray-400 text-3xl flex-1 min-w-0"
            placeholder="0.00"
          />
          <SelectTokenWithDialog
            currentToken={swapData.sellToken}
            onSelectToken={(token) => {
              setSwapData({ ...swapData, sellToken: token });
            }}
          />
        </div>
        <div className="dollar-amount">
          <p className="text-gray-400 text-md">$0.00</p>
        </div>
      </div>

      <div className="relative my-1">
        <button className="bg-black text-pink-200 size-12 rounded-lg flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <ArrowDownUp />
        </button>
      </div>

      <div className="buy border-2 p-4 rounded-xl border-white/10 hover:border-white/30 transition-all duration-300">
        <p className="text-gray-400 text-md">Buy</p>
        <div className="flex items-center gap-2 py-4">
          <Input
            className="bg-transparent border-none outline-none text-white placeholder:text-gray-400 text-3xl flex-1 min-w-0"
            placeholder="0.00"
            type="number"
          />
          <SelectTokenWithDialog
            currentToken={swapData.buyToken}
            onSelectToken={(token) => {
              setSwapData({ ...swapData, buyToken: token });
            }}
          />
        </div>
        <div className="dollar-amount">
          <p className="text-gray-400 text-md">$0.00</p>
        </div>
      </div>

      <button className="bg-pink-500/10 text-pink-600 px-2 py-4 rounded-xl text-lg uppercase font-bold hover:bg-pink-500/20 transition-all duration-300 mt-4">
        Swap
      </button>
    </div>
  );
};

export default SwapTokenSection;
