import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { useCustomersController } from "../useCustomersController";

export function HeaderTabCostomer() {
  const { navigate } = useCustomersController();

  return (
    <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
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

      <Button size="medium" onClick={() => navigate("/admin/customers/new")}>
        Adicionar
      </Button>
    </div>
  );
}
