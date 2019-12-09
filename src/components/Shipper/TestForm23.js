import React from 'react';
import FormA from "./FormA";
import FormB from "./FormB";

export default function TestForm23() {

  const [formValues, setFormValues] = React.useState({
    formA: {},
    formB: {}
  });

  function handleFormAChange(values) {
    setFormValues({
      ...formValues,
      formA: values
    });
  }

  function handleFormBChange(values) {
    setFormValues({
      ...formValues,
      formB: values
    });
  }

  function handleSubmit() {
    alert(JSON.stringify(formValues, null, 2));
  }

  return (
    <div>
      <h1>Multiple Form in one submition</h1>
      <FormA onChange={handleFormAChange} />
      <FormB onChange={handleFormBChange} />

      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
