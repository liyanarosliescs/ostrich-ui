import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
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
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Search from '@material-ui/icons/Search';
import DetailViewIcon from "@material-ui/icons/FindInPage";
import OfferIcon from "@material-ui/icons/CallMade";
import CounterOfferIcon from "@material-ui/icons/CallSplit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import jobs from './Jobs';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  },
}));

function AvailableJobsTablePagination(props) {
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

AvailableJobsTable.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  timer: {
    color: '#FF0000'
  }
}));

export default function AvailableJobsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [files, setFiles] = useState([]);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, jobs.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = e => {
    setFiles(e.target.value);
  }

  const Completionist = () => <span>Closed</span>;

  return (
    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow align="right">
            <TableCell colSpan="2">
              <Typography variant="h6" id="tableTitle">
                Jobs
              </Typography>
            </TableCell>
            <TableCell colSpan="5" align="right">
              <form noValidate>
                <TextField
                  id="date"
                  label="From"
                  type="date"
                  defaultValue="2019-10-01"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date"
                  label="To"
                  type="date"
                  defaultValue="2019-10-01"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
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
              </form>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>Closing Time</TableCell>
            <TableCell>Last Update</TableCell>
            <TableCell>Number of Offers</TableCell>
            <TableCell>Work Order Number</TableCell>
            <TableCell>Shipper Information</TableCell>
            <TableCell>Journey Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => (
              <TableRow key={row.id}>
                <TableCell style={{ width: "15%" }}>
                  <Link href="/trucker/workorderdetails">
                    <DetailViewIcon/>
                  </Link>
                  <Link href="/trucker/offer#action">
                    <OfferIcon/>
                  </Link>
                  <Link href="/trucker/counteroffer#action">
                    <CounterOfferIcon/>
                  </Link>
                </TableCell>
                <TableCell style={{ width: "15%" }}>
                  {row.closingTime}
                  <Typography variant="body2" gutterBottom className={classes.timer}>
                    <Countdown date={Date.now() + 10000}>
                      <Completionist />
                    </Countdown>
                  </Typography>
                </TableCell>
                <TableCell style={{ width: "15%" }}>
                  {row.lastUpdate}
                </TableCell>
                <TableCell style={{ width: "5%" }}>
                  {row.numOfOffers}
                </TableCell>
                <TableCell style={{ width: "15%" }}>
                  {row.workOrderNum}
                </TableCell>
                <TableCell style={{ width: "15%" }}>
                  {row.shipperInfo}
                </TableCell>
                <TableCell style={{ width: "20%" }}>
                  {row.journeyInfo}
                </TableCell>
              </TableRow>
            ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={7}
              count={jobs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={AvailableJobsTablePagination}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
