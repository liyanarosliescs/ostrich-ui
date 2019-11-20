import React from "react";
import MuiSwitch from "@material-ui/core/Switch";
import { useField } from "formik";

export const Switch = ({ ...props }) => {
  const [field] = useField(props.name);

  return (
    <MuiSwitch
      {...field}
      checked={field.value}
      color="primary" />
  );
};
