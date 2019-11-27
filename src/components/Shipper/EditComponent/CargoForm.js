import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3f51b5"
  },
  icon: {
    width: 40,
    height: 40,
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

export default function CargoForm() {
  const classes = useStyles();

  const initialValues = {
    cargoes: [
      {
        cargoName: "",
        palletQuantity: "",
        weight: "",
        unNo: ""
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
              name="cargoes"
              render={({ remove, push }) => (
                <div className="headOfFieldArray">
                  <Typography variant="h6" className={classes.title}>
                    Cargo
                    <IconButton
                      className= {classes.iconButton}
                      onClick={() => push({ cargoName: "", palletQuantity: "", weight: "", unNo: "" })}>
                      <AddBox/>
                    </IconButton>
                  </Typography>
                  {values.cargoes.length > 0 &&
                    values.cargoes.map((cargo, index) => (
                      <div>
                        <Grid container justify = "center">
                          <Grid item xs={6}>
                            <Field
                              component={TextField}
                              name={`cargoes.${index}.cargoName`}
                              label="Cargo Name"
                              className={classes.textField}
                              fullWidth />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              component={TextField}
                              name={`cargoes.${index}.palletQuantity`}
                              label="Pallet Quantity"
                              className={classes.textField}
                              fullWidth />
                          </Grid>
                        </Grid>
                        <Grid container justify = "center">
                          <Grid item xs={6}>
                            <Field
                              component={TextField}
                              name={`cargoes.${index}.weight`}
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
                          <Grid item xs={6}>
                            <Field
                              component={TextField}
                              name={`cargoes.${index}.unNo`}
                              label="UN No"
                              className={classes.textField}
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <div>
                          <IconButton
                            className= {classes.iconButton}
                            onClick={() => remove(index)}>
                            <DeleteBox/>
                          </IconButton>
                        </div>
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
