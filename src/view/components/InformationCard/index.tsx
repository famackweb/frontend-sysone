import { cn } from "../../../app/utils/cn";

interface InformationCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function InformationCard({
  title,
  children,
  className,
}: InformationCardProps) {
  return (
    <div className="w-full flex-1 rounded bg-white">
      <header className="px-6 py-3 border-b border-gray-50">
        <h2 className="text-base text-gray-800 font-bold leading-5">{title}</h2>
      </header>

      <div className={cn("px-6 py-3 space-y-5 md:space-y-3", className)}>
        {children}
      </div>
    </div>
  );
}
