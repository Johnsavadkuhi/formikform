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
      </div><span style={{padding:0  , marginLeft:"10px"  , top : 0    }}>  fsds</span>
    </>
  );
}

export default TextBox;
