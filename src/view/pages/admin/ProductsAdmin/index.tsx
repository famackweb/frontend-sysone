import { RiPencilLine } from "@remixicon/react";
import { ContainerPageSettings } from "../components/ContainerPageSettings";
import { Input } from "../../../components/Input";
import {
  Table,
  TableBody,
  TableHeader,
  TableLine,
  TableTd,
  TableTh,
} from "../../../components/Table";
import { Button } from "../../../components/Button";
import { useProductsAdminController } from "./useProductsAdminController";
import { NewProductModal } from "./components/NewProductModal";

export function ProductsAdmin() {
  const { isOpenAddProductModal, toggleOpenAddProductModal } =
    useProductsAdminController();

  return (
    <ContainerPageSettings title="Produtos">
      <div className="flex items-center justify-between">
        <div className="w-full max-w-60 mt-5">
          <Input size="small" placeholder="Faça uma busca" search />
        </div>
        <Button size="medium" onClick={toggleOpenAddProductModal}>
          Adicionar
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table className="table-fixed lg:table-auto">
          <TableHeader>
            <TableTh title="Nome do produto" width="w-[260px] lg:w-[30%]" />
            <TableTh title="Data" width="w-[160px] lg:w-[20%]" />
            <TableTh title="Valor cota" width="w-[160px] lg:w-[20%]" />
            <TableTh title="Valor rendimento" width="w-[160px] lg:w-[20%]" />
            <TableTh title="Opções" width="w-[120px] lg:w-[10%]" />
          </TableHeader>

          <TableBody>
            <TableLine>
              <TableTd value="Nome do produto" />
              <TableTd value="08/01/2022" />
              <TableTd value="R$ 500,00" />
              <TableTd value="R$ 50,00" />
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

      <NewProductModal
        open={isOpenAddProductModal}
        onClose={toggleOpenAddProductModal}
      />
    </ContainerPageSettings>
  );
}
