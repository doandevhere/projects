import React from "react";
import { useConfig } from "./useConfig";

const LightweightComponent = () => {
  const { theme } = useConfig();
  console.count("LightweightComponent");

  return <div>LightweightComponent - {theme}</div>;
};

export default React.memo(LightweightComponent) ;
