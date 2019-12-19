import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";
import ShipmentSelect from "../../Common/ShipmentSelect";
import TransportSelect from "../../Common/TransportSelect";
import { Checkbox } from "../../Common/Checkbox";
import ContainerForm from './ContainerForm';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  select: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  }
}));

export default function ShipmentForm() {
  const classes = useStyles();

  const initialValues = {
    shipments: [
      {
        shipmentsType: "Single",
        shipmentsOtherType: "",
        transportsType: "20GP",
        noOfUnits: "2",
        ratePerUnit: "150",
        currency: "SGD",
        isFrost: true,
        isChiller: false,
        isCa: false,
        isDg: false,
        isOpen: false,
        isClose: false
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
                name="shipments"
                render={({ remove, push }) => (
                  <div className="headOfFieldArray">
                    <Typography variant="h6" className={classes.title}>
                      Shipments
                      <IconButton
                        className= {classes.iconButton}
                        onClick={() => push({ shipmentsType: "", transportsType: "", noOfUnits: "", ratePerUnit: "", currency: "SGD", isFrost: false, isChiller: false, isCa: false, isDg: false, isOpen: false, isClose: false   })}>
                        <AddBox/>
                      </IconButton>
                    </Typography>
                      {values.shipments.length > 0 &&
                        values.shipments.map((shipment, index) => (
                          <div className="headOfForm">
                            <Card className={classes.card}>
                              <div>
                                <Typography variant="body1">
                                  <strong>Shipment {index+1}</strong>
                                </Typography>
                                <Grid container justify = "center">
                                  <Grid item xs={3}>
                                    <Field
                                      name={`shipments.${index}.shipmentsType`}
                                      component={TextField}
                                      label="Shipment Type"
                                      disabled
                                      className={classes.textField}
                                      fullWidth
                                      />
                                  </Grid>
                                  <Grid item xs={3}>
                                    <Field
                                      name={`shipments.${index}.transportsType`}
                                      component={TextField}
                                      label="Transport Type"
                                      disabled
                                      className={classes.textField}
                                      fullWidth
                                      />
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Field
                                      name={`shipments.${index}.noOfUnits`}
                                      component={TextField}
                                      label="No of *"
                                      id="units"
                                      type="number"
                                      className={classes.textField}
                                      fullWidth
                                      InputProps={{
                                        endAdornment: <InputAdornment position="end" style={{ width: "50px"}}>Units</InputAdornment>,
                                        inputProps: { min: 1 }
                                      }}
                                    />
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Field
                                      name={`shipments.${index}.ratePerUnit`}
                                      component={TextField}
                                      label="Rate Per Unit *"
                                      id="rate"
                                      type="number"
                                      className={classes.textField}
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={1}>
                                    <Field
                                      name={`shipments.${index}.currency`}
                                      component={TextField}
                                      disabled
                                      id="currency"
                                      label="Currency"
                                      className={classes.textField}
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={1}>
                                    <div>
                                      <IconButton
                                        className= {classes.iconButton}
                                        onClick={() => remove(index)}
                                        >
                                        <DeleteBox/>
                                      </IconButton>
                                    </div>
                                  </Grid>
                                </Grid>
                                <Grid container justify = "center">
                                  <Grid item xs={3}>
                                    <ShipmentSelect
                                      className={classes.select}
                                      name={`shipments.${index}.shipmentsType`}
                                    />
                                    {(() => {
                                      if (shipment.shipmentsType.includes('other')) {
                                        return (
                                          <div className={classes.container}>
                                          <Field
                                            name={`shipments.${index}.shipmentsOtherType`}
                                            component={TextField}
                                            label="Specify Other Shipment"
                                            className={classes.textField}
                                            fullWidth
                                            />
                                            </div>
                                          )
                                        } else {
                                          return (
                                            <div></div>
                                          )
                                        }
                                      })
                                    ()}
                                  </Grid>
                                  <Grid item xs={3}>
                                    <TransportSelect
                                      className={classes.select}
                                      name={`shipments.${index}.transportsType`}
                                    />
                                  </Grid>
                                  <Grid item xs={6}>
                                    <FormControlLabel
                                      className={classes.textField}
                                      control={
                                        <Checkbox
                                          name={`shipments.${index}.isFrost`} />
                                      }
                                      label="Frost"
                                    />
                                    <FormControlLabel
                                      className={classes.textField}
                                      control={
                                        <Checkbox name={`shipments.${index}.isChiller`} />
                                      }
                                      label="Chiller"
                                    />
                                    <FormControlLabel
                                      className={classes.textField}
                                      control={
                                        <Checkbox name={`shipments.${index}.isCa`} />
                                      }
                                      label="CA"
                                    />
                                    <FormControlLabel
                                      className={classes.textField}
                                      control={
                                        <Checkbox name={`shipments.${index}.isDg`} />
                                      }
                                      label="DG"
                                    />
                                    <FormControlLabel
                                      className={classes.textField}
                                      control={
                                        <Checkbox name={`shipments.${index}.isOpen`} />
                                      }
                                      label="Open"
                                    />
                                    <FormControlLabel
                                      className={classes.textField}
                                      control={
                                        <Checkbox name={`shipments.${index}.isClose`} />
                                      }
                                      label="Close"
                                    />
                                  </Grid>
                                </Grid>
                              </div>
                              <div>
                                <ContainerForm/>
                              </div>
                              {
                                //Uncomment the statement below to see how the form submission will look like
                                //<pre>{JSON.stringify(values, null, 2)}</pre>
                              }
                            </Card>
                          </div>
                      ))}
                  </div>
                )}
              />
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
}
