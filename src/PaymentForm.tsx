import React from "react";
import "./App.css";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormField from "./PaymentFormField";

interface FormValues {
  Card_Number: number;
  CVV: number;
  Expiry_Date: number;
}

const initialValues: FormValues = {
  Card_Number: '',
  CVV: '',
  Expiry_Date: ""
};

const nameSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  zip_code: Yup.number().required(),
});

const PaymentForm = ({submit}: any) => {
  const onSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
          submit(2);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={nameSchema}
    >
      {({ dirty, isValid }) => {
        return (
          <Form>
            <div className="form"> 
              <FormField label="First Name" name="first_name" />
              <FormField label="Last Name" name="last_name"/>
              <FormField label="Address" name="address"/>
              <FormField label="City" name="city" />
              <FormField label="Zip Code" name="zip_code"/>
              <button disabled={!dirty || !isValid} type="submit">
                Next
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PaymentForm;
