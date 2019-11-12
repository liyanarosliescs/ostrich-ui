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

export default function TestForm7() {
  const classes = useStyles();

  const initialValues = {
    friends: [
      {
        name: "Klaus",
        email: "klaus@formik.com"
      },
      {
        name: "Hans",
        email: "hans@formik.com"
      }
    ]
  };

  return (
    <div>
      <h1>Invite friends</h1>
      <p>Check the console to see the formik state.</p>
      <p>Reproduction</p>
      <ol>
        <li>Remove the first value of the form</li>
        <li>
          Check the <code>touched</code> state in the console log
        </li>
        <li>
          It indicates <code>touched.friends: []</code> but one value was actually
          touched
        </li>
      </ol>
      <Formik
        initialValues={initialValues}
        validate={() => ({ foo: true })}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={({ values, errors, touched, handleReset }) => {
          console.group("formik");
          console.log("touched", touched);
          console.log("values", values);
          console.groupEnd("formik");
          return (
            <Form>
              <FieldArray
                name="friends"
                render={({ insert, remove, push }) => (
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
                            {errors.friends &&
                              errors.friends[index] &&
                              errors.friends[index].name &&
                              touched.friends &&
                              touched.friends[index].name && (
                                <div className="field-error">
                                  {errors.friends[index].name}
                                </div>
                              )}
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
                            {errors.friends &&
                              errors.friends[index] &&
                              errors.friends[index].email &&
                              touched.friends &&
                              touched.friends[index].email && (
                                <div className="field-error">
                                  {errors.friends[index].email}
                                </div>
                              )}
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
                      onClick={() => push({ name: "", email: "" })}
                    >
                      Add Friend
                    </button>
                  </div>
                )}
              />
              <br />
              <button
                onClick={event => {
                  event.preventDefault();
                  handleReset();
                }}
              >
                Reset
              </button>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      />
    </div>
  );
}
