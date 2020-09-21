import React from "react";
import { Form } from "reactstrap";
import TextBox from "./TextBox";
import Submit from "./Submit";
import iconSrc from "../../assets/icons/email.svg";
import passIconSrc from "../../assets/icons/password.svg";
import userIconSrc from "../../assets/icons/user.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextBoxValidation from "./TexBoxValidation";
import getData from "../../services/getData";

function SignUp() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Enter at least 8 characters!!")
      .required("Required"),
  });

  const onSubmit = (values) => {
    getData(formik, values);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Form className="sign-up" onSubmit={formik.handleSubmit}>
      <TextBox
        id="firstname"
        iconSrc={userIconSrc}
        type="text"
        placeholder="First Name "
        name="firstname"
        className="input-text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
        valid={
          formik.values.firstname.length > 0
            ? true &&
              !(formik.touched.firstname && formik.errors.firstname
                ? true
                : false)
            : false
        }
        invalid={
          formik.touched.firstname && formik.errors.firstname ? true : false
        }
        formik={formik}
      />
      <TextBoxValidation formik={formik} name="firstname" />

      <TextBox
        id="lastname"
        iconSrc={userIconSrc}
        type="text"
        placeholder="Last Name "
        name="lastname"
        className="input-text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
        valid={
          formik.values.lastname.length > 0
            ? true &&
              !(formik.touched.lastname && formik.errors.lastname
                ? true
                : false)
            : false
        }
        invalid={
          formik.touched.lastname && formik.errors.lastname ? true : false
        }
        formik={formik}
      />
      <TextBoxValidation formik={formik} name="lastname" />

      <TextBox
        id="email"
        iconSrc={iconSrc}
        type="email"
        placeholder="Email"
        name="email"
        className="input-text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        valid={
          formik.values.email.length > 0
            ? true &&
              !(formik.touched.email && formik.errors.email ? true : false)
            : false
        }
        invalid={formik.touched.email && formik.errors.email ? true : false}
        formik={formik}
      />
      <TextBoxValidation formik={formik} name="email" />

      <TextBox
        id="password"
        iconSrc={passIconSrc}
        type="password"
        placeholder="Password"
        name="password"
        className="input-text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        valid={
          formik.values.password.length > 0
            ? true &&
              !(formik.touched.password && formik.errors.password
                ? true
                : false)
            : false
        }
        invalid={
          formik.touched.password && formik.errors.password ? true : false
        }
        formik={formik}
      />
      <TextBoxValidation formik={formik} name="password" />

      <Submit children="Sign Up " />
    </Form>
  );
}

export default SignUp;
