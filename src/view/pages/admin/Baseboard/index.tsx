import { Input } from "../../../components/Input";
import { Switch } from "../../../components/Switch";
import { ContainerPageSettings } from "../components/ContainerPageSettings";

export function Baseboard() {
  return (
    <ContainerPageSettings title="Rodapé">
      <div className="py-5 border-b border-gray-50 leading-6 text-gray-800">
        <h2 className="text-lg font-bold">Área 1 do rodapé</h2>
        <div className="mt-2">
          <Switch idSwitch="arearodape1" title="Habilitar área" />
        </div>

        <div className="mt-5 w-full md:w-1/2 space-y-3">
          <span className="text-base font-medium tracking-[0.38px]">
            Rótulo principal
          </span>
          <Input size="small" placeholder="Digite aqui o rótulo principal" />
        </div>

        <div className="my-3 flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Rótulo do link 1
            </span>
            <Input size="small" placeholder="Digite aqui o rótulo do link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link 1
            </span>
            <Input size="small" placeholder="Cole aqui o link" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Rótulo do link 2
            </span>
            <Input size="small" placeholder="Digite aqui o rótulo do link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link 2
            </span>
            <Input size="small" placeholder="Cole aqui o link" />
          </div>
        </div>
      </div>

      <div className="pb-5 border-b border-gray-50 leading-6 text-gray-800">
        <h2 className="text-lg font-bold">Área 2 do rodapé</h2>
        <div className="mt-2">
          <Switch idSwitch="arearodape2" title="Habilitar área" />
        </div>

        <div className="mt-5 w-full md:w-1/2 space-y-3">
          <span className="text-base font-medium tracking-[0.38px]">
            Rótulo principal
          </span>
          <Input size="small" placeholder="Digite aqui o rótulo principal" />
        </div>

        <div className="my-3 flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Rótulo do link 1
            </span>
            <Input size="small" placeholder="Digite aqui o rótulo do link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link 1
            </span>
            <Input size="small" placeholder="Cole aqui o link" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Rótulo do link 2
            </span>
            <Input size="small" placeholder="Digite aqui o rótulo do link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link 2
            </span>
            <Input size="small" placeholder="Cole aqui o link" />
          </div>
        </div>
      </div>

      <div className="pb-5 border-b border-gray-50 leading-6 text-gray-800">
        <h2 className="text-lg font-bold">Área 3 do rodapé</h2>
        <div className="mt-2">
          <Switch idSwitch="arearodape3" title="Habilitar área" />
        </div>

        <div className="mt-5 w-full md:w-1/2 space-y-3">
          <span className="text-base font-medium tracking-[0.38px]">
            Rótulo principal
          </span>
          <Input size="small" placeholder="Digite aqui o rótulo principal" />
        </div>

        <div className="my-3 flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Rótulo do link 1
            </span>
            <Input size="small" placeholder="Digite aqui o rótulo do link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link 1
            </span>
            <Input size="small" placeholder="Cole aqui o link" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Rótulo do link 2
            </span>
            <Input size="small" placeholder="Digite aqui o rótulo do link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link 2
            </span>
            <Input size="small" placeholder="Cole aqui o link" />
          </div>
        </div>
      </div>

      <div className="pb-5 leading-6 text-gray-800">
        <h2 className="text-lg font-bold">Área 4 do rodapé</h2>

        <div className="mt-2">
          <Switch idSwitch="arearodape4" title="Habilitar área" />
        </div>

        <div className="mt-5 w-full md:w-1/2 space-y-3">
          <span className="text-base font-medium tracking-[0.38px]">
            Rótulo principal
          </span>
          <Input size="small" placeholder="Digite aqui o rótulo principal" />
        </div>

        <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link da rede social 1
            </span>

            <Switch idSwitch="redesocial1" title="Habilitar rede social" />

            <Input size="small" placeholder="Cole aqui o link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link da rede social 2
            </span>

            <Switch idSwitch="redesocial2" title="Habilitar rede social" />

            <Input size="small" placeholder="Cole aqui o link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link da rede social 3
            </span>

            <Switch idSwitch="redesocial3" title="Habilitar rede social" />

            <Input size="small" placeholder="Cole aqui o link" />
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-base font-medium tracking-[0.38px]">
              Link da rede social 4
            </span>

            <Switch idSwitch="redesocial4" title="Habilitar rede social" />

            <Input size="small" placeholder="Cole aqui o link" />
          </div>
        </div>
      </div>
    </ContainerPageSettings>
  );
}
