import React from "react";
import * as yup from 'yup';
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import { Button } from "@material-ui/core";
import "./style.scss";


const FormLogin = () => {
  return (<div className="form-login">
      <Formik 
        initialValues={{
            username: '',
            password: ''
        }}
        validationSchema = {yup.object().shape({
            username: yup.string().required('Vui lòng không để trống'),
            password: yup.string().required('Vui lòng không để trống')
        })}
      >
          {({handleBlur, handleChange, handleSubmit}) => (
              <Form onSubmit={handleSubmit}>
                  <Field>
                      {(props) => (
                          <TextField></TextField>
                      )}
                  </Field>
                  <Button variant="contained" type='submit'>Đăng nhập</Button>
              </Form>
          )}
      </Formik>
  </div>);
};

export default FormLogin;
