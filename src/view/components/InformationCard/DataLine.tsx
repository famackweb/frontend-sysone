interface DataLineProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
}

export function DataLine({ label, value, children }: DataLineProps) {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      <span className="text-sm font-normal text-gray-400 leading-6">
        {label}
      </span>

      {value ? (
        <span className="text-sm font-semibold md:font-normal text-gray-400 leading-6">
          {value}
        </span>
      ) : (
        children
      )}
    </div>
  );
}
