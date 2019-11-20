import React from "react";
import * as yup from "yup";
import { connect } from "react-redux";
import { register } from "../../Actions/User";
import _ from "lodash";
import Swal from "sweetalert2";
import api from "../../Api/user";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import { Button } from "@material-ui/core";

import "./style.scss";

const checkUsername = value => {
  return api
    .get(`TimKiemNguoiDung?MaNhom=GP09&tuKhoa=${value}`)
    .then(result => {
      const taiKhoan = result.data;
      let flag = true;
      taiKhoan.forEach(item => {
        if (item.taiKhoan.toUpperCase() === value.toUpperCase()) {
          flag = false;
        }
      });
      return flag;
    });
};

const validationSchema = yup.object().shape({
  hoTen: yup.string().required("Vui lòng không để trống"),
  taiKhoan: yup
    .string()
    .required("Vui lòng không để trống")
    .min(8, "Độ dài tối thiểu 8 ký tự")
    .max(32, "Độ dài tối đa 32 ký tự")
    .test("check taiKhoan", "Tài khoản bị trùng", value => {
      return checkUsername(value);
    }),
  matKhau: yup
    .string()
    .required("Vui lòng không để trống")
    .min(8, "Độ dài tối thiểu 8 ký tự")
    .max(32, "Độ dài tối đa 32 ký tự"),
  email: yup
    .string()
    .email("Vui lòng nhập đúng định dạng")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Vui lòng nhập đúng định dạng1"
    )
    .required("Vui lòng không để trống"),
  soDt: yup
    .number()
    .required("Vui lòng không để trống")
    .typeError("Vui lòng chỉ nhập số")
});

const FormRegister = props => {
  
  return (
    <Formik
      initialValues={{
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: ""
      }}
      onSubmit={(values, {setFieldError}) => {
        const newUser = {
          ...values,
          maNhom: "GP09",
          maLoaiNguoiDung: "KhachHang"
        };
        register(newUser)
          .then(() => {
            props.handleClose();
          })
          .then(result => {
            Swal.fire({
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: true
            });
          })
          .catch(() => setFieldError('email', 'Email bị trùng'));
      }}
      // validationSchema={validationSchema}
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
                    onChange={ (e) => {
                      new Promise((resolve, reject) => handleChange(e)).then(()=> console.log(form.values))
                       
                    }}
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
              <Button variant="contained" onClick={() => props.setRegister()}>
                Quay về
              </Button>
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

export default connect(null, { register })(FormRegister);
