import React, { useState } from "react";
import SignUp from "./Auth/SignUp";
import ErrorBoundary from "./Error";
import CheckInternet from './Network/CheckInternet';
import AuthHeader from "./AuthHeader";

 function Auth(props) {
  const [login, setLogin] = useState(false);

  return (
    <div className="auth-container">

      <CheckInternet>
        <AuthHeader login={login} setLogin={setLogin} />
        {login ? (
          <ErrorBoundary>
            {/* <Login /> */}
            the login form 
          </ErrorBoundary>
        ) : (
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          )}
      </CheckInternet>
    </div>
  );
}
 

export default Auth ; 
