import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3)
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
  select: {
    width: 300
  },
  subtitle: {
     textAlign: 'center'
  }
}));

export default function CardContainerForm({ shipmentId }) {
  const classes = useStyles();
  return (
    <Card className={classes.parentCard}>
      Hello {shipmentId}
      <CardContent className={classes.parentCardContent}>
        Container
        <IconButton className={classes.parentCardContent}>
          <AddBox/>
        </IconButton>
      </CardContent>
      <Card className={classes.card}>
        <CardContent>
          <div>
            Container A <br/>
            <IconButton><DeleteBox/></IconButton>
          </div>
        </CardContent>
      </Card>
    </Card>
  );
}
