import { Uploader } from "../../../components/Uploader";
import { ContainerPageSettings } from "../components/ContainerPageSettings";

export function LoginScreenshots() {
  return (
    <ContainerPageSettings
      title="Imagens de login"
      description="Permitido usar uma imagem de até 3MB com pelo menos 130x44 pixels. Use um arquivo no formato *png, *jpeg *jpg."
    >
      <div className="space-y-5 w-full lg:max-w-[526px]">
        <Uploader
          title="Imagem da tela de login - cliente:"
          idUploader="input1"
        />
        <Uploader
          title="Imagem da tela de login - admin:"
          idUploader="input3"
        />
      </div>
    </ContainerPageSettings>
  );
}
