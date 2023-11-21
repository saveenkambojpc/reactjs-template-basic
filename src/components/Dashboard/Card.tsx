import { Person } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Card({
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
    <div className="w-full lg:w-[200px] ">
      <div
        className={`${className} justify-center gap-3 flex flex-col  shadow duration-500  p-3 h-[160px] rounded cursor-pointer`}
        {...props}
      >
        <Person fontSize="large" />
        <Typography fontSize={24}>3200</Typography>
        <Typography className="text-slate-500">{title}</Typography>
      </div>
    </div>
  );
}
