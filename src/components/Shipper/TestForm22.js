import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";
import ShipmentSelect from "../Common/ShipmentSelect";
import TransportSelect from "../Common/TransportSelect";
import { Checkbox } from "../Common/Checkbox";
import ContainerForm from './EditComponent/ContainerForm';

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

export default function TestForm22() {
  const classes = useStyles();

  const initialValues = {
    shipments: {
      shipmentsType: ['single', 'roundLive'],
    }
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
                      Shipment
                      <IconButton
                        className= {classes.iconButton}
                        onClick={() => push({ shipmentsType: ""   })}>
                        <AddBox/>
                      </IconButton>
                    </Typography>
                    {values.shipments.shipmentsType.length > 0 &&
                      values.shipments.shipmentsType.map((type, index) => (
                        <div className="headOfForm">
                          <Field
                            name={`shipments.shipmentsType.${index}`}
                            component={TextField}
                            disabled
                            className={classes.textField}
                            fullWidth
                          />
                          <ShipmentSelect
                            className={classes.select}
                            name={`shipments.shipmentsType.${index}`}
                          />
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
