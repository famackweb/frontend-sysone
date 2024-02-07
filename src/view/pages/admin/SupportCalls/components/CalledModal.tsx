import { Modal } from "../../../../components/Modal";
import { RadioButtonItem, RadioGroup } from "../../../../components/Radio";
import { Select } from "../../../../components/Select";
import { Stepper } from "../../../../components/Stepper";
import { Textarea } from "../../../../components/Textarea";
import { DataLine } from "../../../../components/InformationCard/DataLine";

interface CalledModalProps {
  open: boolean;
  onClose?(): void;
  onSave?(): void;
  currentStep: number;
}

export function CalledModal({
  open,
  onClose,
  onSave,
  currentStep,
}: CalledModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      onSave={onSave}
      title="Dados do chamado"
      titleButtonSave="Avançar"
    >
      <Stepper
        steps={["Dados do chamado", "Responder"]}
        currentStep={currentStep}
      />

      {currentStep === 1 && (
        <div className="mt-5 pb-6 border-b-[0.5px] border-gray-50">
          <h2 className="text-lg font-bold leading-6 tracking-[0.38px] text-gray-800">
            Dados do usuario
          </h2>

          <div className="mt-3 space-y-1.5 mb-1.5">
            <DataLine label="Nome:" value="Fulano da Silva" />
            <DataLine label="E-mail:" value="fulanodasilva@upcash.com.br" />
            <DataLine label="Assunto:" value="Erro no pgto do boleto" />
            <DataLine label="Status:">
              <span className="text-sm font-semibold leading-[22px] text-[#FCBE30]">
                Pendente
              </span>
            </DataLine>
            <DataLine label="Tipo de dúvida:" value="Pagamento de Boleto" />
          </div>

          <div>
            <span className="text-sm font-normal leading-[22px] text-gray-800 text-center block mb-2.5">
              Mensagem
            </span>
            <Textarea
              disabled
              className="min-h-36 md:min-h-20"
              defaultValue="Olá, tive problemas ao pagar meu boleto, digitei o código certo mas na hora de pagar está aparecendo uma mensagem de erro, gostaria de solucionar isso rápido pois esse boleto vence amanhã."
            />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="mt-5 pb-6">
          <h2 className="text-lg font-bold leading-6 tracking-[0.38px] text-gray-800">
            Responder chamado
          </h2>

          <div className="mt-3 pb-6 border-b-[0.5px] border-gray-50">
            <span className="text-sm font-normal leading-[22px] text-gray-800 block mb-2.5">
              Mensagem:
            </span>
            <Textarea defaultValue="Olá, o seu problema já foi resolvido." />
          </div>

          <div className="my-5 space-y-3">
            <h2 className="text-lg font-bold leading-6 tracking-[0.38px] text-gray-800">
              Alterar Status
            </h2>

            <Select title="Escolher status" options={[]} />
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold leading-6 tracking-[0.38px] text-gray-800">
              Confirmar alteração de status?
            </h2>

            <RadioGroup>
              <RadioButtonItem title="Sim" value="yes" />
              <RadioButtonItem title="Não" value="no" />
            </RadioGroup>
          </div>
        </div>
      )}
    </Modal>
  );
}
