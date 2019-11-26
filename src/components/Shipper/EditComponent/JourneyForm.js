import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import JourneyIconVertical from '@material-ui/icons/ArrowDownward';
import { Formik, Field, Form, FieldArray } from "formik";
import { TextField } from 'formik-material-ui';
import { Switch } from "../../Common/Switch";
import CustomDatePicker from '../../Common/CustomDatePicker';
import journey from '../../Common/WorkOrderData/journey';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  icon: {
    width: 40,
    height: 40,
  },
}));

export default function JourneyForm() {
  const classes = useStyles();

  const initialValues = {
    journeys: [
      {
        pickUpLocation: "71 Ayer Rajah Crescent, #01-03 BLOCK71, Singapore 139951",
        pickUpFreeTime: "2",
        pickUpDateTime: new Date("2019-10-23 14:00:00"),
        pickUpIsLoaded: false,
        deliveryLocation: "7 Straits View, #16-01 Marina One East Tower, Singapore, 018936",
        deliveryFreeTime: "2",
        deliveryDateTime: new Date("2019-10-23 20:30:00")
      },
      {
        pickUpLocation: "7 Straits View, #16-01 Marina One East Tower, Singapore, 018936",
        pickUpFreeTime: "2",
        pickUpDateTime: new Date("2019-10-24 10:00:00"),
        pickUpIsLoaded: true,
        deliveryLocation: "Harbourfront Pl, HarbourFront Tower One, Singapore 098633",
        deliveryFreeTime: "4",
        deliveryDateTime: new Date("2019-10-24 13:30:00")
      }
    ]
  };

  return (
    <Grid item xs={12}>
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
              <FieldArray
                name="journeys"
                render={({ remove, push }) => (
                  <div className="headOfFieldArray">
                    <Typography variant="h6" className={classes.title}>
                      Journey
                      <IconButton
                        className= {classes.iconButton}
                        onClick={() => push({ pickUpLocation: "", pickUpFreeTime: "", pickUpDateTime: "", pickUpIsLoaded: true, deliveryLocation: "", deliveryFreeTime: "", deliveryDateTime: "" })}>
                        <AddBox/>
                      </IconButton>
                    </Typography>
                      {values.journeys.length > 0 &&
                        values.journeys.map((journey, index) => (
                          <div className="headOfForm">
                            <Typography variant="body1">
                              <strong>Pick Up</strong>
                            </Typography>
                            <div>
                              <Field
                                component={TextField}
                                name={`journeys.${index}.pickUpLocation`}
                                label="Location"
                                fullWidth
                                required
                              />
                            </div>
                            <div>
                              <Field
                                component={TextField}
                                name={`journeys.${index}.pickUpFreeTime`}
                                label="Pick Up Free Time"
                                id="pickupFreeTime"
                                type="number"
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
                              />
                            </div>
                            <div>
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
                            <div>
                              <Grid container justify = "center">
                                <JourneyIconVertical
                                  className={classes.icon}
                                />
                              </Grid>
                            </div>
                            <Typography variant="body1">
                              <strong>Delivery</strong>
                            </Typography>
                            <div>
                              <Field
                                component={TextField}
                                name={`journeys.${index}.deliveryLocation`}
                                label="Location"
                                fullWidth
                                required
                              />
                            </div>
                            <div>
                              <Field
                                component={TextField}
                                name={`journeys.${index}.deliveryFreeTime`}
                                label="Delivery Free Time"
                                id="deliveryFreeTime"
                                type="number"
                                fullWidth
                                InputProps={{
                                  endAdornment: <InputAdornment position="end">Hours</InputAdornment>,
                                  inputProps: { min: 1 }
                                }}
                                />
                            </div>
                            <br/>
                            <div>
                              <CustomDatePicker
                                name={`journeys.${index}.deliveryDateTime`}
                              />
                            </div>
                            <div>
                              <IconButton
                                className= {classes.iconButton}
                                onClick={() => remove(index)}
                              >
                                <DeleteBox/>
                              </IconButton>
                            </div>
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
    </Grid>
  );
}
