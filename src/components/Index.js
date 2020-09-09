import React, { useState } from "react";
import SignUp from "./SignUp";
import ErrorBoundary from "./Error";
import CheckInternet from './components/Network/CheckInternet';
import AuthHeader from "./AuthHeader/AuthHeader";

export default function Auth(props) {
  const [login, setLogin] = useState(props.login);

  return (
    <div className="auth-container">

      <CheckInternet>
        <AuthHeader login={login} setLogin={setLogin} />
        {login ? (
          <ErrorBoundary>
            <Login />
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
