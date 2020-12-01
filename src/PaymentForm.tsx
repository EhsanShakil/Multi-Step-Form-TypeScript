import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import PaymentFormField from "./PaymentFormField";

interface FormValues {
  Card_Number: string;
  CVV: string;
  Expiry_Date: string;
}

const initialValues:FormValues = {
  Card_Number: '',
  CVV: '',
  Expiry_Date: '',
};

const nameSchema = Yup.object().shape({
  Card_Number: Yup.number().required(),
  CVV: Yup.number().required(),
  Expiry_Date: Yup.date().required(),
});

const PaymentForm = ({submit,prevValues, setFormValues}: any) => {
  const onSubmit = (values: FormValues): void => {
    submit(2)
    setFormValues({ ...values, ...prevValues })
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
              <PaymentFormField type='number' label="Card Number" name="Card_Number" />
              <PaymentFormField type='number' label="CVV" name="CVV"/>
              <PaymentFormField type='date' label="" name="Expiry_Date"/>
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
