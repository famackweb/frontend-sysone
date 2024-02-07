interface ContainerPageProps {
  title: string;
  children: React.ReactNode;
}

export function ContainerPage({ title, children }: ContainerPageProps) {
  return (
    <div className="space-y-5 h-full w-full flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-[22px] text-gray-800 font-bold leading-6">
          {title}
        </h1>
      </div>

      <div className="px-6 py-[22px] flex-1 space-y-5 bg-white rounded">
        {children}
      </div>
    </div>
  );
}
