import React from "react";
import MuiCheckbox from "@material-ui/core/Checkbox";
import { useField } from "formik";

export const Checkbox = ({ ...props }) => {
  const [field] = useField(props.name);

  return (
    <MuiCheckbox {...field} checked={field.value} />
  );
};
