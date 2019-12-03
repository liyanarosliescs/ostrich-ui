import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link';
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import AddBox from "@material-ui/icons/AddBox";
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import PermissionManager from "@material-ui/icons/SupervisorAccount"

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  },
}));

function ShipperTab(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

ShipperTab.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function createData(userName, isManager, email, phoneNumber, company, truckCode, isApproved, userType) {
  return { userName, isManager, email, phoneNumber, company, truckCode, isApproved, userType };
}

const rows = [
  createData("shipper3", 1, "shipper3@gmail.com", "23456787654", "I am shipper", "abc", 1, "Export"),
  createData("test.performance", 0, "test.performance@gmail.com", "", "Test.Perfomance", "", 1, "Export"),
  createData("Export", 0, "shipper2@gmail.com", "63521371", "Forwarder", "", 1, "Export"),
  createData("ylmex_shipper1", 1, "ylmex_shipper1@gmail.com", "", "YUSEN MEX", "", 1, "Import"),
  createData("Shipper1", 1, "shipper1@gmail.com", "63521371", "System-S1", "", 0, "Import"),
];

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

export default function ShipperTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow align="right">
            <TableCell colSpan="2">
              <Typography variant="h6" id="tableTitle">
                Shipper <AddBox/>
              </Typography>
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell colSpan="3" align="right">
              <TextField
                id="standard-search"
                type="search"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Truck Code</TableCell>
            <TableCell>Require Approval</TableCell>
            <TableCell>User Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => (
              <TableRow key={row.id}>
                <TableCell style={{ width: "35%" }}>
                  <Link href="/admin/useredit">
                    <Edit />
                  </Link>
                  <DeleteOutline />
                </TableCell>
                <TableCell style={{ width: "5%" }}>
                  {row.userName}
                  {row.isManager ? <PermissionManager />: "" }
                </TableCell>
                <TableCell style={{ width: "10%" }}>
                  {row.email}
                </TableCell>
                <TableCell style={{ width: "10%" }}>
                  {row.phoneNumber}
                </TableCell>
                <TableCell style={{ width: "10%" }}>
                  {row.company}
                </TableCell>
                <TableCell style={{ width: "10%" }}>
                  {row.truckCode}
                </TableCell>
                <TableCell style={{ width: "10%" }}>
                  {row.isApproved ? "Yes":"No"}
                </TableCell>
                <TableCell style={{ width: "10%" }}>
                  {row.userType}
                </TableCell>
              </TableRow>
            ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={8} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={8}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={ShipperTab}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
