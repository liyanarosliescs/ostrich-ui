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
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import AddBox from "@material-ui/icons/AddBox";
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  },
}));

function ShipmentTypePagination(props) {
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

ShipmentTypePagination.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function createData(code, description, mode, fclType, teu) {
  return { code, description, mode, fclType, teu };
}

const rows = [
  createData("45GP", "", "", "", ""),
  createData("20RF", "20 FOOTER REEFER CONTAINER", "SEA", "REEFER CONTAINER", "1.0"),
  createData("40RF", "40 FOOTER REEFER CONTAINER", "SEA", "REEFER CONTAINER", "2.0"),
  createData("20GP", "20 FOOTER GENERAL PURPOSE CONTAINER 8\'6\"", "SEA", "GENERAL PURPOSE CONTAINER", "1.0"),
  createData("40GP", "40 FOOTER GENERAL PURPOSE CONTAINER 8\'6\"", "SEA", "GENERAL PURPOSE CONTAINER", "2.0"),
  createData("40HC", "40 FOOTER(HIGH-CUBE) GENERAL PURPOSE CONTAINER 9\'6\"", "SEA", "GENERAL PURPOSE CONTAINER", "2.0"),
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

export default function ShipmentTypeTable() {
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
            <TableCell colSpan="6">
              <Typography variant="h6" id="tableTitle">
                Shipment Type
                <Link href="/shipper/shipmenttypeadd">
                  <AddBox/>
                </Link>
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Mode</TableCell>
            <TableCell>FCL Type</TableCell>
            <TableCell>TEU</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => (
              <TableRow key={row.id}>
                <TableCell style={{ width: "15%" }}>
                  <Link href="/shipper/shipmenttypeedit">
                    <Edit />
                  </Link>
                  <DeleteOutline />
                </TableCell>
                <TableCell style={{ width: "15%" }}>
                  {row.code}
                </TableCell>
                <TableCell style={{ width: "30%" }}>
                  {row.description}
                </TableCell>
                <TableCell style={{ width: "15%" }}>
                  {row.mode}
                </TableCell>
                <TableCell style={{ width: "15%" }}>
                  {row.fclType}
                </TableCell>
                <TableCell style={{ width: "20%" }}>
                  {row.teu}
                </TableCell>
              </TableRow>
            ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={6}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={ShipmentTypePagination}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
