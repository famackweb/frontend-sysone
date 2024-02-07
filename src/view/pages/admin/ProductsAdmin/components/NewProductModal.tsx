import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";

interface NewProductModalProps {
  open: boolean;
  onClose?(): void;
}

export function NewProductModal({ open, onClose }: NewProductModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Adicionar produto"
      titleButtonSave="Adicionar produto"
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <span className="text-sm font-bold leading-6">Nome do produto:</span>
          <Input placeholder="Digite aqui" size="small" />
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              Qtd. de meses do contrato:
            </span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              Qtd. cotas a vender:
            </span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">Valor cota:</span>
            <Input placeholder="Digite aqui" size="small" />
          </div>

          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              Data do rendimento:
            </span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              Parcela do rendimento:
            </span>
            <Input placeholder="Digite aqui" size="small" />
          </div>

          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              valor rendimento em %:
            </span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

//
// Rendimentos
