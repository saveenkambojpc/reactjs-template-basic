import { TextField } from "@mui/material";

export default function MuiTextField({
  placeholder = "Search",
  onChange,
  value,
}: {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  props?: [];
}) {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id="filled-basic"
      variant="standard"
    />
  );
}
