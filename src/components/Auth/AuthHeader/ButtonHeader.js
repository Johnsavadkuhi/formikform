import React from "react";

function ButtonHeader(props) {

  return (
    <>
      <button
        onClick={() => props.children=== "SignIn" ? props.setLogin(true) : props.setLogin(false)}
        className={ props.children ==="SignIn"
         ? `auth-btn-1 ${props.login ? "active" : ""} `
         : `${!props.login ? "active" : ""} `}>

        {props.children}
      </button>
    </>
  );
}

export default ButtonHeader ; 
