import { useMemo } from "react";
import { useConfig } from "./useConfig";
const HeavyComponent = () => {
  const { isLoading, toggleIsLoading } = useConfig();
  // crash app if uncommented
  // const value = new Array(50_000_000).fill(1).reduce((acc, curr) => acc + curr, 0);

  // CPU can 100% in first render
  const value = useMemo(() => {
    return new Array(50_000_000).fill(1).reduce((acc, curr) => acc + curr, 0);
  }, []);

  console.count("HeavyComponent");

  return (
    <div>
      HeavyComponent - {isLoading ? "loading" : "not loading"}
      {value}
      <button onClick={toggleIsLoading}>Change loading</button>
    </div>
  );
};

export default HeavyComponent;
