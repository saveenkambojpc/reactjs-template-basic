import CButton from "../../core-ui/CButton";

export default function ReportCard({ title = "Card" }: { title: string }) {
  return (
    <div className=" flex gap-3 flex-col justify-center items-center w-[260px] h-[200px] bg-white p-3 border-2 rounded-xl">
      <h2 className="text-slate-600 text-xl">{title}</h2>
      <CButton btnText="Download" type="button" />
    </div>
  );
}
