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
import Swal from "sweetalert2";

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
    fetch("https://api.raisely.com/v3/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          firstName: values.firstname,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        },
        campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        if (!res.errors) {
          Swal.fire({
            title: "success!",
            text: "successfully Regiestered Account!",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(()=>{
            formik.setFieldValue("firstname","" ,false);
            formik.setFieldValue("lastname" , "" , false);
            formik.setFieldValue("email", "" ,false); 
            formik.setFieldValue("password", "" , false); 
            
          });
        } else {
          Swal.fire({
            title: "Error",
            text: `This account ${res.errors[0].code}`,
            icon: "error",
            confirmButtonText: "Ok",
          }).then(() => {
            formik.setFieldValue("email", ""); 
            
           });
        }

      })
      .catch((error) => {
        console.log("error :  ", error);
      })
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  // useEffect(()=>{
  //   fetch("https://api.raisely.com/v3/check-user " , {
  //     method:"POST" ,
  //     mod:"no-cors",
  //     headers:{'Content-Type' : 'application/json'},
  //     body:JSON.stringify({
  //       data : {
  //         email : formik.values.email
  //       },
  //       campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
  //     })
  // }).then(response =>{
  //   return response.json();
  // }).then(result =>{
  //   console.log("result : " , result);
  // }).catch(error=>{
  //   console.log("error : " ,error);
  // })

  // } , [formik.values.email])

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
