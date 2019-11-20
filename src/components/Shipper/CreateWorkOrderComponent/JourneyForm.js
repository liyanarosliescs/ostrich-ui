import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'formik-material-ui';
import { Switch } from "../../Common/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import JourneyIconHorizontal from '@material-ui/icons/ArrowForward';
import JourneyIconVertical from '@material-ui/icons/ArrowDownward';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import CustomDatePicker from '../../Common/CustomDatePicker';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, Form, FieldArray } from "formik";

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
  title: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(1),
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
  iconButton: {
    color: "#000000"
  }
}));

export default function JourneyForm() {
  const classes = useStyles();

  const initialValues = {
    journeys: [
      {
        pickUpLocation1: "",
        pickUpLocation2: "",
        pickUpLocation3: "",
        pickUpLocation4: "",
        pickUpFreeTime: "",
        pickUpDateTime: "",
        pickUpIsLoaded: true,
        deliveryLocation1: "",
        deliveryLocation2: "",
        deliveryLocation3: "",
        deliveryLocation4: "",
        deliveryFreeTime: "",
        deliveryDateTime: ""
      }
    ]
  };

  return (
    <React.Fragment>
    <Formik
      initialValues={initialValues}>
      {props => {
        const {
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          dirty,
          setFieldValue,
          setFieldTouched,
          isSubmitting
        } = props;
        return (
          <Form>
            <Typography variant="h6" gutterBottom>
              Journey Information
            </Typography>
              <FieldArray
                name="journeys"
                render={({ remove, push }) => (
                  <div className="headOfFieldArray">
                  <Typography variant="h5" className={classes.subtitle}>
                    Trip
                    <IconButton
                      className= {classes.iconButton}
                      onClick={() => push({ pickUpLocation1: "", pickUpLocation2: "", pickUpLocation3: "", pickUpLocation4: "", pickUpFreeTime: "", pickUpDateTime: "", pickUpIsLoaded: true, deliveryLocation1: "", deliveryLocation2: "", deliveryLocation3: "", deliveryLocation4: "", deliveryFreeTime: "", deliveryDateTime: "" })}>
                      <AddBox/>
                    </IconButton>
                  </Typography>
                    {values.journeys.length > 0 &&
                      values.journeys.map((journey, index) => (
                        <div className="headOfForm">
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={5}>
                            <Card className={classes.card}>
                              <Typography variant="h6" className={classes.title}>
                                Pick Up
                              </Typography>
                              <CardContent>
                                <div className="pickUpForm">
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.pickUpLocation1`}
                                    label="Location Line 1"
                                    className={classes.textField}
                                    fullWidth
                                    required
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.pickUpLocation2`}
                                    label="Location Line 2"
                                    className={classes.textField}
                                    fullWidth
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.pickUpLocation3`}
                                    label="Location Line 3"
                                    className={classes.textField}
                                    fullWidth
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.pickUpLocation4`}
                                    label="Location Line 4"
                                    className={classes.textField}
                                    fullWidth
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.pickUpFreeTime`}
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
                                </div>
                                <br/>
                                <div className={classes.container}>
                                  <CustomDatePicker
                                    name={`journeys.${index}.pickUpDateTime`}
                                    className={classes.dateField}
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Grid component="label" container alignItems="center" spacing={1} className={classes.textField}>
                                    <Grid item>Empty</Grid>
                                    <Grid item>
                                      <Switch
                                        name={`journeys.${index}.pickUpIsLoaded`}
                                        color="primary" />
                                    </Grid>
                                    <Grid item>Loaded</Grid>
                                  </Grid>
                                </div>
                                </div>
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
                              dd
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <Card className={classes.card}>
                              <Typography variant="h6" className={classes.title}>
                                Delivery
                              </Typography>
                              <CardContent>
                                <div className="deliveryForm">
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.deliveryLocation1`}
                                    label="Location Line 1"
                                    className={classes.textField}
                                    fullWidth
                                    required
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.deliveryLocation2`}
                                    label="Location Line 2"
                                    className={classes.textField}
                                    fullWidth
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.deliveryLocation3`}
                                    label="Location Line 3"
                                    className={classes.textField}
                                    fullWidth
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.deliveryLocation4`}
                                    label="Location Line 4"
                                    className={classes.textField}
                                    fullWidth
                                  />
                                </div>
                                <div className={classes.container}>
                                  <Field
                                    component={TextField}
                                    name={`journeys.${index}.deliveryFreeTime`}
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
                                </div>
                                <br/>
                                <div className={classes.container}>
                                  <CustomDatePicker
                                    name={`journeys.${index}.deliveryDateTime`}
                                    className={classes.dateField}
                                  />
                                </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Grid>
                          <div className={classes.container}>
                            <IconButton
                              className= {classes.iconButton}
                              onClick={() => remove(index)}
                              >
                              <DeleteBox/>
                            </IconButton>
                          </div>
                        </Grid>
                        </div>
                    ))}
                  </div>
                )}
              />
              {
                //Uncomment the statement below to see how the form submission will look like
                //<pre>{JSON.stringify(values, null, 2)}</pre>
              }
          </Form>
        );
      }}
    </Formik>
    </React.Fragment>
  );
}
