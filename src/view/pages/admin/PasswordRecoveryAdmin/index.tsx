import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export function PasswordRecoveryAdmin() {
  return (
    <div className="w-full mt-14">
      <div className="mb-12 space-y-3">
        <label className="text-base font-normal leading-[22px] text-gray-800">
          Confirme seu e-mail para continuar
        </label>
        <Input type="email" placeholder="email@email.com" />
      </div>

      <Button>Enviar</Button>
    </div>
  );
}
