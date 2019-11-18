import React from 'react'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'material-ui-formik-components/TextField'
import { Select } from 'material-ui-formik-components/Select'

export default function TestForm17() {

  const shipmentsType = [
    { value: 'single', label: 'Single' },
    { value: 'roundLive', label: 'Round(Live)' },
    { value: 'roundDropAndHook', label: 'Round(Drop and Hook)' },
    { value: 'other', label: 'Other' }
  ];

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
                options={shipmentsType}
                component={Select}
              />
              <button type="submit" disabled={!props.dirty}>
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    )

}
