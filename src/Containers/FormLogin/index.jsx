import React, { useState } from "react";
import * as yup from "yup";
import classNames from "classnames";
import apiUser from "../../Api/user";
import _ from "lodash";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import { login } from "../../Actions/User";

import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import { Button } from "@material-ui/core";
import ButtonLoginWithFB from "../ButtonLoginWithFB";
import ButtonLoginWithGG from "../ButtonLoginWithGG";

import "./style.scss";

const FormLogin = props => {
  const [error, setError] = useState("");
  return (
    <div className="form-login">
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: ""
        }}
        validationSchema={yup.object().shape({
          taiKhoan: yup.string().required("Vui lòng không để trống"),
          matKhau: yup.string().required("Vui lòng không để trống")
        })}
        onSubmit={values => {
          apiUser
            .post("DangNhap", values)
            .then(result => {
              props.login(result.data);
              props.handleClose();
              props.enqueueSnackbar(`Xin chào ${result.data.hoTen}`, {
                variant: "success",
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "right"
                }
              });
            })
            .catch(err => setError(`*${err.response.data}`));
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
                  onBlur={e => {
                    handleBlur(e);
                    setError("");
                  }}
                  onChange={handleChange}
                  error={form.touched.taiKhoan && !!form.errors.taiKhoan}
                  helperText={
                    form.touched.taiKhoan && form.errors.taiKhoan
                      ? form.errors.taiKhoan
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
                  type="password"
                  onBlur={e => {
                    handleBlur(e);
                    setError("");
                  }}
                  onChange={handleChange}
                  error={form.touched.matKhau && !!form.errors.matKhau}
                  helperText={
                    form.touched.matKhau && form.errors.matKhau
                      ? form.errors.matKhau
                      : ""
                  }
                />
              )}
            </Field>
            <div className={classNames("error", { open: !_.isEmpty(error) })}>
              {error}
            </div>
            <Button variant="contained" type="submit">
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

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(withSnackbar(FormLogin));
