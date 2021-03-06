import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";
import "./App.css";
interface FormFieldProps {
  label: string;
  name: string;
}

const AddressFormField: React.FC<FormFieldProps> = ({ label, name }) => {
  return (
      <Field
        as={TextField}
        name={name}
        label={label}
        helperText={<ErrorMessage name={name} />}
      />
  );
};

export default AddressFormField;
