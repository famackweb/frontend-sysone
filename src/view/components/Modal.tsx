import * as RdxDialog from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { RiCloseLine } from "@remixicon/react";

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose?(): void;
  onSave?(): void;
  cancelButton?: boolean;
  titleButtonSave?: string;
}

export function Modal({
  open,
  title,
  children,
  onClose,
  onSave,
  cancelButton = true,
  titleButtonSave = "Salvar",
}: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay className="bg-black/15 data-[state=open]:animate-overlayShow fixed inset-0" />

        <RdxDialog.Content className="data-[state=open]:animate-contentShow flex flex-col justify-between fixed max-md:inset-0 md:top-[50%] md:left-[50%] w-full md:max-w-[566px] md:translate-x-[-50%] md:translate-y-[-50%] bg-white shadow-[0px_2px_6px_0px_rgba(41,_70,_97,_0.20)]">
          <header className="h-[62px] w-full px-6 flex items-center justify-between border-b border-gray-50">
            {title}
            <button onClick={onClose}>
              <RiCloseLine />
            </button>
          </header>

          <div className="p-6 overflow-y-auto flex-1 max-h-[524px]">
            {children}
          </div>

          <footer className="h-[62px] px-6 flex items-center justify-end gap-5 border-t border-gray-50">
            {cancelButton && (
              <Button size="small" variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
            )}

            <Button size="small" onClick={onSave}>
              {titleButtonSave}
            </Button>
          </footer>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
