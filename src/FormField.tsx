import React from "react";
import { Field, ErrorMessage, FormikFormProps } from "formik";
import { TextField } from "@material-ui/core";
import { Interface } from "readline";

interface FormFieldProps {
  label: string;
  name: string;
}

const FormField: React.FC<FormFieldProps> = ({label, name}) => {
  return <Field as={TextField} name={name} label={label} />;
};
export default FormField