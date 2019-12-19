import React from 'react';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'uuid';

const useStyles = makeStyles(theme => ({
  nesting: {
    marginLeft: theme.spacing(5),
  }
}));

export default function NestedObjectsForm() {
  const classes = useStyles();

  function generateId() {
    return uuid.v4();
  }

  const shipmentId1 = generateId()
  const shipmentId2 = generateId()
  const containerId1 = generateId()

  const initialValues = {
    shipments: [
      {
        shipmentsId: shipmentId1,
        shipmentsType: "shipmenttype1",
      },
      {
        shipmentsId: shipmentId2,
        shipmentsType: "shipmenttype2"
      }
    ],
    containers: [
      {
        shipmentsId: shipmentId2,
        containersId: containerId1,
        vehicleNo: "vehicle11",
        sealNo: "seal11",
      }
    ],
    cargo: [
      {
          containersId: containerId1,
          cargoName: "cargoName2b1",
          palletQuantity: "palletQuantity2b2",
      }
    ]
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      >
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
            <div>
              <h1>Shipment Profiles</h1>
              {values.shipments.length > 0 &&
                values.shipments.map((shipment, index) => (
                  <div key={index}>
                    <Field
                      name={`shipments.${index}.shipmentsId`} />
                    <Field
                      name={`shipments.${index}.shipmentsType`} />
                      {values.containers.length > 0 &&
                        values.containers.map((container, i) => (
                          <div key={i} className={classes.nesting}>
                          {console.log("shipment", values.shipments[index].shipmentsId)}
                          {console.log("container", values.containers[i].shipmentsId)}
                            <div>
                            {(() => {
                              if (values.shipments[index].shipmentsId === values.containers[i].shipmentsId) {
                                return (
                                  <div>
                                    <Field
                                      name={`containers.${i}.vehicleNo`} />
                                    <Field
                                      name={`containers.${i}.sealNo`} />
                                  </div>
                                  )
                                } else {
                                  return (
                                    <div></div>
                                  )
                                }
                              })
                            ()}
                            </div>
                          </div>
                      ))}
                  </div>
              ))}
              <button type="submit">Submit</button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
}
