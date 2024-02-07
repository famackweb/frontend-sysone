import { ComponentProps, useState } from "react";
import { cn } from "../../app/utils/cn";
import {
  RiCheckFill,
  RiErrorWarningLine,
  RiEyeLine,
  RiEyeOffLine,
} from "@remixicon/react";

interface InputPasswordProps extends ComponentProps<"input"> {
  error?: boolean;
  checked?: boolean;
}

export function InputPassword({
  error,
  checked,
  ...props
}: InputPasswordProps) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleVisibleText = () => {
    setIsTextVisible((prevState) => !prevState);
  };

  const typeInputTextPassword = () => {
    if (checked || error) {
      return false;
    }

    if (!checked && !error && !isTextVisible) {
      return false;
    }

    return true;
  };

  return (
    <div className="relative ">
      <input
        {...props}
        type={typeInputTextPassword() ? "text" : "password"}
        className={cn(
          "w-full h-12 p-3 pr-10 flex-shrink-0 inline-flex items-start gap-2.5 text-gray-800 bg-white rounded border border-gray-50 hover:border-green-500 focus:border-green-500 focus:placeholder:text-black placeholder:text-gray-600  outline-none",
          error && "!border-danger "
        )}
      />

      <div
        className={cn(
          "absolute flex justify-center items-center h-full right-3 top-0"
        )}
      >
        <button
          className={cn(
            "h-full text-[#667686]",
            (error || checked) && "hidden"
          )}
          onClick={toggleVisibleText}
        >
          {isTextVisible ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
        </button>

        <RiErrorWarningLine
          size={18}
          className={cn("text-red-400 hidden", error && "block")}
        />
        <RiCheckFill
          size={18}
          className={cn("text-green-500 hidden", checked && "block")}
        />
      </div>
    </div>
  );
}
