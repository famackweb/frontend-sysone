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
import {
  TabContent,
  TabHeader,
  TabHeaderOption,
  TabRoot,
} from "../../../components/Tabs";
import { PaymentConfirmationModal } from "./components/PaymentConfirmationModal";
import { useIncomeController } from "./useIncomeController";

export function Income() {
  const { isOpenPaymentConfirmationModal, toggleOpenPaymentConfirmationModal } =
    useIncomeController();

  return (
    <ContainerPage title="Rendimentos">
      <TabRoot defaultValue="toreceive">
        <TabHeader>
          <TabHeaderOption value="toreceive" title="Rendimentos a Receber" />
          <TabHeaderOption value="payable" title="Rendimentos a Pagar" />
        </TabHeader>

        <TabContent value="toreceive">
          <div className="w-full flex flex-col md:flex-row gap-5 md:items-center">
            <div className="md:max-w-60">
              <Input placeholder="Faça uma busca" search />
            </div>

            <div className="w-full md:max-w-60">
              <Select
                title="Filtrar por"
                options={["Filtrar por cpf", "Filtrar por data"]}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table className="max-md:table-fixed">
              <TableHeader>
                <TableTh title="Nome completo" width="md:w-[30%]" />
                <TableTh title="CPF" width="md:w-[20%]" />
                <TableTh title="Data" width="md:w-[20%]" />
                <TableTh title="Valor" width="md:w-[15%]" />
                <TableTh title="Status" width="md:w-[15%]" />
              </TableHeader>

              <TableBody>
                <TableLine>
                  <TableTd value="Fulana da Silva" />
                  <TableTd value="999.999.999-99" />
                  <TableTd value="30/01/2024" />
                  <TableTd value="R$ 50,00" />
                  <StatusTable title="Ativo" />
                </TableLine>
              </TableBody>
            </Table>
          </div>
        </TabContent>

        <TabContent value="payable">
          <div className="md:max-w-60">
            <Input placeholder="Faça uma busca" search />
          </div>

          <div className="overflow-x-auto">
            <Table className="max-md:table-fixed">
              <TableHeader>
                <TableTh title="Nome completo" width="md:w-[50%]" />
                <TableTh title="Mês" width="md:w-[20%]" />
                <TableTh title="Valor" width="md:w-[15%]" />
                <TableTh title="Status" width="md:w-[15%]" />
              </TableHeader>

              <TableBody>
                <TableLine>
                  <TableTd value="Fulana da Silva" />
                  <TableTd value="Jaineiro" />
                  <TableTd value="R$ 50,00" />
                  <StatusTable title="Pago" />
                </TableLine>

                <TableLine>
                  <TableTd value="Fulana da Silva" />
                  <TableTd value="Jaineiro" />
                  <TableTd value="R$ 50,00" />
                  <td>
                    <button
                      className="bg-[#FCBE30] px-3 py-0.5 rounded text-xs font-bold leading-6 text-white uppercase"
                      onClick={toggleOpenPaymentConfirmationModal}
                    >
                      Confirmar pagamento
                    </button>
                  </td>
                </TableLine>
              </TableBody>
            </Table>
          </div>
        </TabContent>
      </TabRoot>

      <PaymentConfirmationModal
        open={isOpenPaymentConfirmationModal}
        onClose={toggleOpenPaymentConfirmationModal}
      />
    </ContainerPage>
  );
}
