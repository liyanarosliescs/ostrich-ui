import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import JourneyIconHorizontal from '@material-ui/icons/ArrowForward';
import JourneyIconVertical from '@material-ui/icons/ArrowDownward';
import AddBox from "@material-ui/icons/AddBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  subtitle: {
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dateField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  icon: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(20),
    },
    width: 70,
    height: 70,
  },
}));

export default function JourneyForm() {
  const classes = useStyles();

  const [startDate, setStartDate] = useState(null);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Journey Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.subtitle}>
            Journey <AddBox/>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className={classes.card}>
            <CardHeader
              title="Pick Up"
            />
            <CardContent>
              <form className={classes.container}>
                <TextField
                  label="Location Line 1"
                  className={classes.textField}
                  fullWidth
                  required
                />
                <TextField
                  label="Location Line 2"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  label="Location Line 3"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  label="Location Line 4"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  label="Pick Up Free Time"
                  id="pickupFreeTime"
                  type="number"
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Hours</InputAdornment>,
                    inputProps: { min: 1 }
                  }}
                />
                <DatePicker
                  placeholderText="* Select Date/Time"
                  className={classes.dateField}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={10}
                  timeCaption="time"
                  dateFormat="dd/MM/yyyy h:mm aa"
                />
                <RadioGroup aria-label="position" name="position" row>
                  <FormControlLabel
                    value="empty"
                    control={<Radio color="primary" />}
                    label="Empty"
                    labelPlacement="empty"
                    className={classes.textField}
                  />
                  <FormControlLabel
                    value="loaded"
                    control={<Radio color="primary" />}
                    label="Loaded"
                    labelPlacement="loaded"
                    className={classes.textField}
                  />
                </RadioGroup>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <JourneyIconHorizontal
              className={classes.icon}
            />
          </Box>
          <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
            <JourneyIconVertical
              className={classes.icon}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className={classes.card}>
            <CardHeader
              title="Delivery"
              className={classes.cardContent}
            />
            <CardContent>
              <form className={classes.container}>
                <TextField
                  label="Location Line 1"
                  className={classes.textField}
                  fullWidth
                  required
                  />
                  <TextField
                  label="Location Line 2"
                  className={classes.textField}
                  fullWidth
                  />
                  <TextField
                  label="Location Line 3"
                  className={classes.textField}
                  fullWidth
                  />
                  <TextField
                  label="Location Line 4"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  label="Delivery Free Time"
                  id="pickupFreeTime"
                  type="number"
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Hours</InputAdornment>,
                    inputProps: { min: 1 }
                  }}
                />
                <DatePicker
                  placeholderText="* Select Date/Time"
                  className={classes.dateField}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={10}
                  timeCaption="time"
                  dateFormat="dd/MM/yyyy h:mm aa"
                />
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
