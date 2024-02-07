import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import {
  RiCheckFill,
  RiErrorWarningLine,
  RiSearchLine,
} from "@remixicon/react";

type SizeProps = "large" | "small";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  size?: SizeProps;
  error?: boolean;
  checked?: boolean;
  search?: boolean;
}

export function Input({ size, error, checked, search, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className={cn(
          "w-full px-3 py-2 flex-shrink-0 inline-flex items-start gap-2.5 text-gray-800 bg-white rounded border border-gray-50 hover:border-green-500 focus:border-green-500 focus:placeholder:text-black placeholder:text-gray-600  outline-none",
          error && "!border-red-400 pr-10",
          (checked || search) && "pr-10",
          size && "h-8 text-sm"
        )}
      />

      <div className={cn("absolute right-3 top-[12px]", size && "top-2.5")}>
        <RiErrorWarningLine
          size={size === "small" ? 12 : 18}
          className={cn("text-red-400 hidden", error && "block")}
        />
        <RiCheckFill
          size={size === "small" ? 12 : 18}
          className={cn("text-green-500 hidden", checked && "block")}
        />
        <RiSearchLine
          size={size === "small" ? 12 : 18}
          className={cn("text-[#33495E] hidden", search && "block")}
        />
      </div>
    </div>
  );
}
