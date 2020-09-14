import React from "react";
import { Form  } from "reactstrap";
import TextBox from "./TextBox";
import Submit from "./Submit";
import { useForm } from "react-hook-form";
import iconSrc from "../../Assets/icons/email.svg";
import passIconSrc from "../../Assets/icons/password.svg";
import userIconSrc from "../../Assets/icons/user.svg"
import { useFormik } from "formik";
import * as Yup from 'yup' ; 


 function SignUp() {

  
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log("data : " , data );

  const formik = useFormik({
    initialValues : {
      firstname : '' , lastname : '' , email : '' , password : '' 
        } , 
        validationSchema : Yup.object({
          firstname : Yup.string().required("Required") , 
          lastname : Yup.string().required("Required"), 
          email : Yup.string().email("Invalid email address")
          .required("Required")
        }), 
        onSubmit : values => {
          
        }
  })
  // const textBoxProps = (which) => {
    
  //   if(which === "firstname" ) {
  //     return {
  //       id : "firstname" ,
  //       innerRef : register({require:false}),
  //       iconSrc : userIconSrc , 
  //       type:"text" , 
  //       placeholder : "First Name ",
  //       name:"firstname", 
  //       className:"input-text", 
  //       onchange :{formik.handleChange}
  //     }
  //   } 
  //   if(which==="lastname") {
  //     return {
  //       innerRef : register({require:false}),
  //       iconSrc : userIconSrc , 
  //       type:"text" , 
  //       placeholder : "Last Name ",
  //       name:"lastname", 
  //       className:"input-text"
  //     }
  //   }
  //   if (which === "email")
  //     return {
  //       innerRef:register({required:true}) , 
  //       iconSrc,
  //       type: "email",
  //       placeholder: "Email",
  //       name: "email",
  //       className: "input-text",
  //     } 
  //     return {
  //       innerRef : register({required:true}), 
  //       iconSrc: passIconSrc,
  //       type: "password",
  //       placeholder: "Password",
  //       name: "password",
  //       className: "input-text",
  //     }

  // };

  return (
     
      <Form className="sign-up" onSubmit={formik.handleSubmit}>
        
        <TextBox 
        id = "firstname" 
        iconSrc = {userIconSrc }
        type="text" 
        placeholder = "First Name "
        name= "firstname"
        className="input-text"
        onchange ={formik.handleChange}
        onBlur = {formik.handleBlur}
        value = {formik.values.firstname}

        />

        <TextBox 
          iconSrc = {userIconSrc } 
          type="text"  
          id="lastname"
          placeholder = "Last Name "
          name="lastname"
          className="input-text"
          onchange= {formik.handleChange}
          onBlur ={formik.handleBlur}
          value={formik.values.lastname}

        />

        <TextBox 
        iconSrc
        type="email"
        id="email"
        placeholder="Email"
        name= "email"
        className= "input-text"
        onchange={formik.handleChange}
        onBlur={formik.handleBlur}
        value ={formik.values.email}

        />

        <TextBox 
        iconSrc = {passIconSrc}
        type="password"
        id="password"
        placeholder= "Password"
        name= "password"
        className= "input-text"
        onchange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />

       <Submit children="Sign Up " />

      
      </Form>
  
  );



}

export default SignUp ; 
