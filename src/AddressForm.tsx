import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import AddressFormField from "./AddressFormField";

interface FormValues {
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  zip_code: string;
}

const initialValues: FormValues = {
  first_name: "",
  last_name: "",
  address: '',
  city: '',
  zip_code: '',
};

const nameSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  zip_code: Yup.number().required(),
});

const AddressForm = ({submit,prevValues, setFormValues}: any) => {
  const onSubmit = (values: FormValues): void => {
    submit(1)
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
              <AddressFormField label="First Name" name="first_name" />
              <AddressFormField label="Last Name" name="last_name"/>
              <AddressFormField label="Address" name="address"/>
              <AddressFormField label="City" name="city" />
              <AddressFormField label="Zip Code" name="zip_code"/>
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

export default AddressForm;
