import { cn } from "../../app/utils/cn";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return <table className={cn("w-full", className)}>{children}</table>;
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-[#FAFAFA]">
      <tr className="text-sm text-gray-800 font-bold leading-6">{children}</tr>
    </thead>
  );
}

interface TableThProps {
  title: string;
  width: string;
}

export function TableTh({ title, width }: TableThProps) {
  return (
    <th className={cn("text-left px-3 py-3", width)}>
      <p className="border-r border-gray-50">{title}</p>
    </th>
  );
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TableLine({ children }: { children: React.ReactNode }) {
  return (
    <tr className="text-sm text-gray-400 font-medium leading-4 ">{children}</tr>
  );
}

interface TableTdProps {
  value?: string;
  children?: React.ReactNode;
}

export function TableTd({ value, children }: TableTdProps) {
  return <td className="text-left px-3 py-3">{value || children}</td>;
}

interface StatusTableProps {
  title: string;
  status?: "OK" | "PENDING" | "DISABLED";
}

export function StatusTable({ title, status = "OK" }: StatusTableProps) {
  return (
    <td>
      <div
        className={cn(
          "bg-green-400 w-[120px] rounded px-3 py-0.5 text-center",
          status === "PENDING" && "bg-[#FCBE30]",
          status === "DISABLED" && "bg-red-400"
        )}
      >
        <span className="text-xs font-bold leading-6 text-white uppercase select-none">
          {title}
        </span>
      </div>
    </td>
  );
}
