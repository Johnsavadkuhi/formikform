import React from "react";
import { Form } from "reactstrap";
import TextBox from "./TextBox";
import Submit from "./Submit";
import iconSrc from "../../Assets/icons/email.svg";
import passIconSrc from "../../Assets/icons/password.svg";
import userIconSrc from "../../Assets/icons/user.svg"
import { useFormik } from "formik";
import * as Yup from 'yup';

function SignUp() {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''

    },

    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address")
        .required("Required"), 
        password:Yup.string().required("Required")
    }),

    onSubmit: values => {

      console.log(values);
    }
  })

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

      />

      <TextBox
        iconSrc={userIconSrc}
        type="text"
        id="lastname"
        placeholder="Last Name "
        name="lastname"
        className="input-text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}

      />

      <TextBox
        iconSrc={iconSrc}
        type="email"
        id="email"
        placeholder="Email"
        name="email"
        className="input-text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}

      />

      <TextBox
        iconSrc={passIconSrc}
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        className="input-text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />

      <Submit children="Sign Up " />


    </Form>

  );



}

export default SignUp;
