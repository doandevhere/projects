import { useEffect, useState } from "react";
import { useConfig } from "./useConfig";

const HeavyComponentWithWorker = () => {
  const { isLoading, toggleIsLoading } = useConfig();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // web worker is not supported in this browser
    if (!window.Worker) return;

    const worker = new Worker(new URL("./worker.ts", import.meta.url), {
      type: "module",
    });

    worker.postMessage(50_000_000);

    worker.onmessage = (event) => {
      setValue(event.data);
    };

    return () => {
      worker.terminate();
    };
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

export default HeavyComponentWithWorker;
