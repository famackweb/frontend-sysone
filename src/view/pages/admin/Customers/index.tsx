import { RiPencilLine } from "@remixicon/react";
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
import { HeaderTabCostomer } from "./components/HeaderTabCostomer";
import { Link } from "react-router-dom";
import { ContainerPage } from "../components/ContainerPage";

export function Customers() {
  return (
    <ContainerPage title="Clientes">
      <TabRoot defaultValue="approved">
        <TabHeader>
          <TabHeaderOption value="approved" title="Aprovados" />
          <TabHeaderOption value="pending" title="Pendentes" />
        </TabHeader>

        <TabContent value="approved">
          <HeaderTabCostomer />

          <div className="overflow-x-auto">
            <Table className="max-md:table-fixed">
              <TableHeader>
                <TableTh title="Nome completo" width="md:w-[35%]" />
                <TableTh title="CPF" width="md:w-[20%]" />
                <TableTh title="Data" width="md:w-[20%]" />
                <TableTh title="Status" width="md:w-[20%]" />
                <TableTh title="Opções" width="md:w-[5%]" />
              </TableHeader>

              <TableBody>
                <TableLine>
                  <TableTd value="Fulana da Silva" />
                  <TableTd value="999.999.999-99" />
                  <TableTd value="30/01/2024" />
                  <StatusTable title="Ativo" />
                  <TableTd>
                    <div className="flex items-center justify-center gap-0.5">
                      <Link to="/admin/customers/customerId">
                        <RiPencilLine />
                      </Link>
                    </div>
                  </TableTd>
                </TableLine>

                <TableLine>
                  <TableTd value="Fulana da Silva" />
                  <TableTd value="999.999.999-99" />
                  <TableTd value="30/01/2024" />
                  <StatusTable title="Desativado" status="DISABLED" />
                  <TableTd>
                    <div className="flex items-center justify-center gap-0.5">
                      <Link to="/admin/customers/customerId">
                        <RiPencilLine />
                      </Link>
                    </div>
                  </TableTd>
                </TableLine>
              </TableBody>
            </Table>
          </div>
        </TabContent>

        <TabContent value="pending">
          <HeaderTabCostomer />

          <div className="overflow-x-auto">
            <Table className="max-md:table-fixed">
              <TableHeader>
                <TableTh title="Nome completo" width="md:w-[35%]" />
                <TableTh title="CPF" width="md:w-[20%]" />
                <TableTh title="Data" width="md:w-[20%]" />
                <TableTh title="Status" width="md:w-[20%]" />
                <TableTh title="Opções" width="md:w-[5%]" />
              </TableHeader>

              <TableBody>
                <TableLine>
                  <TableTd value="Fulana da Silva" />
                  <TableTd value="999.999.999-99" />
                  <TableTd value="30/01/2024" />
                  <StatusTable title="Pendente" status="PENDING" />
                  <TableTd>
                    <div className="flex items-center justify-center gap-0.5">
                      <Link to="/admin/customers/customerId">
                        <RiPencilLine />
                      </Link>
                    </div>
                  </TableTd>
                </TableLine>
              </TableBody>
            </Table>
          </div>
        </TabContent>
      </TabRoot>
    </ContainerPage>
  );
}
