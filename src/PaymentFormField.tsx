import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";

interface FormFieldProps {
  label: string;
  name: string;
}

const PaymentFormField: React.FC<FormFieldProps> = ({ label, name }) => {
  return (
      <Field
        as={TextField}
        name={name}
        label={label}
        helperText={<ErrorMessage name={name} />}
      />
  );
};

export default PaymentFormField;
