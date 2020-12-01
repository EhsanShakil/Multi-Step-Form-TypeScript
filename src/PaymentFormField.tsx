import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";
import "./App.css";
interface FormFieldProps {
  label: string;
  name: string;
  type: string;
}

const PaymentFormField: React.FC<FormFieldProps> = ({ label, name, type }) => {
  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      helperText={<ErrorMessage name={name} />}
      type={type}
    />
  );
};

export default PaymentFormField;
