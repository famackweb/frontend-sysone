import { useState } from "react";

export function useProductsAdminController() {
  const [isOpenAddProductModal, setIsOpenAddProductModal] = useState(false);

  function toggleOpenAddProductModal() {
    setIsOpenAddProductModal((prevState) => !prevState);
  }

  return { isOpenAddProductModal, toggleOpenAddProductModal };
}
