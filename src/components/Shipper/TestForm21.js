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

export default function TestForm21() {
  const classes = useStyles();

  return (
    <div>
    <h1>Social Profiles</h1>
    <Formik
      initialValues={{
        social: {
          facebook: ['fb1', 'fb2'],
          twitter: '',
        },
        contact: {
          hr: '',
          op: '',
        },
        shipments: {
          shipmentsType: ['single', 'roundLive'],
          transportsType: ['20GP', '40GP'],
          container: {
            vehicleNo: ['SGH5643R', 'SGG5643R'],
            sealNo: 'GHT12345',
            cargoes: {
              cargoName: ['raw meat', 'raw vegetables'],
              palletQuantity: '1'
            }
          }
        }
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      <Form>
        <Field name="social.facebook[0]" />
        <Field name="social.facebook[1]" />
        <Field name="social.twitter" />
        <Field name="contact.hr" />
        <Field name="contact.op" />
        <Field name="shipments.shipmentsType[0]" />
        <Field name="shipments.shipmentsType[1]" />
        <Field name="shipments.transportsType[0]" />
        <Field name="shipments.transportsType[1]" />
        <Field name="shipments.container.vehicleNo[0]" />
        <Field name="shipments.container.vehicleNo[1]" />
        <Field name="shipments.container.sealNo" />
        <Field name="shipments.container.cargoes.cargoName[0]" />
        <Field name="shipments.container.cargoes.cargoName[1]" />
        <Field name="shipments.container.cargoes.palletQuantity" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  );
}
