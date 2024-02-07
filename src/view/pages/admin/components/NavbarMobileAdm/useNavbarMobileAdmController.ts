import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../../app/hooks/useAuth";

export function useNavbarMobileAdmController() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  // const { logout } = useAuth();

  const location = useLocation();

  function isActive(link: string) {
    return location.pathname.includes(link);
  }

  function handleOpenNavbar() {
    setNavbarOpen(true);
  }

  function handleCloseNavbar() {
    setNavbarOpen(false);
  }

  function handleNavigate(link: string) {
    handleCloseNavbar();
    navigate(link);
  }

  return {
    navbarOpen,
    isActive,
    handleOpenNavbar,
    handleCloseNavbar,
    handleNavigate,
    // logout,
  };
}
