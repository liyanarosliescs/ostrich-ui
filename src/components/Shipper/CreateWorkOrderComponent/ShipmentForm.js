import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'formik-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, Form, FieldArray } from "formik";
import { Checkbox } from "../../Common/Checkbox";
import ContainerForm from './ContainerForm';
import ShipmentSelect from "../../Common/ShipmentSelect";
import TransportSelect from "../../Common/TransportSelect";
import uuid from 'uuid';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  subtitle: {
    textAlign: 'center',
    color: "#3f51b5"
  },
  title: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
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
  select: {
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
  },
  iconButton: {
    color: "#000000"
  }
}));

export default function ShipmentForm() {
  const classes = useStyles();

  function generateId() {
    return uuid.v4();
  }

  const shipmentId = generateId()

  const initialValues = {
    shipments: [
      {
        shipmentsId: shipmentId,
        shipmentsType: "",
        shipmentsOtherType: "",
        transportsType: "",
        noOfUnits: "",
        ratePerUnit: "",
        currency: "SGD",
        isFrost: false,
        isChiller: false,
        isCa: false,
        isDg: false,
        isOpen: false,
        isClose: false
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
                Shipment Information
              </Typography>
              <FieldArray
                name="shipments"
                render={({ remove, push }) => (
                  <div className="headOfFieldArray">
                    <Typography variant="h6" className={classes.subtitle}>
                      Shipments
                      <IconButton
                        className= {classes.iconButton}
                        onClick={() => push({ shipmentsId: generateId(), shipmentsType: "", transportsType: "", noOfUnits: "", ratePerUnit: "", currency: "SGD", isFrost: false, isChiller: false, isCa: false, isDg: false, isOpen: false, isClose: false   })}>
                        <AddBox/>
                      </IconButton>
                    </Typography>
                    {values.shipments.length > 0 &&
                      values.shipments.map((shipment, index) => (
                        <div className="headOfForm">
                          <Card className={classes.card}>
                            <div>
                              <Typography variant="body1">
                                <strong>Shipment</strong>
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
                            <div className={classes.nesting}>
                              <ContainerForm
                                shipmentId = {shipmentId}
                                shipment={values.shipments}
                                shipmentIndex={index}/>
                            </div>
                          </Card>
                          {
                            //Uncomment the statement below to see how the form submission will look like
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                          }
                        </div>
                    ))}
                  </div>
                )}
              />
            </Form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}
