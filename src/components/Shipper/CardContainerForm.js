import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import AddBox from "@material-ui/icons/AddBox";
import DeleteBox from "@material-ui/icons/IndeterminateCheckBox";
import { Formik, Field, Form, FieldArray } from "formik";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3)
  },
  card: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
  select: {
    width: 300
  },
  subtitle: {
     textAlign: 'center'
  }
}));

export default function CardContainerForm({ shipmentId }) {
  const classes = useStyles();

  const initialValues = {
    containers: [
      {
        shipmentsId: shipmentId,
        vehicleNo: "",
        sealNo: "",
        vgm: ""
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
            <Card className={classes.parentCard}>
              <FieldArray
                name="containers"
                render={({ remove, push }) => (
                  <div className="headOfFieldArray">
                    <CardContent className={classes.parentCardContent}>
                      Container
                      <IconButton
                        className= {classes.parentCardContent}
                        onClick={() => push({ vehicleNo: "", sealNo: "", vgm: "" })}>
                        <AddBox/>
                      </IconButton>
                      {values.containers.length > 0 &&
                        values.containers.map((container, index) => (
                          <div key={index}>
                            <Card className={classes.card}>
                              <CardContent>
                                <div>
                                  Container A <br/>
                                  <div>
                                    <IconButton
                                      onClick={() => remove(index)}>
                                      <DeleteBox/>
                                    </IconButton>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                      ))}
                    </CardContent>
                  </div>
                )}
              />
            </Card>
            {
              //Uncomment the statement below to see how the form submission will look like
              <pre>{JSON.stringify(values, null, 2)}</pre>
            }
          </Form>
        );
      }}
    </Formik>
  );
}
