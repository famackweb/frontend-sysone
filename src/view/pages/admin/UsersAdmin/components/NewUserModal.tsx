import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";

interface NewUserModalProps {
  open: boolean;
  onClose?(): void;
}

export function NewUserModal({ open, onClose }: NewUserModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Adicionar usuário"
      titleButtonSave="Adicionar usuário"
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <span className="text-sm font-bold leading-6">Nome:</span>
          <Input placeholder="Digite aqui" size="small" />
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">E-mail:</span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">Telefone:</span>
            <Input placeholder="Digite aqui" size="small" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">
              Senha do novo usuário:
            </span>
            <Input placeholder="Digite a senha" size="small" />
          </div>
          <div className="w-full space-y-2">
            <span className="text-sm font-bold leading-6">Repita a senha:</span>
            <Input placeholder="Repita a senha" size="small" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
