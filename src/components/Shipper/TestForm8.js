import React from "react";
import { render } from "react-dom";
import { Formik, Field } from "formik";

function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label>
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  value => value !== props.value
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          {props.value}
        </label>
      )}
    </Field>
  );
}

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
            <Checkbox name="roles" value="admin" />
            <Checkbox name="roles" value="customer" />
          </div>
          <button onClick={formik.submitForm}>submit</button>
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </div>
      )}
    </Formik>
  );
}
