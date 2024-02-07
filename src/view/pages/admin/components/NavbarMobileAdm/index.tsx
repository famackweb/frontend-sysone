import {
  RiBarChart2Line,
  RiBarChartBoxLine,
  RiCloseLine,
  RiContractLine,
  RiDashboardLine,
  RiGroup2Line,
  RiLogoutBoxRLine,
  RiMessage3Line,
  RiSettings3Line,
} from "@remixicon/react";
import logo from "../../../../../assets/logo1.png";
import { ItemNavbar } from "./ItemNavbar";
import { useNavbarMobileAdmController } from "./useNavbarMobileAdmController";

interface NavbarMobileAdmProps {
  onClose(): void;
  onNavigate(link: string): void;
}

export function NavbarMobileAdm({ onClose, onNavigate }: NavbarMobileAdmProps) {
  const { isActive } = useNavbarMobileAdmController();

  return (
    <div className="fixed inset-0 flex flex-col items-center py-10 gap-6 bg-gray-50 z-50">
      <div className="flex items-center justify-between w-full px-8">
        <img src={logo} alt="" className="h-12" />

        <button onClick={onClose}>
          <RiCloseLine size={24} />
        </button>
      </div>

      <nav className="flex flex-col w-full px-8 mx-auto gap-1">
        <ItemNavbar
          name="Dashboard"
          onNavigate={() => onNavigate("/admin/dashboard")}
          isActive={isActive("/admin/dashboard")}
        >
          <RiDashboardLine />
        </ItemNavbar>

        <ItemNavbar
          name="Clientes"
          onNavigate={() => onNavigate("/admin/customers")}
          isActive={isActive("/admin/customers")}
        >
          <RiGroup2Line />
        </ItemNavbar>

        <ItemNavbar
          name="Contratos"
          onNavigate={() => onNavigate("/admin/contracts")}
          isActive={isActive("/admin/contracts")}
        >
          <RiContractLine />
        </ItemNavbar>

        <ItemNavbar
          name="Rendimentos"
          onNavigate={() => onNavigate("/admin/income")}
          isActive={isActive("/admin/income")}
        >
          <RiBarChartBoxLine />
        </ItemNavbar>

        <ItemNavbar
          name="Financeiro"
          onNavigate={() => onNavigate("/admin/financial")}
          isActive={isActive("/admin/financial")}
        >
          <RiBarChart2Line />
        </ItemNavbar>

        <ItemNavbar
          name="Chamados"
          onNavigate={() => onNavigate("/admin/calls")}
          isActive={isActive("/admin/calls")}
        >
          <RiMessage3Line />
        </ItemNavbar>

        <ItemNavbar
          name="Configuração"
          onNavigate={() => onNavigate("/admin/settings/users")}
          isActive={isActive("/admin/settings")}
        >
          <RiSettings3Line />
        </ItemNavbar>

        <button
          className="flex items-center justify-center gap-2 w-full h-10 rounded px-2 py-3 text-sm font-normal leading-4 tracking-[-0.24px] text-gray-700 bg-white"
          // onClick={logout}
        >
          <RiLogoutBoxRLine />
          Sair
        </button>
      </nav>
    </div>
  );
}
