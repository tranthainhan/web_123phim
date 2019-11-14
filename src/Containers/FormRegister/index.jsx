import React from "react";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import "./style.scss";
import { Button } from "@material-ui/core";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  hoTen: yup.string().required("Vui lòng không để trống"),
  taiKhoan: yup
    .string()
    .required("Vui lòng không để trống")
    .min(8, "Độ dài tối thiểu 8 ký tự")
    .max(32, "Độ dài tối đa 32 ký tự"),
  matKhau: yup
    .string()
    .required("Vui lòng không để trống")
    .min(8, "Độ dài tối thiểu 8 ký tự")
    .max(32, "Độ dài tối đa 32 ký tự"),
  email: yup
    .string()
    .email()
    .required("Vui lòng không để trống")
    .typeError("Vui lòng nhập đúng định dạng, ví dụ: abc@xyz.xxx"),
  soDt: yup
    .number()
    .required("Vui lòng không để trống")
    .typeError("Vui lòng chỉ nhập số")
});

const FormRegister = () => {
  return (
    <Formik
      initialValues={{
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: ""
      }}
      onSubmit={(values, touched) => {}}
      validationSchema={validationSchema}
    >
      {({ handleBlur, handleChange, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} className="form-register">
            <Field>
              {({ form }) => {
                return (
                  <TextField
                    error={form.touched.hoTen && !!form.errors.hoTen}
                    name="hoTen"
                    label="Họ và tên"
                    margin="normal"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    helperText={
                      form.touched.hoTen && form.errors.hoTen
                        ? form.errors.hoTen
                        : ""
                    }
                  />
                );
              }}
            </Field>
            <Field>
              {({ form }) => {
                return (
                  <TextField
                    name="taiKhoan"
                    label="Tài khoản"
                    margin="normal"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={form.touched.taiKhoan && !!form.errors.taiKhoan}
                    helperText={
                      form.touched.taiKhoan && form.errors.taiKhoan
                        ? form.errors.taiKhoan
                        : ""
                    }
                  />
                );
              }}
            </Field>
            <Field>
              {({ form }) => {
                return (
                  <TextField
                    name="matKhau"
                    label="Mật khẩu"
                    margin="normal"
                    variant="outlined"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={form.touched.matKhau && !!form.errors.matKhau}
                    helperText={
                      form.touched.matKhau && form.errors.matKhau
                        ? form.errors.matKhau
                        : ""
                    }
                  />
                );
              }}
            </Field>
            <Field>
              {({ form }) => {
                return (
                  <TextField
                    name="email"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={form.touched.email && !!form.errors.email}
                    helperText={
                      form.touched.email && form.errors.email
                        ? form.errors.email
                        : ""
                    }
                  />
                );
              }}
            </Field>
            <Field>
              {({ form }) => {
                return (
                  <TextField
                    name="soDt"
                    label="Số điện thoại"
                    margin="normal"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={form.touched.soDt && !!form.errors.soDt}
                    helperText={
                      form.touched.soDt && form.errors.soDt
                        ? form.errors.soDt
                        : ""
                    }
                  />
                );
              }}
            </Field>
            <div className="btn-group">
              <Button variant="contained">Quay về</Button>
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Đăng ký
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormRegister;
