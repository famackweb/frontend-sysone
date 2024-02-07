import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";

interface PaymentConfirmationModalProps {
  open: boolean;
  onClose?(): void;
  onSave?(): void;
}

export function PaymentConfirmationModal({
  open,
  onClose,
  onSave,
}: PaymentConfirmationModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      onSave={onSave}
      title="Confirmar pagamento"
      titleButtonSave="Confirma pagamento"
    >
      <p>
        Tem certeza que deseja confirmar o pagamento do rendimento? Essa
        operação é irreversível.
      </p>

      <div className="mt-5 space-y-2">
        <span className="text-sm font-bold leading-6">Data de pagamento:</span>
        <Input size="small" placeholder="Informe a data" />
      </div>
    </Modal>
  );
}
