import { Outlet } from "react-router-dom";
import { SidebarSettingsAdm } from "../pages/admin/components/SidebarSettingsAdm";

export function LayoutSettingsAdmin() {
  return (
    <div className="space-y-5 h-full w-full flex flex-col">
      <h1 className="text-lg md:text-[22px] text-gray-800 font-bold leading-6">
        Configurações
      </h1>

      <div className="flex-1 w-full h-full flex flex-col md:flex-row items-start gap-6 bg-white py-6 md:pr-6 rounded">
        <SidebarSettingsAdm />

        <div className="w-full px-5 md:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
