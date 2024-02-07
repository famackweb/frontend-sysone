import { Link } from "react-router-dom";
import {
  StatusTable,
  Table,
  TableBody,
  TableHeader,
  TableLine,
  TableTd,
  TableTh,
} from "../../../../components/Table";
// import { Pagination } from "../../../components/Pagination";

interface TableCardProps {
  title: string;
  value: number;
}

export function TableCard({ title, value }: TableCardProps) {
  return (
    <div className="flex flex-col items-start p-6 gap-3 rounded bg-white h-full">
      <header className="w-full pb-4 border-b-[0.5px] border-gray-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2  mb-3">
          <h2 className="text-sm md:text-base font-medium leading-5 text-gray-800">
            {title}
          </h2>

          <Link
            to="/"
            className="text-base min-w-[72px] font-medium leading-3 text-[#5299F2]"
          >
            Ver mais
          </Link>
        </div>

        <span className="text-base md:text-lg font-bold text-gray-800 leading-7">
          {value}
        </span>
      </header>

      <div className="w-full max-h-[265px] overflow-y-auto">
        <div className="overflow-x-auto">
          <Table className="max-md:table-fixed">
            <TableHeader>
              <TableTh
                title="Nome do beneficiario"
                width="w-[240px] md:w-[35%]"
              />
              <TableTh title="Valor" width="w-[200px] md:w-[30%]" />
              <TableTh title="Status" width="w-[200px] md:w-[30%]" />
            </TableHeader>

            <TableBody>
              <TableLine>
                <TableTd value="Fulana da Silva" />
                <TableTd value="R$ 50,00" />
                <StatusTable title="Aprovado" />
              </TableLine>
            </TableBody>
          </Table>
        </div>

        {/* <Pagination /> */}
      </div>
    </div>
  );
}
