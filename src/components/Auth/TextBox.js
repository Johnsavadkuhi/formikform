
import React from "react";

import { Input,  } from "reactstrap";

function TextBox(props) {

  const { iconSrc, error , hasError, ...restProps } = props;
 


  return (
    <>
      <div className="inputs-text">

        <img src={iconSrc} alt="parallex img" />


        <Input valid={hasError} invalid={hasError} {...restProps} />

      </div>


    </>
  );
}

export default TextBox;
