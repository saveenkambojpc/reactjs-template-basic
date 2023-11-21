import { HeadCell } from "../../core-ui/interface/table";
import { Toolbar } from "@mui/material";

import ManageUsersTable from "./ManageUsersTable";
import MuiTextField from "../../core-ui/MuiTextField";
import React, { useState } from "react";
import { UserSchema } from "../../misc/schema";

const headCells: HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "role_name",
    numeric: false,
    disablePadding: false,
    label: "Role Name",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "is_wifi_access",
    numeric: false,
    disablePadding: false,
    label: "Permission 1",
  },
  {
    id: "is_gate_access",
    numeric: false,
    disablePadding: false,
    label: "Permission 2",
  },
  {
    id: "updated_at",
    numeric: false,
    disablePadding: false,
    label: "Updated at",
  },
  {
    id: "edit",
    numeric: false,
    disablePadding: false,
    label: "",
  },
  {
    id: "delete",
    numeric: false,
    disablePadding: false,
    label: "",
  },
];

function createData(
  id: string,
  name: string,
  role_name: string,
  status: boolean,
  is_wifi_access: boolean,
  is_gate_access: boolean,
  updated_at: string
): UserSchema {
  return {
    id,
    name,
    role_name,
    status,
    is_wifi_access,
    is_gate_access,
    updated_at,
  };
}

const rows = [
  createData(
    "0a0ceba3-7ca9-421f-a973-8caae2950690",
    "Chris Evans",
    "Admin",
    true,
    true,
    true,
    "2016/10/31 20:08:27"
  ),
  createData(
    "0a0ceba3-7ca9-421f-a973-8caae2950693",
    "Cory James",
    "Admin",
    false,
    true,
    true,
    "2016/10/31 20:08:27"
  ),
  createData(
    "0a0ceba3-7ca9-421f-a973-8caae2950694",
    "Black Adam",
    "User",
    false,
    true,
    true,
    "2016/10/31 20:08:27"
  ),
];

export default function UsersTableComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRows = React.useMemo(() => {
    return rows.filter((row) => {
      return (
        row.name
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) ||
        row.role_name
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      );
    });
  }, [rows, searchQuery]);

  return (
    <div>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <MuiTextField
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Toolbar>
      <ManageUsersTable headCells={headCells} rows={filteredRows} />
    </div>
  );
}
