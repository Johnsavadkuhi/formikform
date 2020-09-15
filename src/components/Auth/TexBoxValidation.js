import React from 'react';

function TextBoxValidation(props) {

    const { formik, name } = props;

    if (name === "firstname") {
        return <>

            {formik.touched.firstname && formik.errors.firstname ? (
                <div style={{ color: "red" }}>{formik.errors.firstname}</div>
            ) : null}

        </>

    }
    if (name === "lastname") {
        return <>

            {formik.touched.lastname && formik.errors.lastname ? (
                <div style={{ color: "red" }}>{formik.errors.lastname}</div>
            ) : null}

        </>
    }
    if (name === "email") {

        return <>

            {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}

        </>
    }
    if (name === "password") {
        return <>

            {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}

        </>
    }


}

export default TextBoxValidation; 
