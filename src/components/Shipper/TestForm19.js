import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components/TextField'
import { Switch } from 'material-ui-formik-components/Switch'

export default function TestForm19() {
  return(
    <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: '',
            gender: false,
          }}
          onSubmit={values => {
            alert(`Username: ${values.username}\nGender: ${values.gender}`)
          }}
          render={props => (
            <Form>
              <Field name="username" label="Username" component={TextField} />
              <Field
                required
                name="gender"
                label="Gender"
                component={Switch}
              />
              <button type="submit" disabled={!props.dirty}>
                Submit
              </button>
            </Form>
          )}
        />
      </div>

  );
}
