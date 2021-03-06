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
    contact: [""],
    shipments: [
      {
        shipmentType: "Single",
        transportType: "20GP",
        containers: [
          {
            vehicleNo: "SM123",
            sealNo: "H3456"
          },
          {
            vehicleNo: "SM223",
            sealNo: "H3556"
          }
        ]
      },
      {
        shipmentType: "Round(Live)",
        transportType: "40GP",
        containers: [
          {
            vehicleNo: "b",
            sealNo: "b"
          }
        ]
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
              <br/>
              <FieldArray
                name="shipments"
                id="shipments"
                render={arrayHelpers => (
                  <div>
                    {values.shipments.length > 0 &&
                      values.shipments.map((shipment, index) => (
                      <div key={index}>
                        {console.log("index", index)}
                        <FieldArray
                          id={`shipments.${index}.containers`}
                          name={`shipments.${index}.containers`}
                          render={arrayHelpers2 => (
                            <div>
                              {values.shipments[index].containers.map((s, i) => (
                                <div key={i}>
                                  {console.log("i", i)}
                                  <Field
                                    name={`shipments[${index}].shipmentType`}
                                    placeholder="Shipment Type"
                                    type="text"
                                  />
                                    <Field
                                    name={`shipments[${index}].transportType`}
                                    placeholder="Transport Type"
                                    type="text"
                                  />
                                  <Field
                                    name={`shipments[${i}].containers[${i}].vehicleNo`}
                                    placeholder="Vehicle Number"
                                    type="text"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        />
                        {/*<Field
                          name={`shipments[${index}].containers[${index}].vehicleNo`}
                          placeholder="Vehicle Number"
                          type="text"
                        />
                        <FieldArray
                          id={`shipments.${index}.containers`}
                          name={`shipments.${index}.containers`}
                          render={arrayHelpers2 => (
                            <div>
                              {values.shipments[index].containers.length > 0 &&
                                values.shipments[index].containers.map((container, index) => (
                                <div key={index}>
                                  {console.log("value", values.shipments[index].containers)}
                                  <Field
                                    name={`shipments[${index}].containers[${index}].vehicleNo`}
                                    placeholder="Vehicle Number"
                                    type="text"
                                  />
                                  <Field
                                    name={`shipments[${index}].containers[${index}].sealNo`}
                                    placeholder="Seal Number"
                                    type="text"
                                  />
                                  <button type="button" onClick={() => arrayHelpers2.remove(index)}>
                                    -
                                  </button>
                                </div>
                              ))}
                              <button
                                type="button"
                                onClick={() => arrayHelpers2.push('')}
                              >
                              +
                              </button>
                            </div>
                          )}
                        />
                      */}
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
              {
                /*
                <Field
                  name="shipments[0].containers[0].vehicleNo"
                  placeholder="Shipment Type"
                  type="text"
                />
                */
              }
              <br/>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          );
        }}
      </Formik>
  );
}
