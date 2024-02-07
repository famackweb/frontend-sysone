import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export function PasswordRecoveryClient() {
  return (
    <div className="w-full mt-14">
      <div className="mb-12 space-y-3">
        <label className="text-base font-normal leading-[22px] text-gray-800">
          Confirme seu CPF para continuar
        </label>
        <Input placeholder="000.000.000-00" />
      </div>

      <Button>Enviar</Button>
    </div>
  );
}
