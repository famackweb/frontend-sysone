import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { cn } from "../../../../../app/utils/cn";

interface ItemSidebarProps {
  children: ReactNode;
  name: string;
  link: string;
  isActive: boolean;
}

export function ItemSidebar({
  children,
  name,
  link,
  isActive,
}: ItemSidebarProps) {
  return (
    <Link
      to={link}
      className={cn(
        "relative flex flex-col justify-center items-center w-[74px] h-[56px] px-0.5 py-3 text-gray-700 bg-white",
        isActive && "text-cyan-600 bg-cyan-50"
      )}
    >
      <div
        className={cn(
          "absolute hidden left-0 w-0.5 h-[38px] bg-cyan-600",
          isActive && "flex"
        )}
      ></div>

      {children}

      <span className={cn("text-[10px] font-normal", isActive && "font-bold")}>
        {name}
      </span>
    </Link>
  );
}
