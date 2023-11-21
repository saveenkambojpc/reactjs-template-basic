import { useSelector } from "react-redux";
import Modal from "../../core-ui/Modal";
import { Form, Formik } from "formik";
import FormControl from "../../core-ui/Formik/FormControl";
import * as Yup from "yup";
import { UserSchema } from "../../misc/schema";

export default function UsersModal({
  data,
  handleModalClose,
}: {
  data: UserSchema;
  handleModalClose: () => void;
}): React.JSX.Element {
  const { is_modal_open } = useSelector(
    (store: any) => store.users
  );

  const validation = Yup.object({
    username: Yup.string().required("required"),
  });

  const initialValues = {
    name: data ? data.name : "",
    role_name: data ? data.role_name : "",
    status: data ? data.status : true,
  };

  function handleSubmit() {}
  console.log(data);
  return (
    <div>
      <Modal
        title={`User`}
        open={is_modal_open}
        handleClose={handleModalClose}
        maxWidth="xl"
        modalBody={
          <>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validation}
            >
              <Form className="flex gap-12">
                <div className="flex  gap-6 flex-col">
                  <FormControl
                    type="text"
                    control="input"
                    name="name"
                    label="Name"
                  />
                  <FormControl
                    type="text"
                    control="input"
                    name="role_name"
                    label="Role Name"
                  />
                </div>

                <div className="flex  gap-6 flex-col">
                  {/* <Typography>Permission</Typography> */}

                  <FormControl
                    control="checkbox"
                    name="status"
                    label="Status"
                  />
                </div>
              </Form>
            </Formik>
          </>
        }
      />
    </div>
  );
}
