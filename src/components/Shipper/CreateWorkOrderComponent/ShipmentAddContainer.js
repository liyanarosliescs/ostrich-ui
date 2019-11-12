import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

export default function ShipmentAddContainer() {
  const classes = useStyles();

  const blankContainer = {
    vehicleNo: '',
    sealNo: '',
    vgm: ''
  };

  const [containerState, setCotainerState] = useState([
      { ...blankContainer},
  ]);

  const addContainer = () => {
      setCotainerState([...containerState, { ...blankContainer }]);
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Container <br/>
        <IconButton onClick={addContainer}>
          <AddBox/>
        </IconButton>
        <IconButton onClick={addContainer}>
          <DeleteBox/>
        </IconButton>
      </Typography>
      <CardContent>
        <form className={classes.container}>
          <TextField
            label="Vehicle No"
            className={classes.textField}
            fullWidth
            />
            <TextField
            label="Seal No"
            className={classes.textField}
            fullWidth
            />
            <TextField
            label="VGM"
            className={classes.textField}
            fullWidth
            />
        </form>
      </CardContent>
    </Card>
  );
}
