import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex h-screen flex-col bg-slate-200 items-center justify-center">
      <div className="text-xl">404 Page Not found</div>
      <Link to="/">Go Back</Link>
    </div>
  );
}
