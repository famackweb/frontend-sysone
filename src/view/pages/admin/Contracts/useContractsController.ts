import { useState } from "react";

export function useContractsController() {
  const [isOpenContractModal, setIsOpenContractModal] = useState(false);

  function toggleOpenContractModal() {
    setIsOpenContractModal((prevState) => !prevState);
  }

  return { isOpenContractModal, toggleOpenContractModal };
}
