import { useDispatch } from "react-redux";
import UsersTableComponent from "../components/Users/UsersTableComponent";
import CButton from "../core-ui/CButton";
import { set_is_modal_open, set_modal_type } from "../store/features/user";

export default function Users() {
  const dispatch = useDispatch();

  function handleAddUserButtonClick() {
    dispatch(set_is_modal_open(true));
    dispatch(set_modal_type("Add"));
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="page-title">Manage Users</div>
        <div className="">
          <CButton
            onClick={handleAddUserButtonClick}
            type="submit"
            btnText="Add User"
          />
        </div>
      </div>

      <UsersTableComponent />
    </div>
  );
}
