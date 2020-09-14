
import React from "react";

import { Input } from "reactstrap";

function TextBox(props) {

  const { iconSrc,formik ,  ...restProps } = props;



  return (
    <>
      <div className="inputs-text">

        <img src={iconSrc} alt="parallex img" />

        <Input {...restProps} />

      </div>
      {formik.touched.firstname && formik.errors.firstname ? (
         <div style={{color:"red"}}>{formik.errors.firstname}</div>
       ) : null}


    </>
  );
}

export default TextBox;
