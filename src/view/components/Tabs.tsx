import * as RdxTabs from "@radix-ui/react-tabs";
import { cn } from "../../app/utils/cn";

interface TabRootProps {
  defaultValue: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

export function TabRoot({
  defaultValue,
  children,
  onValueChange,
}: TabRootProps) {
  return (
    <RdxTabs.Root
      className="flex flex-col w-full"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      {children}
    </RdxTabs.Root>
  );
}

export function TabHeader({ children }: { children: React.ReactNode }) {
  return (
    <RdxTabs.List
      className="shrink-0 flex flex-col lg:gap-0 lg:flex-row lg:border-b border-[#E8E8E8] 
      mb-5 pb-5 lg:pb-0"
    >
      {children}
    </RdxTabs.List>
  );
}

interface TabHeaderOptionProps {
  value: string;
  title: string;
}

export function TabHeaderOption({ value, title }: TabHeaderOptionProps) {
  return (
    <RdxTabs.Trigger
      className="px-6 py-3 lg:py-1.5 text-sm lg:text-base font-normal leading-4 text-gray-800 border-b-2 lg:border-transparent 
      data-[state=active]:font-bold data-[state=active]:text-cyan-600 data-[state=active]:border-cyan-600 
      data-[state=active]:bg-cyan-600/15"
      value={value}
    >
      {title}
    </RdxTabs.Trigger>
  );
}

interface TabContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabContent({ value, children, className }: TabContentProps) {
  return (
    <RdxTabs.Content className={cn("space-y-5", className)} value={value}>
      {children}
    </RdxTabs.Content>
  );
}
