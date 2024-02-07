import * as RdxSwitch from "@radix-ui/react-switch";
import { useState } from "react";

interface SwitchProps {
  title: string;
  idSwitch: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Switch({ title, idSwitch, checked, onChange }: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(checked);

  const handleSwitchChange = () => {
    const newChecked = !internalChecked;
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div className="flex items-center gap-1.5">
      <label
        className="min-w-28 text-base font-normal leading-6 tracking-[0.38px] text-gray-800"
        htmlFor={idSwitch}
      >
        {title}
      </label>
      <RdxSwitch.Root
        checked={checked}
        onCheckedChange={handleSwitchChange}
        className="w-[38px] h-[18px] border border-gray-50 bg-white rounded-full relative data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 outline-none cursor-pointer"
        id={idSwitch}
      >
        <RdxSwitch.Thumb className="block w-3 h-3 bg-gray-100 data-[state=checked]:bg-white rounded-full transition-transform duration-300 translate-x-0.5 data-[state=checked]:translate-x-[22px]" />
      </RdxSwitch.Root>
    </div>
  );
}
