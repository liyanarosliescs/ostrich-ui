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
import Grid from '@material-ui/core/Grid';
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Search from '@material-ui/icons/Search';
import DetailViewIcon from "@material-ui/icons/FindInPage";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import logDetails from './LogDetails';

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
}));

export default function LogDetailsTable() {
  const classes = useStyles2();

  return (
    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow align="right">
            <TableCell colSpan="2">
              <Typography variant="h6" id="tableTitle">
                Log Details
              </Typography>
            </TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Sub Item</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logDetails
            .map(row => (
              <TableRow key={row.id}>
                <TableCell style={{ width: "50%" }}>
                  {row.item}
                </TableCell>
                <TableCell style={{ width: "25%" }}>
                  {row.subItem}
                </TableCell>
                <TableCell style={{ width: "25%" }}>
                  {row.data}
                </TableCell>
              </TableRow>
            ))}

        </TableBody>
      </Table>
    </div>
  );
}
