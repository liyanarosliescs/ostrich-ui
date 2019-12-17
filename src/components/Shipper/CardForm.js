import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";
import uuid from 'uuid';

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

  function generateId() {
    return uuid.v4();
  }

  const initialId = generateId()

  const initialValues = {
    shipments: [
      {
        shipmentsId: initialId,
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
        containersId: initialId,
        vehicleNo: "",
        sealNo: "",
        vgm: ""
      }
    ],
    cargoes: [
      {
        cargoesId: initialId,
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
          </Form>
        );
      }}
    </Formik>
  );
}
