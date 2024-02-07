import { ReactNode } from "react";
import { cn } from "../../../../../app/utils/cn";
// import { useNavbarMobileAdmController } from "./useNavbarMobileAdmController";

interface ItemNavbarProps {
  children: ReactNode;
  name: string;
  isActive: boolean;
  onNavigate(): void;
}

export function ItemNavbar({
  children,
  name,
  isActive,
  onNavigate,
}: ItemNavbarProps) {
  return (
    <div
      onClick={onNavigate}
      className={cn(
        "relative flex items-center gap-5 w-full h-10 rounded px-2 py-3 text-gray-700 bg-white",
        isActive && "text-cyan-600 bg-cyan-50"
      )}
    >
      <div
        className={cn(
          "absolute hidden left-0 w-0.5 h-[38px] bg-cyan-600",
          isActive && "flex"
        )}
      ></div>

      <div className="w-6">{children}</div>

      <span className={cn("text-sm font-normal", isActive && "font-bold")}>
        {name}
      </span>
    </div>
  );
}
