import { withFormik } from "formik";
import React from "react";

function FormA(props) {
  const { values, handleChange, onChange } = props;

  const initialValues = {
    shipments: [
      {
        shipmentsType: "",
        shipmentsOtherType: "",
        transportsType: "",
        noOfUnits: "",
        ratePerUnit: "",
        currency: "SGD",
        isFrost: false,
        isChiller: false,
        isCa: false,
        isDg: false,
        isOpen: false,
        isClose: false
      }
    ],
  };

  React.useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [values]);

  return (
    <div className={"form"}>
      <h3>Form A</h3>
      <label>Name </label>
      <input name="name" value={values.name} onChange={handleChange} />
      {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      name: ""
    };
  }
})(FormA);
