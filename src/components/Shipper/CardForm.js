import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import uuid from 'uuid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(2)
  },
  card: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(7),
    marginTop:theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  parentCard: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    backgroundColor: "#3f51b5"
  },
  parentCardContent: {
    color: "#ffffff"
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
        <Paper className={classes.paper}>
          Shipment
          <Grid container justify = "center">
            <Grid item xs={6}>
              <Card className={classes.parentCard}>
                <CardContent className={classes.parentCardContent}>Container</CardContent>
                <Card className={classes.card}>
                  <CardContent>
                    <IconButton><AddBox/></IconButton>
                    <div>
                      Container A <br/>
                      <IconButton><DeleteBox/></IconButton>
                    </div>
                  </CardContent>
                </Card>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.parentCard}>
                <CardContent className={classes.parentCardContent}>Cargo</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
