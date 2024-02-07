interface ContainerPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ContainerPageSettings({
  title,
  description,
  children,
}: ContainerPageProps) {
  return (
    <div className="w-full max-lg:px-5">
      <h1 className="text-lg md:text-[22px] font-bold leading-6 text-gray-100">
        {title}
      </h1>

      {description && (
        <p className="w-full md:max-w-[364px] text-xs font-normal leading-[14px] mt-5 mb-10">
          {description}
        </p>
      )}

      <div className="space-y-5 w-full">{children}</div>
    </div>
  );
}
