import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface TextareaProps extends Omit<ComponentProps<"textarea">, "size"> {
  error?: boolean;
  className?: string;
  defaultValue?: string;
}

export function Textarea({
  error,
  className,
  defaultValue,
  ...props
}: TextareaProps) {
  return (
    <div className="relative">
      <textarea
        {...props}
        className={cn(
          "text-sm font-medium leading-4 w-full min-h-16 p-3 flex-shrink-0 inline-flex items-start gap-2.5 text-gray-800 bg-white border border-gray-50 hover:border-green-500 focus:border-green-500 focus:placeholder:text-black placeholder:text-gray-600 outline-none",
          "disabled:bg-gray-50 disabled:border-gray-50",
          error && "!border-danger pr-10",
          className
        )}
        defaultValue={defaultValue}
      />
    </div>
  );
}
