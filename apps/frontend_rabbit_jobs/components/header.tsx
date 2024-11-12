import React from "react";
import ThemeSwitcher from "./core/theme-switcher";
import { Rabbit } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Container from "./container";

type Props = {
  className?: string;
};

const Header = (props: Props) => {
  const { className } = props;

  return (
    <header className={cn("sticky top-0 z-50", className)}>
      <div className="relative border-b dark:border-gray-800 bg-white/90 dark:bg-black/90">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Rabbit size={48} className="text-primary" strokeWidth={1.125} />
              <span className="font-black text-primary mt-2">Rabbit Jobs</span>
            </Link>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="rounded-full text-black dark:text-white">
                Sign Up
              </Button>
              <Button className="rounded-full text-white">Sign In</Button>
              <ThemeSwitcher type="toggle-button" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
