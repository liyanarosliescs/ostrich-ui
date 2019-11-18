import React from "react";
import { Formik } from "formik";
import DatePicker from "../Common/DatePicker";

const TestForm12 = () => (
  <div className="app">
    <Formik
      initialValues={{ date: "" }}
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
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <DatePicker
              name="date"
              value={values.date}
              onChange={setFieldValue}
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


          </form>
        );
      }}
    </Formik>
  </div>
);

export default TestForm12;
