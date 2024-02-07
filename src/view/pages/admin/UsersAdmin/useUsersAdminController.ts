import { useState } from "react";

export function useUsersAdminController() {
  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState(false);

  function toggleOpenAddUserModal() {
    setIsOpenAddUserModal((prevState) => !prevState);
  }

  return { isOpenAddUserModal, toggleOpenAddUserModal };
}
