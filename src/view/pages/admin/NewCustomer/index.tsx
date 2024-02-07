import { BackButton } from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { InformationCard } from "../../../components/InformationCard";
import { DataLine } from "../../../components/InformationCard/DataLine";
import { Input } from "../../../components/Input";

export function NewCustomer() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-[22px] text-gray-800 font-bold leading-6">
          Adicionar cliente
        </h1>

        <BackButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <InformationCard title="Dados pessoais">
          <DataLine label="Nome completo:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="CPF:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Celular:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Email:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Senha:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
        </InformationCard>

        <InformationCard title="Endereço">
          <DataLine label="CEP:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Rua/Avenida:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Número:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Complemento:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Bairro:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Estado:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Cidade:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
        </InformationCard>

        <InformationCard title="Dados Bancários">
          <DataLine label="Banco:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Agência:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Conta:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
          <DataLine label="Chave pix:">
            <Input size="small" placeholder="Digite aqui" />
          </DataLine>
        </InformationCard>
      </div>

      <div className="flex items-center justify-center">
        <Button className="md:max-w-60">Adicionar Cliente</Button>
      </div>
    </div>
  );
}
