import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import setting from '../../Common/WorkOrderData/setting'

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  table: {
    minWidth: 650,
  },
  textarea: {
    width: 700
  },
}));

export default function RemarkForm() {
  const classes = useStyles();

  return(
    <Grid item xs={12}>
      <Typography variant="h6" className={classes.title}>
        Remarks
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Remark</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Date Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {setting.map(item => (
            <TableRow>
              <TableCell>{item.remark}</TableCell>
              <TableCell>System-S1</TableCell>
              <TableCell>	Shipper1</TableCell>
              <TableCell>30 Oct 2019 10:18AM</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}>
              <TextareaAutosize rows={3} placeholder="Enter additional remarks here" className={classes.textarea}/>
            </TableCell>
            <TableCell>
              <Button
                type="submit"
                variant="contained"
                color="primary">
                Add Remark
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
}
