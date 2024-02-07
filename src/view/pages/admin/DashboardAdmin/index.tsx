import { CountCard } from "./components/CountCard";
import { TableCard } from "./components/TableCard";

export function DashboardAdmin() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <CountCard
          title="Total de cadastros aprovados"
          value={595}
          colorIcon="succes"
        />
        <CountCard
          title="Total de cadastros reprovados"
          value={595}
          colorIcon="danger"
        />
        <CountCard title="Total de transações" value={595} />
        <CountCard title="Total de pix com sucesso" value={595} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TableCard
          title="Total de pagamento de boleto com sucesso"
          value={150}
        />
        <TableCard title="Total de boletos gerados com sucesso" value={150} />
        <TableCard title="Total de ted/doc com sucesso" value={150} />
        <TableCard
          title="Total de Total P2P com sucesso gerados com sucesso"
          value={150}
        />
      </div>
    </div>
  );
}
