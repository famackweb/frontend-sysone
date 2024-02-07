import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { InputPassword } from "../../../components/InputPassword";
import { Button } from "../../../components/Button";
import { Checkbox } from "../../../components/Checkbox";

export function LoginClient() {
  return (
    <>
      <div className="w-full mt-12 mb-5 border-b border-gray-200">
        <div className="mb-4 space-y-3">
          <label className="text-base font-normal leading-[22px] text-gray-800">
            <span className="text-red-700">*</span>E-mail
          </label>
          <Input type="email" placeholder="email@email.com" />
        </div>

        <div className="mb-6 space-y-3">
          <label className="text-base font-normal leading-[22px] text-gray-800">
            <span className="text-red-700">*</span>Senha
          </label>
          <InputPassword placeholder="Password" />
        </div>
        <Button>Entrar</Button>

        <div className="py-8">
          <Checkbox label="Lembrar Login" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Link
          to="/client/password-recovery"
          className="text-base font-medium text-[#3399F3D9] leading-[22px]"
        >
          Esqueceu a senha
        </Link>

        <Link
          to="/"
          className="text-base font-medium text-[#3399F3D9] leading-[22px]"
        >
          Ainda não sou cliente
        </Link>
      </div>
    </>
  );
}
