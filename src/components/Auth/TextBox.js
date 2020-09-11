import React from "react";
import { Label, Input } from "reactstrap";

function TextBox(props) {
  
  const {iconSrc , ...restProps} = props ; 

  return (
    <>
      <div className="inputs-text">
        <img src={iconSrc} alt="parallex img" />
        <Label htmlFor={props.type === "email" ? "email" : "password"}></Label>
        <Input
        {...restProps}
/>
      </div>
    </>
  );
}

export default TextBox;
