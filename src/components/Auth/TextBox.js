import React from "react";
import { Label, Input, FormText } from "reactstrap";

function TextBox(props) {

  const { iconSrc, error, hasError, ...restProps } = props;

  return (
    <>
      <div className="inputs-text">
        <img src={iconSrc} alt="parallex img" />
        <Label htmlFor={props.type === "email" ? "email" : "password"}></Label>
        <Input valid={hasError} invalid={hasError}
          {...restProps}
        />
      </div>{hasError ? <FormText >{error}</FormText> : <></>}

    </>
  );
}

export default TextBox;
