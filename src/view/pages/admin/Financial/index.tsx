import { RiPencilLine } from "@remixicon/react";
import { ContainerPage } from "../components/ContainerPage";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import {
  Table,
  TableBody,
  TableHeader,
  TableLine,
  TableTd,
  TableTh,
} from "../../../components/Table";

export function Financial() {
  return (
    <ContainerPage title="Financeiro">
      <div className="w-full flex flex-col md:flex-row gap-5 md:items-center">
        <div className="md:max-w-60">
          <Input placeholder="Faça uma busca" search />
        </div>

        <div className="w-full md:max-w-60">
          <Select
            title="Filtrar por"
            options={[
              "Filtrar por nome",
              "Filtrar por cpf",
              "Filtrar por data",
            ]}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="table-fixed lg:table-auto">
          <TableHeader>
            <TableTh title="Nome" width="w-[260px] lg:w-[30%]" />
            <TableTh title="CPF" width="w-[160px] lg:w-[25%]" />
            <TableTh title="Data" width="w-[160px] lg:w-[25%]" />
            <TableTh title="Valor" width="w-[120px] lg:w-[10%]" />
            <TableTh title="Opções" width="w-[120px] lg:w-[10%]" />
          </TableHeader>

          <TableBody>
            <TableLine>
              <TableTd value="Fulana da Silva" />
              <TableTd value="999.999.999-99" />
              <TableTd value="30/01/2024" />
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
    </ContainerPage>
  );
}
