import React from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {TextField} from '@material-ui/core'

interface FormValues {
  name: string
}

const initialValues: FormValues = {
  name: ''
}

const nameSchema = Yup.object().shape({
  name: Yup.string().required()
})

const App = () => {
  const onSubmit = (values: FormValues): void => {
    alert(values.name)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={nameSchema}>
      {({dirty, isValid}) => {
        return (
          <Form>
        <div>
          {/* <label>Name</label> */}
              <Field as={TextField} variant='standard' label='Name' name='name'/>
          <ErrorMessage name='name'/>
            </div>
            <button disabled={!dirty || !isValid} type="submit">Sign Up</button>
      </Form>)}}
    </Formik>
  );
}

export default App;
