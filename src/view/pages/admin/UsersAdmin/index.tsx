import { RiPencilLine } from "@remixicon/react";
import { Input } from "../../../components/Input";
import {
  Table,
  TableBody,
  TableHeader,
  TableLine,
  TableTd,
  TableTh,
} from "../../../components/Table";
import { NewUserModal } from "./components/NewUserModal";
import { ContainerPageSettings } from "../components/ContainerPageSettings";
import { useUsersAdminController } from "./useUsersAdminController";
import { Button } from "../../../components/Button";

export function UsersAdmin() {
  const { isOpenAddUserModal, toggleOpenAddUserModal } =
    useUsersAdminController();

  return (
    <ContainerPageSettings title="Usuários">
      <div className="flex items-center justify-between">
        <div className="w-full max-w-60 mt-5">
          <Input size="small" placeholder="Faça uma busca" search />
        </div>

        <Button size="medium" onClick={toggleOpenAddUserModal}>
          Adicionar
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table className="table-fixed lg:table-auto">
          <TableHeader>
            <TableTh title="Usuário" width="w-[260px] lg:w-[40%]" />
            <TableTh title="Cargo" width="w-[160px] lg:w-[25%]" />
            <TableTh title="Último acesso" width="w-[160px] lg:w-[25%]" />
            <TableTh title="Opções" width="w-[120px] lg:w-[10%]" />
          </TableHeader>

          <TableBody>
            <TableLine>
              <TableTd value="Fulano da Silva" />
              <TableTd value="Nome do cargo" />
              <TableTd value="08/01/2022" />

              <TableTd>
                <div className="flex items-center justify-center gap-0.5">
                  <button>
                    <RiPencilLine />
                  </button>
                </div>
              </TableTd>
            </TableLine>
          </TableBody>
        </Table>
      </div>

      <NewUserModal
        open={isOpenAddUserModal}
        onClose={toggleOpenAddUserModal}
      />
    </ContainerPageSettings>
  );
}
