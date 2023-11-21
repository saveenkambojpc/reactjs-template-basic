import { Form, Formik } from "formik";
import FormControl from "../core-ui/Formik/FormControl";
import * as Yup from "yup";
import CButton from "../core-ui/CButton";

export default function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  function handleSubmit(values: {}, _formikHelpers: {}): void {
    alert(JSON.stringify(values));
  }

  const validation = Yup.object({
    username: Yup.string().required("required"),
  });

  return (
    <div className="flex h-screen">

<div className="w-full md:w-1/2 flex justify-center items-center">
        <Formik
          validationSchema={validation}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="w-1/2 flex flex-col gap-4">
            <FormControl
              control="input"
              label="Username"
              name="username"
              type="text"
            />
            <FormControl
              control="input"
              label="Password"
              name="password"
              type="password"
            />

            <CButton btnText="Login" type="button" />
          </Form>
        </Formik>
      </div>
      <div
        className="hidden md:block md:w-1/2"
        style={{
          background: "linear-gradient(90deg, rgba(216,0,50,1) 0%, rgba(255,166,187,1) 100%)",
        }}
      ></div>
   
    </div>
  );
}
