import React from "react";
import { Form  } from "reactstrap";
import TextBox from "./TextBox";
import Submit from "./Submit";
import { useForm } from "react-hook-form";

import iconSrc from "../Assets/icons/email.svg";
import passIconSrc from "../Assets/icons/password.svg";


 function SignUp() {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log("data : " , data );


  const textBoxProps = (which) => {
    
    if (which === "email")
      return {
        innerRef:register({required:1}) , 
        iconSrc,
        type: "email",
        placeholder: "ایمیل",
        name: "email",
        className: "input-text",
      } 
      return {
        innerRef : register({required:true}), 
        iconSrc: passIconSrc,
        type: "password",
        placeholder: "رمز عبور",
        name: "password",
        className: "input-text",
      }

  };

  return (
     
      <Form className="sign-up" onSubmit={handleSubmit(onSubmit)}>
        
          <TextBox {...textBoxProps("email")} />

          <TextBox {...textBoxProps("password")} />

          <Submit children="ثبت نام" />

      
      </Form>
  
  );



}

export default SignUp ; 
