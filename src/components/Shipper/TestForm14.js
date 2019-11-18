import React from 'react';
import { withFormik } from 'formik';
import { MoreResources } from '../Common/FormikHelper';
import MySelect from '../Common/MySelect';

const formikEnhancer = withFormik({
  mapPropsToValues: props => ({
    email: '',
    topics: [],
  })
});

const MyForm = props => {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: 'block' }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email &&
        touched.email && (
          <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.email}</div>
        )}
      <MySelect
        value={values.topics}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.topics}
        touched={touched.topics}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <pre>{JSON.stringify(values, null, 2)}</pre>
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

const TestForm14 = () => (
  <div className="app">
    <h1>
      Using <a href="https://github.com/jaredpalmer/formik">Formik</a> with 3rd-party
      input components
    </h1>
    <p>
      This example shows to use Formik with a 3rd-party input component. The trick is to
      use Formik's <code>setFieldValue</code> prop and a custom component class whenever
      you need a custom change handler.{' '}
    </p>
    <p>
      To show this off, below is a Formik-enhanced form. It has a "vanilla" Formik input
      for <code>email</code> and a custom select component for <code>topics</code> that
      uses Jed Watson's{' '}
      <a href="https://github.com/JedWatson/react-select">react-select</a> library.
    </p>
    <MyEnhancedForm/>
    <MoreResources />
  </div>
);

export default TestForm14;
