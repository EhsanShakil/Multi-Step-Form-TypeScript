import React from "react";
import "./App.css";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormField from "./FormField";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string
}

const initialValues: FormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: ''
};

const nameSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),

});

const App = ({submit}: any) => {
  const onSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
          submit(1);
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
              <FormField label="Password" name="password"/>
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
