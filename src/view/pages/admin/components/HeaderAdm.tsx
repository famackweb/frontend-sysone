import { Link } from "react-router-dom";
import user from "../../../../assets/userAdm.svg";
import {
  RiLogoutBoxRLine,
  RiMenuLine,
  RiSettings3Line,
} from "@remixicon/react";

interface HeaderAdmProps {
  openNavbar(): void;
}

export function HeaderAdm({ openNavbar }: HeaderAdmProps) {
  return (
    <header className="relative flex items-center justify-between md:justify-end w-full min-h-[70px] px-3 border-b-[0.5px] border-l-[0.5px] border-gray-50">
      {/* <img src={logo} alt="" className="block md:hidden" /> */}
      <h1 className="block md:hidden">Logo</h1>

      <button className="block md:hidden" onClick={openNavbar}>
        <RiMenuLine size={24} className="text-gray-700" />
      </button>

      <div className="hidden md:flex items-center justify-center gap-6">
        <Link to="/admin/settings/users">
          <RiSettings3Line size={24} className="text-gray-700" />
        </Link>

        <div className="w-[1px] h-[35px] bg-gray-700/65"></div>

        <div className="flex items-center gap-3 ">
          <img src={user} alt="" />

          <span className="text-sm font-bold leading-4 tracking-[-0.24px] text-gray-700">
            Nome Sobrenome
          </span>
        </div>

        <div className="w-[1px] h-[35px] bg-gray-700/65"></div>

        <button className="flex items-center gap-2 text-sm font-normal leading-4 tracking-[-0.24px] text-gray-700">
          <RiLogoutBoxRLine size={24} />
          Sair
        </button>
      </div>
    </header>
  );
}
