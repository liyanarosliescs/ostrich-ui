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
    <div>
      <h1>Social Profiles</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          // same shape as initial values
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
          console.log(values);
        }}>
        <Form>
          <Field name="shipments[0].shipmentsId" />
          <Field name="shipments[0].shipmentsType" />
          <Field name="shipments[1].shipmentsId" />
          <Field name="shipments[1].shipmentsType" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
