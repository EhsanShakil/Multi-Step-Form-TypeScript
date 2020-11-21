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
  const onSubmit = (values: FormValues) => {
    console.log(values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
          <label>Name</label>
          <Field  as='input' />
          <ErrorMessage name='name'/>
        </div>
      </Form>
    </Formik>
  );
}

export default App;
