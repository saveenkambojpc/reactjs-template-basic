import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { variable } from "../misc/variable";

export default function PrivateOutlet() {
  const auth = true;
  const { is_sidebar_collapsed } = useSelector((s: any) => s.helper);

  return auth ? (
    <>
      <Header />
      <Sidebar />

      <div
        style={{
          marginLeft: is_sidebar_collapsed
            ? variable.sidebar_width.collapsed
            : variable.sidebar_width.expanded,
        }}
        className="px-8 py-6 transition-all"
      >
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
