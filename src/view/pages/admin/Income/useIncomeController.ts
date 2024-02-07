import { useState } from "react";

export function useIncomeController() {
  const [isOpenPaymentConfirmationModal, setIsOpenPaymentConfirmationModal] =
    useState(false);

  function toggleOpenPaymentConfirmationModal() {
    setIsOpenPaymentConfirmationModal((prevState) => !prevState);
  }

  return {
    isOpenPaymentConfirmationModal,
    toggleOpenPaymentConfirmationModal,
  };
}
