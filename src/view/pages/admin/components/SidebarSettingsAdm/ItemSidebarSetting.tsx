import { Link } from "react-router-dom";
import { cn } from "../../../../../app/utils/cn";

interface ItemSidebarSettingProps {
  name: string;
  link: string;
  isActive: boolean;
}

export function ItemSidebarSetting({
  name,
  link,
  isActive,
}: ItemSidebarSettingProps) {
  return (
    <>
      <Link
        to={link}
        className={cn(
          "flex md:hidden items-center border-b-2 px-2 py-3 border-gray-50",
          isActive && "text-cyan-600 bg-cyan-600/15 border-cyan-600"
        )}
      >
        <span
          className={cn(
            "text-gray-800 font-normal text-sm lg:text-base leading-6",
            isActive && "text-cyan-600 font-bold"
          )}
        >
          {name}
        </span>
      </Link>

      <Link
        to={link}
        className={cn(
          "hidden relative h-11 md:flex items-center pl-4 lg:pl-8 pr-3 lg:pr-6",
          isActive && "text-cyan-600 bg-cyan-600/15"
        )}
      >
        <span
          className={cn(
            "text-gray-800 font-normal text-sm lg:text-base leading-6",
            isActive && "text-cyan-600 font-bold"
          )}
        >
          {name}
        </span>

        {isActive && (
          <div className="absolute -right-[1px] w-[3px] h-11 bg-cyan-600"></div>
        )}
      </Link>
    </>
  );
}
