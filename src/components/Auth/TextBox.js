
import React from "react";
import { Input } from "reactstrap";
import TextBoxValidation from './TexBoxValidation'; 


function TextBox(props) {

  const { iconSrc ,formik ,  ...restProps } = props;
  return (
    <>
      <div className="inputs-text">

        <img src={iconSrc} alt="parallex img" />

        <Input {...restProps} />

      </div>
      <TextBoxValidation  formik = {formik} name={props.name} />
    

    </>
  );
}

export default TextBox;
