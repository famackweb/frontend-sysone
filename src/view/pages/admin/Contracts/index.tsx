import { RiPencilLine } from "@remixicon/react";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import {
  StatusTable,
  Table,
  TableBody,
  TableHeader,
  TableLine,
  TableTd,
  TableTh,
} from "../../../components/Table";
import { useContractsController } from "./useContractsController";
import { ContractModal } from "./components/ContractModal";
import { ContainerPage } from "../components/ContainerPage";

export function Contracts() {
  const { isOpenContractModal, toggleOpenContractModal } =
    useContractsController();

  return (
    <ContainerPage title="Contratos">
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

        <div className="w-full md:max-w-60">
          <Select title="Status" options={["Assinado", "Aguardando"]} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="max-md:table-fixed">
          <TableHeader>
            <TableTh title="Nome completo" width="md:w-[30%]" />
            <TableTh title="CPF" width="md:w-[20%]" />
            <TableTh title="Data" width="md:w-[20%]" />
            <TableTh title="Status" width="md:w-[20%]" />
            <TableTh title="Opções" width="md:w-[10%]" />
          </TableHeader>

          <TableBody>
            <TableLine>
              <TableTd value="Fulana da Silva" />
              <TableTd value="999.999.999-99" />
              <TableTd value="30/01/2024" />
              <StatusTable title="Assinado" />
              <TableTd>
                <button onClick={() => toggleOpenContractModal()}>
                  <RiPencilLine />
                </button>
              </TableTd>
            </TableLine>

            <TableLine>
              <TableTd value="Fulana da Silva" />
              <TableTd value="999.999.999-99" />
              <TableTd value="30/01/2024" />
              <StatusTable title="Aguardando" status="PENDING" />
              <TableTd>
                <button onClick={() => toggleOpenContractModal()}>
                  <RiPencilLine />
                </button>
              </TableTd>
            </TableLine>
          </TableBody>
        </Table>
      </div>

      <ContractModal
        open={isOpenContractModal}
        onClose={toggleOpenContractModal}
      />
    </ContainerPage>
  );
}
