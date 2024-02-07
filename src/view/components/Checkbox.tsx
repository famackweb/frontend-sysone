import { useState } from "react";
import { cn } from "../../app/utils/cn";
import { RiCheckFill } from "@remixicon/react";

interface CheckboxProps {
  label: string;
  onChange?: (isChecked: boolean) => void;
}

export function Checkbox({ label, onChange }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange?.(!checked);
  };

  return (
    <div className="flex items-center w-fit">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      <label
        htmlFor={label}
        className="cursor-pointer select-none flex items-center gap-3"
      >
        <div
          className={cn(
            "w-[18px] h-[18px] flex items-center justify-center border border-gray-50 bg-white",
            checked && "bg-green-600 border-green-600"
          )}
        >
          <RiCheckFill size={12} className="text-white" />
        </div>
        <span className="text-sm font-normal leading-4">{label}</span>
      </label>
    </div>
  );
}
