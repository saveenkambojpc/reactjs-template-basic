import { TextField } from "@mui/material";
import { Field } from "formik";

interface FieldType {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  name,
  required,
  type,
  ...rest
}: {
  label?: string;
  name?: string;
  required?: boolean;
  type?: string;
  rest?: [];
}) {
  return (
    <div>
      <Field name={name}>
        {({
          field,
          form: { touched, errors },
        }: {
          field: FieldType;
          form: any;
        }) => (
          <TextField
            {...field}
            style={{ width: "100%" }}
            {...rest}
            type={type}
            label={label}
            error={touched[field.name] && Boolean(errors[field.name])}
            helperText={touched[field.name] && errors[field.name]}
          />
        )}
      </Field>
    </div>
  );
}
