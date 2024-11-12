"use client";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  type?: "switch" | "toggle-button";
  className?: string;
};

const ThemeSwitcher = (props: Props) => {
  const { type = "button", className } = props;

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
      document.documentElement.classList.toggle("dark", event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  if (type === "toggle-button") {
    return (
      <Button
        className={cn(
          "p-0 h-auto bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent text-black dark:text-white",
          className
        )}
        onClick={toggleTheme}
        variant="ghost"
      >
        {isDarkMode ? <Moon /> : <Sun />}
      </Button>
    );
  }

  return (
    <Switch
      checked={isDarkMode}
      onCheckedChange={toggleTheme}
      className={cn(className)}
    >
      <SwitchPrimitives.Thumb className="block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950">
        {isDarkMode ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </SwitchPrimitives.Thumb>
    </Switch>
  );
};

export default ThemeSwitcher;
