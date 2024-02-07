import { useLocation } from "react-router-dom";
import { ItemSidebar } from "./ItemSidebar";
import {
  RiBarChart2Fill,
  RiBarChart2Line,
  RiBarChartBoxFill,
  RiBarChartBoxLine,
  RiContractFill,
  RiContractLine,
  RiDashboardFill,
  RiDashboardLine,
  RiGroupFill,
  RiGroupLine,
  RiMessage3Fill,
  RiMessage3Line,
} from "@remixicon/react";

export function SidebarAdm() {
  const location = useLocation();

  const isActive = (link: string) => {
    return location.pathname.includes(link);
  };

  return (
    <div className="hidden md:block fixed w-[74px] h-screen shadow-[0px_2px_6px_0px_rgba(41,_70,_97,_0.20)]">
      <div className="h-[70px] flex justify-center items-center border-b-[0.5px] border-gray-50">
        {/* <img src={logo} alt="" /> */}
        Logo
      </div>

      <nav className="flex flex-col py-1 min-h-full">
        <ItemSidebar
          name="Dashboard"
          link="/admin/dashboard"
          isActive={location.pathname === "/admin/dashboard"}
        >
          {isActive("/admin/dashboard") ? (
            <RiDashboardFill />
          ) : (
            <RiDashboardLine />
          )}
        </ItemSidebar>

        <ItemSidebar
          name="Clientes"
          link="/admin/customers"
          isActive={isActive("/admin/customers")}
        >
          {isActive("/admin/customers") ? <RiGroupFill /> : <RiGroupLine />}
        </ItemSidebar>

        <ItemSidebar
          name="Contratos"
          link="/admin/contracts"
          isActive={isActive("/admin/contracts")}
        >
          {isActive("/admin/contracts") ? (
            <RiContractFill />
          ) : (
            <RiContractLine />
          )}
        </ItemSidebar>

        <ItemSidebar
          name="Rendimentos"
          link="/admin/income"
          isActive={isActive("/admin/income")}
        >
          {isActive("/admin/income") ? (
            <RiBarChartBoxFill />
          ) : (
            <RiBarChartBoxLine />
          )}
        </ItemSidebar>

        <ItemSidebar
          name="Financeiro"
          link="/admin/financial"
          isActive={isActive("/admin/financial")}
        >
          {isActive("/admin/financial") ? (
            <RiBarChart2Fill />
          ) : (
            <RiBarChart2Line />
          )}
        </ItemSidebar>

        <ItemSidebar
          name="Chamados"
          link="/admin/calls"
          isActive={isActive("/calls")}
        >
          {isActive("/admin/calls") ? <RiMessage3Fill /> : <RiMessage3Line />}
        </ItemSidebar>
      </nav>
    </div>
  );
}
