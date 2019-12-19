import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
  textField: {
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  nestedCargo: {
    marginLeft: theme.spacing(5)
  }
}));

export default function CargoForm() {
  const classes = useStyles();

  const initialValues = {
    cargoes: [
      {
        cargoName: "raw meat",
        palletQuantity: "1",
        weight: "200",
        unNo: "FR123"
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
                <div className="headOfFieldArray" className={classes.nestedCargo}>
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
                        <Typography variant="body1">
                          <strong>Cargo {index+1}</strong>
                        </Typography>
                        <Grid container justify = "center">
                          <Grid item xs={3}>
                            <Field
                              component={TextField}
                              name={`cargoes.${index}.cargoName`}
                              label="Cargo Name"
                              className={classes.textField}
                              fullWidth />
                          </Grid>
                          <Grid item xs={3}>
                            <Field
                              component={TextField}
                              name={`cargoes.${index}.palletQuantity`}
                              label="Pallet Quantity"
                              className={classes.textField}
                              fullWidth />
                          </Grid>
                          <Grid item xs={3}>
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
                          <Grid item xs={2}>
                            <Field
                              component={TextField}
                              name={`cargoes.${index}.unNo`}
                              label="UN No"
                              className={classes.textField}
                              fullWidth
                            />
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
