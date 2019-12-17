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
import uuid from 'uuid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3)
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
  select: {
    width: 300
  },
  subtitle: {
     textAlign: 'center'
  }
}));

export default function CardForm() {
  const classes = useStyles();

  function generateId() {
    return uuid.v4();
  }

  const initialShipmentId = generateId()

  const initialContainerId = generateId()

  const initialValues = {
    shipments: [
      {
        shipmentsId: initialShipmentId,
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
    ],
    containers: [
      {
        shipmentsId: initialShipmentId,
        containersId: initialContainerId,
        vehicleNo: "",
        sealNo: "",
        vgm: ""
      }
    ],
    cargoes: [
      {
        shipmentsId: initialShipmentId,
        containersId: initialContainerId,
        cargoName: "",
        palletQuantity: "",
        weight: "",
        unNo: ""
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
            <FieldArray
              name="shipments"
              render={({ remove, push }) => (
                <div>
                  <Grid container justify = "center">
                    <Typography variant="h6" className={classes.title}>
                      Shipment
                      <IconButton
                        className= {classes.iconButton}
                        onClick={() => push({ shipmentsType: "", transportsType: "", noOfUnits: "", ratePerUnit: "", currency: "SGD", isFrost: false, isChiller: false, isCa: false, isDg: false, isOpen: false, isClose: false   })}>
                        <AddBox/>
                      </IconButton>
                    </Typography>
                    <Grid item xs={12}>
                    {values.shipments.length > 0 &&
                      values.shipments.map((shipment, index) => (
                        <div key={index}>
                          <Paper className={classes.paper}>
                            <Grid container justify = "center">
                              <div>
                                <ShipmentSelect
                                  className={classes.select}
                                  name={`shipments.${index}.shipmentsType`}
                                />
                              </div>
                              <Grid container spacing={3}>
                                <Grid item xs={6}>
                                  <Card className={classes.parentCard}>
                                    <CardContent className={classes.parentCardContent}>
                                      Container
                                      <IconButton className={classes.parentCardContent}>
                                        <AddBox/>
                                      </IconButton>
                                    </CardContent>
                                    <Card className={classes.card}>
                                      <CardContent>
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
                                    <CardContent className={classes.parentCardContent}>
                                      Cargo
                                      <IconButton className={classes.parentCardContent}>
                                        <AddBox/>
                                      </IconButton>
                                    </CardContent>
                                    <Card className={classes.card}>
                                      <CardContent>
                                        <div>
                                          Cargo A <br/>
                                          <IconButton><DeleteBox/></IconButton>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </Card>
                                </Grid>
                              </Grid>
                            </Grid>
                            <div>
                              <IconButton
                                className= {classes.iconButton}
                                onClick={() => remove(index)}
                              >
                                <DeleteBox/>
                              </IconButton>
                            </div>
                          </Paper>
                        </div>
                      ))}
                    </Grid>
                  </Grid>
                </div>
              )}
            />
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
