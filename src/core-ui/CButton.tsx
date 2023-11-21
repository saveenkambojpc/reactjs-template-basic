import { Button } from "@mui/material";

export default function CButton({
  btnText = "submit",
  type = "button",
  onClick,
}: {
  btnText: string;
  type: "submit" | "button";
  onClick?: () => void;
}) {
  return (
    <Button type={type} onClick={onClick} variant="contained">
      {btnText}
    </Button>
  );
}
