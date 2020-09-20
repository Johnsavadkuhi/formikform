import Swal from "sweetalert2";

function getData(formik, values) {
  const data = {
    firstName: values.firstname,
    lastName: values.lastName,
    email: values.email,
    password: values.password,
  };

  const headers = { "Content-Type": "application/json" };

  const body = JSON.stringify({
    data,
    campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
  });
  const options = { method: "POST", mode: "cors", headers, body };

  fetch("https://api.raisely.com/v3/signup", options)
    .then((result) => {
      return result.json();
    })
    .then((res) => {
      if (!res.errors) {
        Swal.fire({
          title: "success!",
          text: "successfully Regiestered Account!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          formik.setFieldValue("firstname", "", false);
          formik.setFieldValue("lastname", "", false);
          formik.setFieldValue("email", "", false);
          formik.setFieldValue("password", "", false);
        });
      } else {
        Swal.fire({
          title: "Error",
          text: `This account ${res.errors[0].code}`,
          icon: "error",
          confirmButtonText: "Ok",
        }).then(() => {
          formik.setFieldValue("email", "");
        });
      }
    })
    .catch((error) => {
      console.log("error :  ", error);
    });
}
export default getData;
