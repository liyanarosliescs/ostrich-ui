import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from 'react-select';
import JourneyIconHorizontal from '@material-ui/icons/ArrowForward';
import JourneyIconVertical from '@material-ui/icons/ArrowDownward';
import AddBox from "@material-ui/icons/AddBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  select: {
    width: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  time: {
    width: 200,
    marginRight: theme.spacing(2),
  }
}));

export default function SettingForm() {
  const classes = useStyles();

  const options = [
    { value: 'all', label: 'All' },
    { value: 'trucker2', label: 'trucker2' },
    { value: 'trucker1', label: 'trucker1' },
    { value: 'ylmex_trucker2', label: 'ylmex_trucker2' },
    { value: 'ylmex_trucker1', label: 'ylmex_trucker1' }
  ];

  const [startDate, setStartDate] = useState(null);

  const [state, setState] = React.useState({
    isAutoRejectOn: true,
    isCounterOfferOn: true,
    isAutoAssignOn: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Work Order Settings
      </Typography>
      <Grid container spacing={3} className={classes.title}>
        <form className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Auto Reject Function: </strong> System will not allow Truckers to offer higher rate than your request rate.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid component="label" container alignItems="center" spacing={1} className={classes.textField}>
              <Grid item>Off</Grid>
                <Grid item>
                  <Switch
                    color="primary"
                    checked={state.isAutoRejectOn}
                    onChange={handleChange('isAutoRejectOn')}
                    value="isAutoRejectOn"/>
                </Grid>
                <Grid item>On</Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Accept counter offer: </strong> System will allow Truckers to offer different timeslot and shipment types.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid component="label" container alignItems="center" spacing={1} className={classes.textField}>
                <Grid item>Off</Grid>
                  <Grid item>
                    <Switch
                      color="primary"
                      checked={state.isCounterOfferOn}
                      onChange={handleChange('isCounterOfferOn')}
                      value="isCounterOfferOn"/>
                  </Grid>
                  <Grid item>On</Grid>
                </Grid>
              </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Automatic Assignment: </strong> System will choose the winner automatically by selecting the lowest offer rate.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid component="label" container alignItems="center" spacing={1} className={classes.textField}>
                <Grid item>Off</Grid>
                  <Grid item>
                    <Switch
                      color="primary"
                      checked={state.isAutoAssignOn}
                      onChange={handleChange('isAutoAssignOn')}
                      value="isAutoAssignOn"/>
                  </Grid>
                  <Grid item>On</Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Select
                  className={classes.select}
                  options = {options}
                  isClearable
                  isMulti
                  placeholder="Open for *"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Open Time *"
                  id="openTime"
                  type="number"
                  className={classes.time}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Minutes</InputAdornment>,
                    inputProps: { min: 1 }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Remark"
                  fullWidth
                />
              </Grid>
          </form>
      </Grid>
    </React.Fragment>
  );
}
