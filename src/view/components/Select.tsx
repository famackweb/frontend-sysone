import { useState, useEffect, useRef } from "react";
import { cn } from "../../app/utils/cn";
import { RiArrowDownSLine } from "@remixicon/react";

interface SelectProps {
  title: string;
  options: string[];
  onSelect?: (selectedOption: string) => void;
}

export function Select({ title, options, onSelect }: SelectProps) {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect?.(option);
    setIsOptionsVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOptionsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className="w-full relative">
      <button
        className={cn(
          "flex items-center justify-between w-full border border-gray-50 px-3 py-2 rounded cursor-pointer",
          isOptionsVisible && "border-green-500"
        )}
        onClick={toggleOptionsVisibility}
      >
        <span className="text-sm font-normal leading-6 text-gray-800">
          {selectedOption || title}
        </span>
        <RiArrowDownSLine
          className={cn(
            "w-5 text-[#B3B3B3]",
            isOptionsVisible && "text-green-500"
          )}
        />
      </button>

      {isOptionsVisible && (
        <ul className="absolute z-10 top-11 w-full rounded-sm bg-white py-1 shadow-[4px_4px_8px_0px_rgba(0,_0,_0,_0.15)]">
          {options.map((option, index) => (
            <li
              key={index}
              className="w-full h-[38px] px-3 flex items-center text-sm font-normal hover:font-medium leading-6 hover:bg-cyan-600/25 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
