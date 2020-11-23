import React from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {TextField} from '@material-ui/core'

interface FormValues {
  first_name: string,
  last_name: string,
  email: string,
}

const initialValues: FormValues = {
  first_name: '',
  last_name: '',
  email: '',
}

const nameSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string().required()
})

const App = () => {
  const onSubmit = (values: FormValues): void => {
    alert(values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={nameSchema}>
      {({dirty, isValid}) => {
        return (
          <Form>
        <div>
          {/* <label>Name</label> */}
              <Field as={TextField} variant='standard' label='First Name' name='first_name' helperText={<ErrorMessage name='first_name'/>}/>
              <Field as={TextField} variant='standard' label='Last Name' name='last_name' helperText={<ErrorMessage name='last_name'/>}/>
              <Field as={TextField} variant='standard' label='Email' name='email' helperText={<ErrorMessage name='email'/>}/>             

            </div>
            <button disabled={!dirty || !isValid} type="submit">Sign Up</button>
      </Form>)}}
    </Formik>
  );
}

export default App;
