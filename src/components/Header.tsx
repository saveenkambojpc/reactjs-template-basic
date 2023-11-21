import styles from "../style/header.module.css";
import resoluteaiLogo from "../assets/logos/resoluteaiLogo.webp";
import { AccountCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiIconButton from "../core-ui/MuiIconButton";
import { set_is_sidebar_collapsed } from "../store/features/helper";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const { is_sidebar_collapsed } = useSelector((s: any) => s.helper);
  return (
    <div className={styles.header}>
      <div className="flex gap-6">
        <MuiIconButton
          handleClick={() =>
            dispatch(set_is_sidebar_collapsed(!is_sidebar_collapsed))
          }
        >
          <MenuIcon style={{ color: "white" }} />
        </MuiIconButton>
        <img src={resoluteaiLogo} alt="" style={{ height: "48px" }} />
      </div>

      <div className="flex gap-3 items-center">
        <div className="rounded px-3 py-1 border">
          {new Date().toLocaleDateString()}
        </div>
        <div className="rounded px-3 py-1 flex gap-3 border">
          <AccountCircle />
          <Typography>resoluteai@outlook.com</Typography>
        </div>
      </div>
    </div>
  );
}
