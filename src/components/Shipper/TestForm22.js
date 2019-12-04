import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";
import CustomDatePicker from '../Common/CustomDatePicker';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  }
}));

export default function TestForm22() {
  const classes = useStyles();

  const initialValues = {
    email: ["test1@gmail.com", "test2@gmail.com"],
    social: {
      facebook: ["fb1@gmail.com", "fb2@gmail.com"]
    },
    contact: [""]
  };

  return (
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
              <Field
                placeholder="Enter your email"
                type="text"
                name={`email`}
              />
              <br/>
              <FieldArray
                name="email"
                render={arrayHelpers => (
                  <div>
                    {values.email.map((e, index) => (
                      <div key={index}>
                        <Field name={`email[${index}]`} />
                        <button type="button" onClick={() => arrayHelpers.remove(index)}>
                          -
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push('')}
                    >
                    +
                    </button>
                  </div>
                )}
              />
              <br/>
              <Field
                name="social.facebook"
                placeholder="Facebook username"
                type="text"
                />
                <br/>
                <FieldArray
                  name="social.facebook"
                  render={arrayHelpers => (
                    <div>
                      {values.social.facebook.map((fb, index) => (
                        <div key={index}>
                          <Field name={`social.facebook[${index}]`} />
                          <button type="button" onClick={() => arrayHelpers.remove(index)}>
                            -
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push('')}
                      >
                      +
                      </button>
                    </div>
                  )}
                />
              <br />
              <FieldArray
                name="contact"
                render={arrayHelpers => (
                  <div>
                    {values.contact.map((c, index) => (
                      <div key={index}>
                        <Field name={`contact[${index}]`} />
                        <button type="button" onClick={() => arrayHelpers.remove(index)}>
                          -
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push('')}
                    >
                    +
                    </button>
                  </div>
                )}
              />
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          );
        }}
      </Formik>
  );
}
