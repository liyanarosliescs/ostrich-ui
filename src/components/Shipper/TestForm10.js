import React from 'react';
import { withFormik, Form, Field } from 'formik'

const App = ({
  values,
  handleSubmit,
  }) => (
    <Form>
      <Field type="email" name="email" placeholder="Email"/>
      <Field type="password" name="password" placeholder="Password"/>
      <button>Submit</button>
    </Form>
  )

const TestForm10 = withFormik({
  mapPropsToValues({ email, password}) {
    return {
      email: email || '',
      password: password || '',
      }
    },
    handleSubmit(values){
    console.log(values)
    }
})(App)

export default TestForm10;
