import { useNavigate } from "react-router-dom";

export function useCustomersController() {
  const navigate = useNavigate();
  return { navigate };
}
