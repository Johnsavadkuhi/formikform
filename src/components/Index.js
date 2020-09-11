import React, { useState } from "react";
import SignUp from "./Auth/SignUp";
import CheckInternet from './Network/CheckInternet';
import AuthHeader from "./AuthHeader";

 function Auth(props) {
  const [login, setLogin] = useState(false);

  return (
    <div className="auth-container">

      <CheckInternet>

        <AuthHeader login={login} setLogin={setLogin} />
        {login ? (<p>
            the login form
            </p> 
        ) : (
          
              <SignUp />
          )}
      </CheckInternet>
    </div>
  );
}
 

export default Auth ; 
