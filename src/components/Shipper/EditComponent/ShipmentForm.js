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
import uuid from 'uuid';

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
  },
  nesting: {
    marginLeft: theme.spacing(5)
  }
}));

export default function ShipmentForm() {
  const classes = useStyles();

  function generateId() {
    return uuid.v4();
  }

  const shipmentId1 = generateId()
  const shipmentId2 = generateId()

  const containerId1 = generateId()
  const containerId2 = generateId()
  const containerId3 = generateId()

  const initialValues = {
    shipments: [
      {
        shipmentsId: shipmentId1,
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
      },
      {
        shipmentsId: shipmentId2,
        shipmentsType: "roundLive",
        shipmentsOtherType: "",
        transportsType: "40GP",
        noOfUnits: "3",
        ratePerUnit: "300",
        currency: "SGD",
        isFrost: false,
        isChiller: false,
        isCa: true,
        isDg: true,
        isOpen: false,
        isClose: false
      }
    ],
    containers: [
      {
        shipmentsId: shipmentId1,
        containersId: containerId1,
        vehicleNo: "SGH5643R",
        sealNo: "GHT12345",
        vgm: "HR6565"
      },
      {
        shipmentsId: shipmentId1,
        containersId: containerId2,
        vehicleNo: "STH5776R",
        sealNo: "GYR55667",
        vgm: "YT7656"
      },
      {
        shipmentsId: shipmentId2,
        containersId: containerId3,
        vehicleNo: "SRE7878T",
        sealNo: "GYQ17654",
        vgm: "YQ8978"
      }
    ],
    cargoes: [
      {
        containersId: containerId3,
        cargoName: "raw meat",
        palletQuantity: "1",
        weight: "200",
        unNo: "FR123"
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
                                <FieldArray
                                  name="containers"
                                  render={({ remove, push }) => (
                                    <div className="headOfFieldArray">
                                      <Typography variant="h6" className={classes.title}>
                                        Containers
                                        <IconButton
                                          className= {classes.iconButton}
                                          onClick={() => push({ shipmentsId: values.shipments[index].shipmentsId, containersId: generateId(), vehicleNo: "", sealNo: "", vgm: "" })}>
                                          <AddBox/>
                                        </IconButton>
                                      </Typography>
                                      <div>
                                        {values.containers.length > 0 &&
                                          values.containers.map((container, i) => (
                                            <div key={i}>
                                              {(() => {
                                                if (values.shipments[index].shipmentsId === values.containers[i].shipmentsId) {
                                                  return (
                                                    <div>
                                                      <Typography variant="body1">
                                                        <strong>Container </strong>
                                                      </Typography>
                                                      <Grid container justify = "center">
                                                        <Grid item xs={4}>
                                                          <Field
                                                            component={TextField}
                                                            className={classes.textField}
                                                            name={`containers.${i}.vehicleNo`}
                                                            label="Vehicle Number"
                                                            fullWidth/>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                          <Field
                                                            component={TextField}
                                                            name={`containers.${i}.sealNo`}
                                                            label="Seal No"
                                                            className={classes.textField}
                                                            fullWidth/>
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                          <Field
                                                            component={TextField}
                                                            name={`containers.${i}.vgm`}
                                                            label="VGM"
                                                            className={classes.textField}
                                                            fullWidth/>
                                                        </Grid>
                                                        <Grid item xs={1}>
                                                          <div>
                                                            <IconButton
                                                              className= {classes.iconButton}
                                                              onClick={() => remove(i)}>
                                                              <DeleteBox/>
                                                            </IconButton>
                                                          </div>
                                                        </Grid>
                                                      </Grid>
                                                      <div className={classes.nesting}>
                                                        <FieldArray
                                                          name="cargoes"
                                                          render={({ remove, push }) => (
                                                            <div className="headOfFieldArray">
                                                              <Typography variant="h6" className={classes.title}>
                                                                Cargoes
                                                                <IconButton
                                                                  className= {classes.iconButton}
                                                                  onClick={() => push({ containersId: values.containers[i].containersId, cargoName: "", palletQuantity: "", weight: "", unNo: "" })}>
                                                                  <AddBox/>
                                                                </IconButton>
                                                              </Typography>
                                                              <div>
                                                                {values.cargoes.length > 0 &&
                                                                  values.cargoes.map((cargo, v) => (
                                                                    <div key={i}>
                                                                      {(() => {
                                                                        if (values.containers[i].containersId === values.cargoes[v].containersId) {
                                                                          return (
                                                                            <div>
                                                                              <Typography variant="body1">
                                                                                <strong>Cargo</strong>
                                                                              </Typography>
                                                                              <Grid container justify = "center">
                                                                                <Grid item xs={3}>
                                                                                  <Field
                                                                                    component={TextField}
                                                                                    name={`cargoes.${v}.cargoName`}
                                                                                    label="Cargo Name"
                                                                                    className={classes.textField}
                                                                                    fullWidth />
                                                                                </Grid>
                                                                                <Grid item xs={3}>
                                                                                  <Field
                                                                                    component={TextField}
                                                                                    name={`cargoes.${v}.palletQuantity`}
                                                                                    label="Pallet Quantity"
                                                                                    className={classes.textField}
                                                                                    fullWidth />
                                                                                </Grid>
                                                                                <Grid item xs={3}>
                                                                                  <Field
                                                                                    component={TextField}
                                                                                    name={`cargoes.${v}.weight`}
                                                                                    label="Weight"
                                                                                    id="weight"
                                                                                    type="number"
                                                                                    className={classes.textField}
                                                                                    fullWidth
                                                                                    InputProps={{
                                                                                      endAdornment: <InputAdornment position="end" style={{ width: "30px"}}>Kg</InputAdornment>,
                                                                                      inputProps: { min: 1 }
                                                                                    }}
                                                                                  />
                                                                                </Grid>
                                                                                <Grid item xs={2}>
                                                                                  <Field
                                                                                    component={TextField}
                                                                                    name={`cargoes.${v}.unNo`}
                                                                                    label="UN No"
                                                                                    className={classes.textField}
                                                                                    fullWidth
                                                                                  />
                                                                                </Grid>
                                                                                <Grid item xs={1}>
                                                                                  <div>
                                                                                    <IconButton
                                                                                      className= {classes.iconButton}
                                                                                      onClick={() => remove(v)}>
                                                                                      <DeleteBox/>
                                                                                    </IconButton>
                                                                                  </div>
                                                                                </Grid>
                                                                              </Grid>
                                                                            </div>
                                                                          )
                                                                        }
                                                                      })()}
                                                                    </div>
                                                                ))}
                                                              </div>
                                                            </div>
                                                          )}
                                                        />
                                                      </div>
                                                    </div>
                                                  )
                                                }
                                              })()}
                                            </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                />
                              </div>
                            </Card>
                            {
                              //Uncomment the statement below to see how the form submission will look like
                              //<pre>{JSON.stringify(values, null, 2)}</pre>
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
    </Grid>
  );
}
