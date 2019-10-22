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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(20),
    },
    width: 70,
    height: 70,
  },
}));

export default function ShipmentForm() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipment Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.subtitle}>
            Shipment <AddBox/>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              title="Shipment Instruction"
            />
            <CardContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl} className={classes.textField} fullWidth>
                  <InputLabel htmlFor="age-simple">Type</InputLabel>
                    <Select
                      value={values.age}
                      onChange={handleChange}
                      inputProps={{
                        name: 'type',
                        id: 'type',
                      }}
                      >
                      <MenuItem value={"20GP"}>20GP</MenuItem>
                      <MenuItem value={"40GP"}>40GP</MenuItem>
                      <MenuItem value={"45GP"}>45GP</MenuItem>
                      <MenuItem value={"1T"}>1T</MenuItem>
                      <MenuItem value={"3.5T"}>3.5T</MenuItem>
                      <MenuItem value={"20RF"}>20RF</MenuItem>
                      <MenuItem value={"40RF"}>40RF</MenuItem>
                      <MenuItem value={"40HC"}>40HC</MenuItem>
                      <MenuItem value={"53FT"}>53FT</MenuItem>
                      <MenuItem value={"Flatbed"}>Flatbed</MenuItem>
                      <MenuItem value={"Rabon"}>Rabon</MenuItem>
                      <MenuItem value={"Thorton"}>Thorton</MenuItem>
                    </Select>
                  </FormControl>
                <TextField
                  label="Number of *"
                  id="units"
                  type="number"
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Units</InputAdornment>,
                    inputProps: { min: 1 }
                  }}
                />
                <TextField
                  label="Rate Per Unit (Tax Excluded) *"
                  id="rate"
                  type="number"
                  className={classes.textField}
                  fullWidth
                />
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={1}>
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
        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardHeader
              title="Shipment Transportation"
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
                  label="Delivery"
                  id="delivery"
                  type="number"
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Hours</InputAdornment>,
                    inputProps: { min: 1 }
                  }}
                />
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={1}>
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
        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardHeader
              title="Cargo Instruction"
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
                  label="Delivery"
                  id="delivery"
                  type="number"
                  className={classes.textField}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Hours</InputAdornment>,
                    inputProps: { min: 1 }
                  }}
                />
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
