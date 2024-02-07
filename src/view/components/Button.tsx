import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "large" | "medium" | "small";
  danger?: boolean;
  className?: string;
}

export function Button({
  variant,
  size,
  danger,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `w-full p-2 flex items-center justify-center gap-2.5 text-white text-base font-medium leading-6 bg-green-600 active:bg-green-600 active:text-white 
        border border-green-600 hover:text-green-700 hover:bg-[#66C666] rounded transition-all
        disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-50 disabled:cursor-not-allowed
        `,
        variant === "secondary" &&
          `text-green-600 font-bold bg-transparent hover:bg-green-600/15 active:bg-green-600 active:text-white transition-all
          disabled:bg-gray-50/50 disabled:border-gray-50 
          `,
        size === "medium" && "max-w-[162px] text-sm",
        size === "small" && "w-auto h-[30px] text-xs px-4 py-2",
        danger &&
          variant === "secondary" &&
          "border-danger/85 text-danger hover:bg-danger/50 hover:text-danger active:bg-danger active:text-white transition-all",
        className
      )}
    />
  );
}
