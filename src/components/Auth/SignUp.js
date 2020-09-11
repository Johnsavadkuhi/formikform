import React from "react";
import { Form  } from "reactstrap";
import TextBox from "./TextBox";
import Submit from "./Submit";
import { useForm } from "react-hook-form";
import iconSrc from "../../Assets/icons/email.svg";
import passIconSrc from "../../Assets/icons/password.svg";
import userIconSrc from "../../Assets/icons/user.svg"

 function SignUp() {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log("data : " , data );


  const textBoxProps = (which) => {
    
    if(which === "firstname" ) {
      return {
        innerRef : register({require:false}),
        iconSrc : userIconSrc , 
        type:"text" , 
        placeholder : "First Name ",
        name:"firstName", 
        className:"input-text"
      }
    } 
    if(which==="lastname") {
      return {
        innerRef : register({require:false}),
        iconSrc : userIconSrc , 
        type:"text" , 
        placeholder : "Last Name ",
        name:"lastname", 
        className:"input-text"
      }
    }
    if (which === "email")
      return {
        innerRef:register({required:true}) , 
        iconSrc,
        type: "email",
        placeholder: "Email",
        name: "email",
        className: "input-text",
      } 
      return {
        innerRef : register({required:true}), 
        iconSrc: passIconSrc,
        type: "password",
        placeholder: "Password",
        name: "password",
        className: "input-text",
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
