import { withFormik } from "formik";
import React from "react";

function FormB(props) {
  const { values, handleChange, onChange } = props;

  React.useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [values]);

  return (
    <div className={"form"}>
      <h3>Form B</h3>
      <label>Name </label>
      <input name="email" value={values.email} onChange={handleChange} />
      {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      email: ""
    };
  }
})(FormB);
