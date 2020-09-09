import React from "react";
import ButtonHeader from "./ButtonHeader";
import AuthButtons from "./AuthButtons";
function AuthHeader({login , setLogin }) {

 const buttonHeaderProps = {login , setLogin}
  
 return <AuthButtons>

        <ButtonHeader {...buttonHeaderProps} >ورود</ButtonHeader>
        <ButtonHeader {...buttonHeaderProps} >ثبت نام</ButtonHeader>

      </AuthButtons>

}

export default AuthHeader;
