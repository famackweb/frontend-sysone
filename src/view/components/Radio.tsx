import * as RdxRadioGroup from "@radix-ui/react-radio-group";
import { RiCheckFill } from "@remixicon/react";

interface RadioGroupProps {
  children: React.ReactNode;
  defaultValue?: string;
}

export function RadioGroup({ children, defaultValue }: RadioGroupProps) {
  return (
    <RdxRadioGroup.Root
      className="flex items-center gap-5"
      defaultValue={defaultValue}
      aria-label="View density"
    >
      {children}
    </RdxRadioGroup.Root>
  );
}

interface RadioButtonItemProps {
  title: string;
  value: string;
}

export function RadioButtonItem({ title, value }: RadioButtonItemProps) {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <RdxRadioGroup.Item
        className="w-[18px] h-[18px] bg-white border border-gray-50 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 rounded-full outline-none"
        value={value}
        id={value}
      >
        <RdxRadioGroup.Indicator className="flex items-center justify-center">
          <RiCheckFill size={12} className="text-white" />
        </RdxRadioGroup.Indicator>
      </RdxRadioGroup.Item>
      <label
        className="text-sm leading-4 font-normal text-gray-800"
        htmlFor={value}
      >
        {title}
      </label>
    </div>
  );
}
