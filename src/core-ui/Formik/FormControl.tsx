import FormCheckbox from "./FormCheckbox";
import Input from "./Input";

export default function FormControl({
  control,
  label,
  name,
  type,
  ...rest
}: {
  control: string;
  label?: string;
  name: string;
  type?: "text" | "number" | "password";
  rest?: [];
}) {
  switch (control) {
    case "input":
      return <Input label={label} type={type} name={name} {...rest} />;
    case "checkbox":
      return <FormCheckbox label={label} name={name} {...rest} />;
    default:
      return null;
  }
}
