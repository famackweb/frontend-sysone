import { RiFilePdf2Line } from "@remixicon/react";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { Button } from "../../../../components/Button";

interface ContractModalModalProps {
  open: boolean;
  onClose?(): void;
}

export function ContractModal({ open, onClose }: ContractModalModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Detalhes do contrato">
      <div className="space-y-5">
        <div className="space-y-2">
          <span className="text-sm font-bold leading-6">Nome:</span>
          <Input placeholder="Digite aqui" size="small" />
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">CPF:</span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">Data:</span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              Tempo de contrato:
            </span>
            <Input placeholder="Digite a senha" size="small" />
          </div>
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              Quantidade de cotas:
            </span>
            <Input placeholder="Repita a senha" size="small" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">Valor da cota:</span>
            <Input placeholder="Repita a senha" size="small" />
          </div>
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">Rendimento (%):</span>
            <Input placeholder="Digite a senha" size="small" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">Status:</span>

            <div className="flex items-center gap-2">
              <Select title="Status" options={["Assinado", "Aguardando"]} />
              <Button variant="secondary" size="medium">
                Baixar contrato <RiFilePdf2Line />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
