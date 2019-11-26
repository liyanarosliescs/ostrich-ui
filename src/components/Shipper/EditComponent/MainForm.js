import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import main from '../../Common/WorkOrderData/main';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  }
}));

export default function MainForm() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography variant="h6" className={classes.title}>
        Main
      </Typography>
      {main.map(item => (
        <TextField
          defaultValue={item.referenceNo}
          label="Reference Number*"
          fullWidth
        />
      ))}
      {main.map(item => (
        <TextField
          defaultValue={item.shipper}
          label="Shipper*"
          fullWidth
        />
      ))}
      {main.map(item => (
        <TextField
          defaultValue={item.consignee}
          label="Consignee*"
          fullWidth
        />
      ))}
      <br/>
    </Grid>
  );
}
