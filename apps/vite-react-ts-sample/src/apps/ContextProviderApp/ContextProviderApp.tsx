import { ConfigProvider } from "./ConfigProvider";
import HeavyComponentWithWorker from "./HeavyComponentWithWorker";
import LightweightComponent from "./LightweightComponent";

const ContextProviderApp = () => {
  console.count("ContextProviderApp");
  return (
    <ConfigProvider>
      {/* <HeavyComponent /> */}
      <HeavyComponentWithWorker />
      <LightweightComponent />
    </ConfigProvider>
  );
};

export default ContextProviderApp;
