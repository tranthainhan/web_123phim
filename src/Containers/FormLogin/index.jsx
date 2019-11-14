import React from "react";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import { Button } from "@material-ui/core";
import "./style.scss";


const FormLogin = () => {
  return (<div className="form-login">
      <Formik>
          {(props) => (
              <Form>
                  <Field>
                      {(props) => (
                          <TextField></TextField>
                      )}
                  </Field>
              </Form>
          )}
      </Formik>
  </div>);
};

export default FormLogin;
