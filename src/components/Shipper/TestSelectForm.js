import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components/TextField'
import { Select } from 'material-ui-formik-components/Select'

function TestSelectForm () {
    return (
      <div>
        <h1>Register</h1>
        <Formik
          initialValues={{
            username: '',
            gender: 'Male',
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
                options={[
                  { value: 'Male', label: 'Male' },
                  { value: 'Female', label: 'Female' },
                  { value: 'Other', label: 'Other' },
                ]}
                component={Select}
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

export default TestSelectForm;
