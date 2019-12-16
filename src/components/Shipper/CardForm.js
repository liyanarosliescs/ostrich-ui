import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import uuid from 'uuid';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(1),
    margin: theme.spacing(2)
  },
  cardButton: {
    display: "block",
    textAlign: "initial"
  },
  media: {
    height: 200
  }
}));

export default function CardForm() {
  const classes = useStyles();

  const CargoCard = () => {
    return (
      <Card className={classes.card}>
        <CardContent>Cargo</CardContent>
      </Card>
    )
  }

  return (
    <Grid container justify = "center">
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>Shipment</CardContent>
          <Grid container justify = "center">
            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardContent>Container</CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <CargoCard/>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
