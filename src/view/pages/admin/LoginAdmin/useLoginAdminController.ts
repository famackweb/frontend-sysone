import { useNavigate } from "react-router-dom";

export function useLoginAdminController() {
  const navigate = useNavigate();

  return { navigate };
}
