import { RiCheckFill } from "@remixicon/react";
import { cn } from "../../../app/utils/cn";

interface StepProps {
  currentStep: number;
  label?: string;
  value: number;
}

export function Step({ currentStep, label, value }: StepProps) {
  return (
    <div className={cn("relative flex justify-center items-center  gap-2")}>
      <div
        className={cn(
          "w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 ",
          value === currentStep && "bg-green-600 border-green-600 text-white",
          value < currentStep && "border-green-600",
          value > currentStep && "border-gray-100 bg-gray-100 text-white"
        )}
      >
        {value < currentStep && (
          <RiCheckFill size={12} className="text-green-600" />
        )}

        {value >= currentStep && (
          <span className="text-sm font-bold leading-3 tracking-[0.38px]">
            {value}
          </span>
        )}
      </div>
      <span
        className={cn(
          "text-sm font-normal leading-3 text-gray-800",
          value > currentStep && "text-gray-100"
        )}
      >
        {label}
      </span>
    </div>
  );
}
