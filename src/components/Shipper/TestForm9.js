import React from "react";
import { Formik } from "formik";
import { Checkbox } from "../Common/Checkbox";

export default function TestForm9() {
  return (
    <Formik
      initialValues={{ isHappy: false }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}
      render={props => (
        <form>
          <Checkbox name="isHappy" /> isHappy
          <br />
          <p>isHappy: {props.values.isHappy ? "true" : "false"}</p>
        </form>
      )}
    />
  );
}
