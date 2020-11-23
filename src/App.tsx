import React from 'react';
import './App.css';
import {Formik, Form, Field, ErrorMessage } from 'formik'

interface FormValues {
  name: string
}

const initialValues: FormValues = {
  name: ''
}

const App = () => {
  const onSubmit = (values: FormValues): void => {
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props) => {
        return (
          <Form>
        <div>
          <label>Name</label>
          <Field  as='input' name='name'/>
          <ErrorMessage name='name'/>
        </div>
      </Form>)}}
    </Formik>
  );
}

export default App;
