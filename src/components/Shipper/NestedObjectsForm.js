import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function NestedObjectsForm() {
  const initialValues = {
    shipments: [
      {
        shipmentsId: "id1",
        shipmentsType: "type1"
      },
      {
        shipmentsId: "id2",
        shipmentsType: "type2"
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
