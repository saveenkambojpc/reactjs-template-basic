import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MuiIconButton from "./MuiIconButton";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Modal({
  open,
  handleClose,
  title,
  modalBody,
  maxWidth = "md",
}: {
  open: boolean;
  handleClose: any;
  title: string;
  modalBody: React.JSX.Element;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        maxWidth={maxWidth}
        fullScreen={fullScreen}
        open={open}
        onClose={(_event, reason) => {
          if (reason && reason == "backdropClick") return;
          handleClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="flex justify-between">
          <div>{title}</div>

          <MuiIconButton type="close" handleClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          <div className="m-3">{modalBody}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
