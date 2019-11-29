import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from 'react-select';
import setting from '../../Common/WorkOrderData/setting';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  mainGrid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
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

export default function MainForm() {
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
    <Grid item xs={12}>
      <Typography variant="h6" className={classes.title}>
        Settings
      </Typography>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Auto Reject Function: </strong> System will not allow Truckers to offer higher rate than your request rate.
          </Typography>
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
          <Typography variant="body1">
            <strong>Accept counter offer: </strong> System will allow Truckers to offer different timeslot and shipment types.
          </Typography>
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
          <Typography variant="body1">
            <strong>Automatic Assignment: </strong> System will choose the winner automatically by selecting the lowest offer rate.
          </Typography>
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
          <Select
            className={classes.select}
            options = {options}
            defaultValue={[options[1], options[2]]}
            isClearable
            isMulti
            placeholder="Open for *"
          />
          {setting.map(item => (
            <TextField
              defaultValue={item.openTime}
              label="Open Time *"
              id="openTime"
              type="number"
              className={classes.time}
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end" style={{ width: "100px"}}>Minutes</InputAdornment>,
                inputProps: { min: 1 }
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
