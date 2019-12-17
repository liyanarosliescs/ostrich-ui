import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Checkbox } from "../Common/Checkbox";
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";
import ShipmentSelect from "../Common/ShipmentSelect";
import TransportSelect from "../Common/TransportSelect";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(2)
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
  cardButton: {
    display: "block",
    textAlign: "initial"
  },
  subtitle: {
     textAlign: 'center'
  }
}));

export default function CardForm() {
  const classes = useStyles();

  const initialValues = {
    shipments: [
      {
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
        isClose: false,
        containers: [
          {
            vehicleNo: "",
            sealNo: "",
            vgm: ""
          }
        ]
      }
    ]
  };

  const CargoCard = () => {
    return (
      <Card className={classes.card}>
        <CardContent>Cargo</CardContent>
      </Card>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      >
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
            <Grid container justify = "center">
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container justify = "center">
                    <Grid item xs={12} className={classes.subtitle}>
                      <FieldArray
                        name="shipments"
                        render={({ remove, push }) => (
                          <div>
                            <Typography variant="h6" className={classes.title}>
                              Shipment
                              <IconButton
                                className= {classes.iconButton}
                                onClick={() => push({ shipmentsType: "", transportsType: "", noOfUnits: "", ratePerUnit: "", currency: "SGD", isFrost: false, isChiller: false, isCa: false, isDg: false, isOpen: false, isClose: false   })}>
                                <AddBox/>
                              </IconButton>
                            </Typography>
                              {values.shipments.length > 0 &&
                                values.shipments.map((shipment, index) => (
                                  <div key={index}>
                                    <div>
                                      <ShipmentSelect
                                        className={classes.select}
                                        name={`shipments.${index}.shipmentsType`}
                                      />
                                    </div>
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
                                    })()}
                                    <br/>
                                    <div>
                                      <TransportSelect
                                        className={classes.select}
                                        name={`shipments.${index}.transportsType`}
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name={`shipments.${index}.noOfUnits`}
                                        component={TextField}
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
                                    </div>
                                    <div>
                                      <Field
                                        name={`shipments.${index}.ratePerUnit`}
                                        component={TextField}
                                        label="Rate Per Unit (Tax Excluded) *"
                                        id="rate"
                                        type="number"
                                        className={classes.textField}
                                        fullWidth
                                      />
                                    </div>
                                    <div>
                                      <Field
                                        name={`shipments.${index}.currency`}
                                        component={TextField}
                                        disabled
                                        id="currency"
                                        label="Currency"
                                        className={classes.textField}
                                        fullWidth
                                      />
                                    </div>
                                    <div>
                                      <Checkbox name={`shipments.${index}.isFrost`} />
                                      Frost
                                      <Checkbox name={`shipments.${index}.isChiller`} />
                                      Chiller
                                      <Checkbox name={`shipments.${index}.isCa`} />
                                      CA
                                      <Checkbox name={`shipments.${index}.isDg`} />
                                      DG
                                      <Checkbox name={`shipments.${index}.isOpen`} />
                                      Open
                                      <Checkbox name={`shipments.${index}.isClose`} />
                                      Close
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
                    </Grid>
                    <Grid item xs={6}>
                      <Card className={classes.parentCard}>
                        <CardContent className={classes.parentCardContent}>Container</CardContent>
                        <Card className={classes.card}>
                          <CardContent>
                            <IconButton><AddBox/></IconButton>
                            <div>
                              Container A <br/>
                              <IconButton><DeleteBox/></IconButton>
                            </div>
                          </CardContent>
                        </Card>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card className={classes.parentCard}>
                        <CardContent className={classes.parentCardContent}>Cargo</CardContent>
                          <Card className={classes.card}>
                            <CardContent>
                              <IconButton><AddBox/></IconButton>
                              <div>
                                Cargo A <br/>
                                <IconButton><DeleteBox/></IconButton>
                              </div>
                            </CardContent>
                          </Card>
                      </Card>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            {
              //Uncomment the statement below to see how the form submission will look like
              <pre>{JSON.stringify(values, null, 2)}</pre>
            }
          </Form>
        );
      }}
    </Formik>
  );
}
