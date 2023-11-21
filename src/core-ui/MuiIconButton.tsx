import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Close, Edit } from "@mui/icons-material";
import React from "react";
export default function MuiIconButton({
  type,
  handleClick,
  children,
}: {
  type?: "edit" | "delete" | "close";
  handleClick: any;
  children?: React.JSX.Element;
}) {
  return (
    <IconButton
      onClick={handleClick}
      aria-label="delete"
      style={{
        padding: 3,
      }}
    >
      {children}
      {type === "close" && <Close />}
      {type === "edit" && <Edit />}
      {type === "delete" && <DeleteIcon />}
    </IconButton>
  );
}
