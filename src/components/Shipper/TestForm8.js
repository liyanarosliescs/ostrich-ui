import React from "react";
import { render } from "react-dom";
import { Formik, Field } from "formik";
import CustomCheckbox from '../Common/CustomCheckbox';

export default function TestForm8() {
  return (
    <Formik
      initialValues={{
        roles: ["admin"]
      }}
      onSubmit={values => alert(JSON.stringify(values, null, 2))}
    >
      {formik => (
        <div>
          <div>
            <CustomCheckbox name="roles" value="admin" />
            <CustomCheckbox name="roles" value="customer" />
          </div>
          <button onClick={formik.submitForm}>submit</button>
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </div>
      )}
    </Formik>
  );
}
