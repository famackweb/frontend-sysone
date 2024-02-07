import { Outlet } from "react-router-dom";
import { NavbarMobileAdm } from "../pages/admin/components/NavbarMobileAdm";
import { useNavbarMobileAdmController } from "../pages/admin/components/NavbarMobileAdm/useNavbarMobileAdmController";
import { SidebarAdm } from "../pages/admin/components/SidebarAdm";
import { HeaderAdm } from "../pages/admin/components/HeaderAdm";

export function LayoutAdm() {
  const { navbarOpen, handleOpenNavbar, handleCloseNavbar, handleNavigate } =
    useNavbarMobileAdmController();

  return (
    <div className="relative flex w-full h-full">
      {navbarOpen && (
        <NavbarMobileAdm
          onClose={handleCloseNavbar}
          onNavigate={handleNavigate}
        />
      )}

      <SidebarAdm />

      <div className="md:pl-[74px] w-full h-full flex flex-col">
        <HeaderAdm openNavbar={handleOpenNavbar} />

        <main className="flex-1 p-6 bg-[#F0F0F0]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
