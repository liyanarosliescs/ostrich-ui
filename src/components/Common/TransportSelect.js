import React from "react";
import { useField, useFormikContext } from "formik";
import Select from 'react-select';

export const TransportSelect = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const transportsType = [
    { value: '20GP', label: '20GP' },
    { value: '40GP', label: '40GP' },
    { value: '45GP', label: '45GP' },
    { value: '1T', label: '1T' },
    { value: '3.5T', label: '3.5T' },
    { value: '20RF', label: '20RF' },
    { value: '40RF', label: '40RF' },
    { value: '40HC', label: '40HC' },
    { value: '53FT', label: '53FT' },
    { value: 'Flatbed', label: 'Flatbed' },
    { value: 'Rabon', label: 'Rabon' },
    { value: 'Thorton', label: 'Thorton' }
  ];

  return (
    <Select
      {...field}
      {...props}
      placeholder="Select Transport Type"
      options = {transportsType}
      value={field.value.value}
      onChange={val => {
        setFieldValue(field.name, val.value);
      }}
    />
  );
};

export default TransportSelect;
