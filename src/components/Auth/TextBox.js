
import React from "react";

import React, { useEffect, useState } from "react";

import { Input, FormText } from "reactstrap";

function TextBox(props) {

  const { iconSrc, error, ...restProps } = props;
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    
    if (error) {

      setIsInvalid(true)
      setIsValid(false)

    } else {

      if (isInvalid !== false) {

        setIsValid(true)
        
      }
      setIsInvalid(false)
      
    }

  }, [isInvalid, error])


  return (
    <>
      <div className="inputs-text">

        <img src={iconSrc} alt="parallex img" />


        <Input valid={hasError} invalid={hasError} {...restProps} />

      </div>

      {hasError && <FormText >{error}</FormText>}

        <Input valid={isValid} invalid={isInvalid} {...restProps} />

      </div>

      {error && <FormText >{error.message}</FormText>}
    </>
  );
}

export default TextBox;
