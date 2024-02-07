import { RiQrCodeLine } from "@remixicon/react";
import { cn } from "../../../../../app/utils/cn";

interface CountCardProps {
  title: string;
  value: number;
  colorIcon?: "succes" | "danger";
}

export function CountCard({ title, value, colorIcon }: CountCardProps) {
  return (
    <div className="rounded bg-white p-6 space-y-2">
      <h2 className="text-sm md:text-base text-gray-800 font-normal leading-4">
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <RiQrCodeLine
          size={20}
          className={cn(
            "text-gray-600",
            colorIcon === "succes" && "text-green-500",
            colorIcon === "danger" && "text-[#FF0404D9]"
          )}
        />
        <span className="text-base md:text-xl font-semibold leading-4">
          {value}
        </span>
      </div>
    </div>
  );
}
