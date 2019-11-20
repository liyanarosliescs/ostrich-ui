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

export default function TestForm20() {
  const classes = useStyles();

  const initialValues = {
    friends: [
      {
        name: "",
        email: "",
        customDate: ""
      }
    ]
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
              <FieldArray
                name="friends"
                render={({ remove, push }) => (
                  <div>
                    {values.friends.length > 0 &&
                      values.friends.map((friend, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`friends.${index}.name`}>Name</label>
                            <Field
                              name={`friends.${index}.name`}
                              placeholder="Jane Doe"
                              type="text"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`friends.${index}.email`}>
                              Email
                            </label>
                            <Field
                              name={`friends.${index}.email`}
                              placeholder="jane@acme.com"
                              type="email"
                            />
                          </div>
                          <div className="col">
                            <CustomDatePicker
                              name={`friends.${index}.customDate`}
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push({ name: "", email: "", customDate: "" })}
                    >
                      Add Friend
                    </button>
                  </div>
                )}
              />
              <br />
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          );
        }}
      </Formik>
  );
}
