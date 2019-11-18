import React from "react";
import { Formik } from "formik";
import MySelect from '../Common/MySelect';

const TestForm15 = () => (
  <div className="app">
    <Formik
      initialValues={{ shipmentsType: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
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
          <form onSubmit={handleSubmit}>
          <MySelect
            value={values.topics}
            onChange={setFieldValue}
            onBlur={setFieldTouched}

          />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default TestForm15;
