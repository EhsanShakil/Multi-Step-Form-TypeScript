import React from "react";
import "./App.css";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormField from "./FormField";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
}

const initialValues: FormValues = {
  first_name: "",
  last_name: "",
  email: "",
};

const nameSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string().required(),
});

const App = () => {
  const onSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
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
              <FormField label="Email" name="email"/>
              <button disabled={!dirty || !isValid} type="submit">
                Sign Up
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default App;
