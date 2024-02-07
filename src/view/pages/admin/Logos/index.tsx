import { ContainerPageSettings } from "../components/ContainerPageSettings";
import { Uploader } from "../../../components/Uploader";

export function Logos() {
  return (
    <ContainerPageSettings
      title="Logotipos"
      description="Permitido usar uma imagem de até 3MB com pelo menos 130x44 pixels. Use um arquivo no formato *png, *jpeg *jpg."
    >
      <div className="space-y-5 w-full lg:max-w-[526px]">
        <Uploader
          title="Logo das telas de login e cadastro do cliente:"
          idUploader="input1"
          size="medium"
        />
        <Uploader
          title="Logo da área admin:"
          idUploader="input2"
          size="medium"
        />
        <Uploader
          title="Logo do menu principal:"
          idUploader="input3"
          size="medium"
        />
        <Uploader title="Logo do rodapé:" idUploader="input4" size="medium" />
      </div>
    </ContainerPageSettings>
  );
}
