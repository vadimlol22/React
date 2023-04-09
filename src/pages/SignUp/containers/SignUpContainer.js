// import { Formik, useFormik } from "formik";
// import { useEffect } from "react";
// import { useFetching } from "../../../commonComponents/hooks";
// import { signUp } from "../api";
// import { signUpValidationsScheme } from "../validations";
import FormSignUp from "../components/FormSignUp/FormSignUp";

const SignUpContainer = () => {
  // const { data, errors, handleDataLoad } = useFetching(signUp);

  // useEffect(() => {
  //   handleDataLoad(123);
  // }, []);

  return (
    <div>
      <FormSignUp />
    </div>
  );
};

export default SignUpContainer;
