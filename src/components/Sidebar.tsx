import styles from "../style/sidebar.module.css";
import { CheckBox, Dashboard, Summarize } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import faceGenieLogo from "../assets/logos/faceGenieLogo.webp";
import { useSelector } from "react-redux";
import { variable } from "../misc/variable";
import Tooltip from "@mui/material/Tooltip";

export default function Sidebar() {
  const location = useLocation();
  const { is_sidebar_collapsed } = useSelector((s: any) => s.helper);

  const content = [
    {
      label: "Dashboard",
      to: ROUTES.dashboard,
      icon: <Dashboard />,
    },
    {
      label: "Logs",
      to: ROUTES.logs,
      icon: <Summarize />,
    },
    {
      label: "Report",
      to: ROUTES.reports,
      icon: <Summarize />,
    },
    {
      label: "Manage Users",
      to: ROUTES.users,
      icon: <CheckBox />,
    },
  ];

  return (
    <div
      className={`${styles.sidebar} border-r transition-all`}
      style={{
        width: is_sidebar_collapsed
          ? variable.sidebar_width.collapsed
          : variable.sidebar_width.expanded,
      }}
    >
      <div className="mt-4">
        {content.map((item, index) => {
          return (
            <Tooltip title={item.label} placement="right">
              <Link key={index} to={item.to}>
                <div
                  className={`${styles.sidebar_item} ${
                    location.pathname === item.to && styles.sidebar_item_active
                  }`}
                >
                  {item.icon}
                  {!is_sidebar_collapsed && (
                    <span className="">{item.label}</span>
                  )}
                </div>
              </Link>
            </Tooltip>
          );
        })}
        {!is_sidebar_collapsed && (
          <div className="w-full my-3 flex justify-center absolute bottom-20">
            <img src={faceGenieLogo} alt="" style={{ height: "50px" }} />
          </div>
        )}
      </div>
    </div>
  );
}
