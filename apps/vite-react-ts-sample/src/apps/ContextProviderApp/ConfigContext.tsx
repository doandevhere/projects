import { createContext } from "react";

export type ConfigContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  toggleTheme: () => void;
  isLoading: boolean;
  toggleIsLoading: () => void;
};

export const ConfigContext = createContext<ConfigContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
  isLoading: false,
  toggleIsLoading: () => {},
});
