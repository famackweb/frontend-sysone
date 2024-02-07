import { RiEyeLine } from "@remixicon/react";
import { ContainerPage } from "../components/ContainerPage";
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
import { CalledModal } from "./components/CalledModal";
import { useSupportCallsController } from "./useSupportCallsController";

export function SupportCalls() {
  const { isOpenCalledModal, toggleOpenCalledModal, currentStep, nextStep } =
    useSupportCallsController();

  return (
    <>
      <ContainerPage title="Chamados">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full md:max-w-60">
            <Input placeholder="Faça uma busca" search />
          </div>

          <div className="w-full md:max-w-60">
            <Select title="Filtrar status" options={[]} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table className="table-fixed lg:table-auto">
            <TableHeader>
              <TableTh title="Nome" width="w-[260px] lg:w-[25%]" />
              <TableTh title="E-mail" width="w-[260px] lg:w-[25%]" />
              <TableTh title="Data" width="w-[140px] lg:w-[10%]" />
              <TableTh title="Status do chamado" width="w-[200px] lg:w-[15%]" />
              <TableTh title="Editar" width="w-[120px] lg:w-[5%]" />
            </TableHeader>

            <TableBody>
              <TableLine>
                <TableTd value="Fulano da silva" />
                <TableTd value="falanodasilva@gmail.com" />
                <TableTd value="05/12/2022" />
                <StatusTable title="Resolvido" />

                <TableTd>
                  <div className="flex items-center justify-center gap-0.5">
                    <button onClick={toggleOpenCalledModal}>
                      <RiEyeLine size={16} />
                    </button>
                  </div>
                </TableTd>
              </TableLine>
            </TableBody>
          </Table>
        </div>
      </ContainerPage>

      <CalledModal
        open={isOpenCalledModal}
        onClose={toggleOpenCalledModal}
        currentStep={currentStep}
        onSave={nextStep}
      />
    </>
  );
}
