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

  const initialValues = { firstname: '',lastname: '',email: '',password: ''} ; 

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"), 
    password:Yup.string().required("Required")
  }) ; 

  const onSubmit = (values)=>{
    console.log(values);
  }

  const formik = useFormik({ initialValues , validationSchema , onSubmit })


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
        valid = {false}
        invalid ={formik.touched.firstname && formik.errors.firstname? true : false }
        formik = {formik }

      />

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
        valid ={false}
        invalid ={formik.touched.lastname && formik.errors.lastname? true : false }
        formik = {formik }

      />
       

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
        valid={false}
        invalid ={formik.touched.email && formik.errors.email? true : false }
        formik = {formik }

      />
       

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
        valid={false}
        invalid ={formik.touched.password && formik.errors.password? true : false }
        formik = {formik }

      />
      
      <Submit children="Sign Up " />


    </Form>

  );



}

export default SignUp;
