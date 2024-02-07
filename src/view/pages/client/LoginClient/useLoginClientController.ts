import { useNavigate } from "react-router-dom";

export function useLoginClientController() {
  const navigate = useNavigate();

  return { navigate };
}
