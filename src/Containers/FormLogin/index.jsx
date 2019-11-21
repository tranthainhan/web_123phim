import React from "react";
import * as yup from "yup";


import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import { Button } from "@material-ui/core";
import ButtonLoginWithFB from "../ButtonLoginWithFB";
import ButtonLoginWithGG from "../ButtonLoginWithGG";

import "./style.scss";

const FormLogin = props => {

  
  return (
    <div className="form-login">
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: ""
        }}
        validationSchema={yup.object().shape({
          taiKhoan: yup.string().required("Vui lòng không để trống"),
          matKhau: yup.string().required("Vui lòng không để trống"),
        })}
        onSubmit={values => {

        }}
      >
        {({ handleBlur, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field>
              {({ form }) => (
                <TextField
                  name="taiKhoan"
                  label="Tài khoản"
                  margin="normal"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={form.touched.username && !!form.errors.username}
                  helperText={
                    form.touched.username && form.errors.username
                      ? form.errors.username
                      : ""
                  }
                />
              )}
            </Field>
            <Field>
              {({ form }) => (
                <TextField
                  name="matKhau"
                  label="Mật khẩu"
                  margin="normal"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={form.touched.password && !!form.errors.password}
                  helperText={
                    form.touched.password && form.errors.password
                      ? form.errors.password
                      : ""
                  }
                />
              )}
            </Field>
            <Button variant="contained" type="submit" >
              Đăng nhập
            </Button>
            <p className="dash-line">Hoặc</p>
            <div className="wrap-btn-login">
              <ButtonLoginWithGG />
              <ButtonLoginWithFB />
            </div>
            <p className="registration-question">
              Bạn chưa có tài khoản ? ->
              <Button
                className="custom-btn-register"
                onClick={props.setRegister}
              >
                Đăng ký
              </Button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
