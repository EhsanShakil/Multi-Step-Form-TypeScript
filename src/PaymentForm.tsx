import React from "react";
import "./App.css";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import PaymentFormField from "./PaymentFormField";

interface FormValues {
  Card_Number: string;
  CVV: string;
  Expiry_Date: string;
}

const initialValues: FormValues = {
  Card_Number: '',
  CVV: '',
  Expiry_Date: '',
};

const nameSchema = Yup.object().shape({
  Card_Number: Yup.number().required(),
  CVV: Yup.number().required(),
  Expiry_Date: Yup.date().required(),
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
              <PaymentFormField label="Card Number" name="Card_Number" />
              <PaymentFormField label="CVV" name="CVV"/>
              <PaymentFormField label="Expiry Date" name="Expiry_Date"/>
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
