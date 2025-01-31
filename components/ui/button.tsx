import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  variant?: "primary" | "outline" | "green";
  children: React.ReactNode;
  className?: string;
};

const Button = ({ variant = "primary", children, className }: Props) => {
  return (
    <button
      className={cn(
        "py-3 px-6 xl:py-4 xl:px-8 rounded-[14px] border transition-all",
        variant === "outline"
          ? "text-black border-black-100 hover:bg-black-100  hover:text-white"
          : variant === "green"
          ? "text-black bg-main hover:opacity-80"
          : "bg-black-100 text-white border-transparent hover:opacity-80",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
