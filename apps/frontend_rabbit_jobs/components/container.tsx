import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  const { children, className } = props;

  return <div className={cn("container mx-auto p-3", className)}>{children}</div>;
};

export default Container;
