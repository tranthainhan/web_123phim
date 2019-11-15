import React from "react";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import { Button } from "@material-ui/core";
import "./style.scss";
import FB from "../../Assets/img/fb.svg";
import GG from "../../Assets/img/gg.svg";

const FormLogin = (props) => {
  return (
    <div className="form-login">
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={yup.object().shape({
          username: yup.string().required("Vui lòng không để trống"),
          password: yup.string().required("Vui lòng không để trống")
        })}
      >
        {({ handleBlur, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field>
              {({ form }) => (
                <TextField
                  name="username"
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
                  name="password"
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
            <Button variant="contained" type="submit">
              Đăng nhập
            </Button>
            <p className="dash-line">Hoặc</p>
            <div className="wrap-btn-login">
              <Button variant="contained">
                {" "}
                <img src={GG} alt="hinh gg" />
              </Button>
              <Button variant="contained" color="primary">
                <img src={FB} alt="hinh fb" />
              </Button>
            </div>
            <p className='registration-question'>
              Bạn chưa có tài khoản ? ->
              <Button className="custom-btn-register" onClick={props.setRegister}>
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
