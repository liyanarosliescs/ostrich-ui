import React from "react";
import { useField, useFormikContext } from "formik";
import Select from 'react-select';

export const ShipmentSelect = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const shipmentsType = [
    { value: 'single', label: 'Single' },
    { value: 'roundLive', label: 'Round(Live)' },
    { value: 'roundDropAndHook', label: 'Round(Drop and Hook)' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <Select
      {...field}
      {...props}
      placeholder="Select Shipment Type"
      options = {shipmentsType}
      value={field.value.value}
      onChange={val => {
        setFieldValue(field.name, val.value);
      }}
    />
  );
};

export default ShipmentSelect;
