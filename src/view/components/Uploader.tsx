import { ChangeEvent, useRef, useState } from "react";
import { Button } from "./Button";
import { cn } from "../../app/utils/cn";
import { RiDeleteBin6Line, RiEyeLine, RiUpload2Line } from "@remixicon/react";

interface UploaderProps {
  title: string;
  size?: "larger" | "medium";
  idUploader: string;
  defaultImage?: string | null;
  onChange?: ((image: string | null, name: string | null) => void) | undefined;
}

export function Uploader({
  title,
  size = "larger",
  idUploader,
  defaultImage,
  onChange,
}: UploaderProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    defaultImage || null
  );
  const [imageName, setImageName] = useState<string | null>(
    defaultImage ? "Imagem Padrão" : "Selecionar imagem"
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 3000000) {
        alert("A imagem deve ter no máximo 3MB.");
        return;
      }

      if (
        !file.type.includes("image/png") &&
        !file.type.includes("image/jpeg")
      ) {
        alert("A imagem deve ser do tipo PNG ou JPEG.");
        return;
      }

      setImageName(file.name);
      setSelectedImage(URL.createObjectURL(file));

      onChange && onChange(URL.createObjectURL(file), file.name);
    }
  };

  const handleCancelFile = () => {
    setSelectedImage(null);
    setImageName(defaultImage ? "Imagem Padrão" : "Nenhuma imagem selecionada");

    onChange &&
      onChange(
        null,
        defaultImage ? "Imagem Padrão" : "Nenhuma imagem selecionada"
      );
  };

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-base font-normal leading-6 text-gray-800 mb-3">
        {title}
      </h3>
      <input
        type="file"
        id={idUploader}
        ref={fileInputRef}
        className="hidden"
        accept=".png, .jpeg, .jpg"
        onChange={handleFileChange}
      />
      <Button
        size="medium"
        variant="secondary"
        className="flex items-center gap-2"
        onClick={() => fileInputRef.current?.click()}
      >
        <RiUpload2Line />
        Enviar Imagem
      </Button>
      <div
        className={cn(
          "w-full px-2 py-2.5 flex items-center justify-between border border-gray-50 rounded mt-2",
          size === "medium" && "h-[66px]"
        )}
      >
        <div className="flex items-center gap-3">
          <label
            htmlFor={idUploader}
            className={cn(
              "p-2.5 cursor-pointer flex items-center justify-center border border-dashed border-gray-50 w-[92px] h-[92px] rounded",
              size === "medium" && "max-h-10"
            )}
          >
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Preview"
                className={cn(
                  "w-full h-full object-contain rounded",
                  size === "medium" && "max-h-6 object-contain"
                )}
              />
            )}
          </label>

          <span className="text-sm font-normal leading-[22px] text-[#1890FF]">
            {imageName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {size === "larger" && (
            <button>
              <RiEyeLine size={16} className="text-black/45" />
            </button>
          )}

          <button onClick={handleCancelFile}>
            <RiDeleteBin6Line size={16} className="text-black/45" />
          </button>
        </div>
      </div>
    </div>
  );
}
