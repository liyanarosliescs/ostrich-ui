import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';
import IconButton from '@material-ui/core/IconButton';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";
import CargoForm from './CargoForm';

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  nestedContainer: {
    marginLeft: theme.spacing(5)
  }
}));

export default function ContainerForm() {
  const classes = useStyles();

  const initialValues = {
    containers: [
      {
        vehicleNo: "SGH5643R",
        sealNo: "GHT12345",
        vgm: "HR6565"
      }
    ]
  };

  return(
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
              name="containers"
              render={({ remove, push }) => (
                <div className="headOfFieldArray" className={classes.nestedContainer}>
                  <Typography variant="h6" className={classes.title}>
                    Containers
                    <IconButton
                      className= {classes.iconButton}
                      onClick={() => push({ vehicleNo: "", sealNo: "", vgm: "" })}>
                      <AddBox/>
                    </IconButton>
                  </Typography>
                    {values.containers.length > 0 &&
                      values.containers.map((container, index) => (
                        <div>
                          <Typography variant="body1">
                            <strong>Container {index+1}</strong>
                          </Typography>
                          <Grid container justify = "center">
                            <Grid item xs={4}>
                              <Field
                                component={TextField}
                                name={`containers.${index}.vehicleNo`}
                                label="Vehicle Number"
                                className={classes.textField}
                                fullWidth/>
                            </Grid>
                            <Grid item xs={4}>
                              <Field
                                component={TextField}
                                name={`containers.${index}.sealNo`}
                                label="Seal No"
                                className={classes.textField}
                                fullWidth/>
                            </Grid>
                            <Grid item xs={3}>
                              <Field
                                component={TextField}
                                name={`containers.${index}.vgm`}
                                label="VGM"
                                className={classes.textField}
                                fullWidth/>
                            </Grid>
                            <Grid item xs={1}>
                              <div>
                                <IconButton
                                  className= {classes.iconButton}
                                  onClick={() => remove(index)}>
                                  <DeleteBox/>
                                </IconButton>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid container justify = "center">
                            <Grid item xs={12}>
                              <div>
                                <CargoForm/>
                                <br/>
                              </div>
                            </Grid>
                          </Grid>
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
  );
}
