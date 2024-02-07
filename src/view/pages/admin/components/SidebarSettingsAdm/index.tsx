import { useLocation } from "react-router-dom";
import { ItemSidebarSetting } from "./ItemSidebarSetting";

export function SidebarSettingsAdm() {
  const location = useLocation();

  const isActive = (link: string) => {
    return location.pathname.includes(link);
  };

  return (
    <nav className="w-full md:max-w-52 px-5 md:px-0 md:border-r md:border-[#E8E8E8] md:h-full">
      <div className="w-full flex flex-col">
        <ItemSidebarSetting
          isActive={isActive("/admin/settings/users")}
          link="/admin/settings/users"
          name="Usuários"
        />

        <ItemSidebarSetting
          isActive={isActive("/admin/settings/products")}
          link="/admin/settings/products"
          name="Produtos"
        />

        <ItemSidebarSetting
          isActive={isActive("/admin/settings/logos")}
          link="/admin/settings/logos"
          name="Logotipos"
        />

        <ItemSidebarSetting
          isActive={isActive("/admin/settings/login-screenshots")}
          link="/admin/settings/login-screenshots"
          name="Imagens de Login"
        />

        <ItemSidebarSetting
          isActive={isActive("/admin/settings/baseboard")}
          link="/admin/settings/baseboard"
          name="Rodapé"
        />
      </div>
    </nav>
  );
}
