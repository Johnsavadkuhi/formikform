import React from "react";
import { Form  } from "reactstrap";
import TextBox from "./TextBox";
import Submit from "./Submit";
import { useForm } from "react-hook-form";
import iconSrc from "../../Assets/icons/email.svg";
import passIconSrc from "../../Assets/icons/password.svg";
import userIconSrc from "../../Assets/icons/user.svg";
import * as yup from "yup"; 
import {yupResolver} from "@hookform/resolvers"; 


const schema = yup.object().shape({
  firstname:yup.string().required("First Name is required. ") , 
  lastname: yup.string().required("Last Name is requrired. ") ,
  email:yup.string().email("Email is required. ") ,
  password : yup.string().required("Password is required.") 
})

 function SignUp() {

  const { register, handleSubmit , errors } = useForm({
    resolver : yupResolver(schema)
  });

  const onSubmit = data => {
    
    console.log("data : " , data )
  
  };


  const textBoxProps = (which) => {
    
    if(which === "firstname" ) {
      return {
        innerRef : register({require:false}),
        iconSrc : userIconSrc , 
        type:"text" , 
        placeholder : "First Name ",
        name:"firstname", 
        className:"input-text",
        error : errors.firstname 
      }
    } 
    if(which==="lastname") {
      return {
        innerRef : register({require:false}),
        iconSrc : userIconSrc , 
        type:"text" , 
        placeholder : "Last Name ",
        name:"lastname", 
        className:"input-text",
        error : errors.lastname 
      }
    }
    if (which === "email"){
      return {
        innerRef:register({required:true}) , 
        iconSrc,
        type: "email",
        placeholder: "Email",
        name: "email",
        className: "input-text",
        error:errors.email
      } 
    }
    if(which ==="password"){
      return {
        innerRef : register({required:true}), 
        iconSrc: passIconSrc,
        type: "password",
        placeholder: "Password",
        name: "password",
        className: "input-text",
        error:errors.password
      }
    }

  };

  return (
     
      <Form className="sign-up" onSubmit={handleSubmit(onSubmit)}>
        
        <TextBox {...textBoxProps("firstname")}/>

        <TextBox {...textBoxProps("lastname")} />

        <TextBox {...textBoxProps("email")} />

        <TextBox {...textBoxProps("password")} />

       <Submit children="Sign Up " />

      
      </Form>
  
  );



}

export default SignUp ; 
