import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox({ checked }: { checked: boolean }) {
  return (
    <Checkbox
      checked={checked}
      style={{ padding: 0 }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
