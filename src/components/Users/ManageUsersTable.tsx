import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";

import { visuallyHidden } from "@mui/utils";
import {
  EnhancedTableProps,
  Order,
  getComparator,
  stableSort,
  HeadCell,
} from "../../core-ui/Table/helper";
import ControlledCheckbox from "../../core-ui/ControlledCheckbox";
import { set_is_modal_open, set_modal_type } from "../../store/features/user";
import { useDispatch } from "react-redux";
import MuiIconButton from "../../core-ui/MuiIconButton";
import UsersModal from "./UsersModal";

export default function ManageUsersTable({
  headCells,
  rows,
}: {
  headCells: HeadCell[];
  rows: any[];
}) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedRowData, setSelectedRowData] = React.useState<any>();
  const dispatch = useDispatch();

  function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
      (property: string) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  function handleEditButtonClick() {
    dispatch(set_modal_type("Edit"));
    dispatch(set_is_modal_open(true));
  }

  function handleModalClose() {
    dispatch(set_is_modal_open(false));
    setSelectedRowData({});
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row) => {
                console.log("row is ", row);
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.role_name}</TableCell>
                    <TableCell align="left">
                      <ControlledCheckbox checked={Boolean(row.status)} />
                    </TableCell>
                    <TableCell align="left">
                      <ControlledCheckbox checked={Boolean(row.status)} />
                    </TableCell>
                    <TableCell align="left">
                      <ControlledCheckbox checked={Boolean(row.status)} />
                    </TableCell>
                    <TableCell align="left">{row.updated_at}</TableCell>
                    <TableCell padding="none" align="left">
                      <MuiIconButton
                        type="edit"
                        handleClick={() => {
                          handleEditButtonClick();
                          setSelectedRowData(row);
                        }}
                      />
                    </TableCell>
                    <TableCell padding="none" align="left">
                      <MuiIconButton type="delete" handleClick={() => {}} />
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <UsersModal data={selectedRowData} handleModalClose={handleModalClose} />
    </Box>
  );
}
