export default function Banner({
  title,
  count,
  className,
  ...props
}: {
  title: string;
  count?: number;
  className?: string;
  props?: [];
}) {
  return (
    <div className="w-full">
      <div
        className={`${className} bg-slate-100  shadow duration-500  p-3 h-[160px] rounded `}
        {...props}
      >
        {title}
      </div>
    </div>
  );
}
