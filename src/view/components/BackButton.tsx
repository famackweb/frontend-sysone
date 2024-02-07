import { RiArrowLeftSLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-base font-normal text-gray-700 leading-6"
    >
      <RiArrowLeftSLine size={20} />
      Voltar
    </button>
  );
}
