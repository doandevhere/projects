import { useState } from "react";
import { ConfigContext } from "./ConfigContext";

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleIsLoading = () => {
    setIsLoading((prev) => !prev);
  };

  return (
    <ConfigContext.Provider
      value={{ theme, setTheme, toggleTheme, isLoading, toggleIsLoading }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
