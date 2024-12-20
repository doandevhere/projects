import SwapTokenSection from "./components/SwapTokenSection";

function App() {
  return (
    <div className="flex justify-center items-center h-screen overflow-y-auto p-4 flex-col bg-black/60">
      <h3 className="text-white text-3xl md:text-6xl font-bold text-center mb-8 md:mb-12">
        Swap anytime, <br /> anywhere.
      </h3>
      <SwapTokenSection />
      <p className="text-white/50 text-center text-xs md:text-sm my-6">
        The largest onchain marketplace. Buy and sell crypto. <br /> on Ethereum
        and 11+ other chains.
      </p>
      <p className="text-white/50 text-center text-xs border-t border-white/10 pt-3">
        WARNING: We use common character <b>","</b> to separate thousands.
      </p>
    </div>
  );
}

export default App;
