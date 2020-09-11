import React from "react";
import ButtonHeader from "./ButtonHeader";
import AuthButtons from "./AuthButtons";

function AuthHeader({login , setLogin }) {

 const buttonHeaderProps = {login , setLogin}
  
 return <AuthButtons>

        <ButtonHeader {...buttonHeaderProps} >SignIn</ButtonHeader>

        <ButtonHeader {...buttonHeaderProps} > SignUp </ButtonHeader>

      </AuthButtons>

}

export default AuthHeader;
