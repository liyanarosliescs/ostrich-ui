import React, {useState} from 'react';
import {render} from 'react-dom';
import {Formik, Field, Form} from 'formik';
import {FormControlLabel, Switch as MaterialSwitch} from '@material-ui/core';
import {Switch, TextField} from 'formik-material-ui';

export default function TestForm18() {

  const [text, setText] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleInputChange = event => {
    setText(event.target.value);
    console.log('value', event.target.value);
  };

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log('toggle State: ', toggle);
  };

  return (

    <Formik
        initialValues={{
          withFormikMaterialUI: 'initial value set by formik',
          withFormik: 'just with formik',
          rememberMe: true, // We can set state here
        }}
        render={({values, setFieldValue}) => (
          <Form>
            {/* We _CAN_ get state from formik here */}
            <h1>Switch demo:</h1>
            <FormControlLabel
              control={
                <Field
                  label="Remember Me"
                  name="rememberMe"
                  component={Switch}
                  onChange={handleToggle}
                  checked={toggle} // can't set/get state here
                  // value={toggle} // or here
                />
              }
              label="Remember Me"
            />
            <MaterialSwitch onChange={handleToggle} checked={toggle} />
            <MaterialSwitch onChange={handleToggle} checked={toggle} />
            <br />
            Formik MaterialUI values: {values['rememberMe'] ? 'on' : 'off'}
            <br />
            Formik switch value: {toggle ? 'on' : 'off'}
            <p />
            <h1>Input field demo:</h1>
            <Field
              name="withFormikMaterialUI"
              type="withFormikMaterialUI"
              label="withFormikMaterialUI"
              component={TextField}
              value={text}
              onChange={event => handleInputChange(event)}
            />
            <p />
            <Field
              name="withFormik"
              type="withFormik"
              label="withFormik"
              value={text}
              onChange={event => handleInputChange(event)}
            />
            <p />
            Material-ui Formik field: {values['withFormikMaterialUI']}
            <p />
            Formik text state values: {text}
          </Form>
        )}
      />

  );

}
