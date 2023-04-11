import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import FormSignIn from "../components/FormSignIn/FormSignIn";
import isAuthenticatedSelector from "../selectors";
import { ROUTE_NAMES } from "../../../routes/routeNames";

const SignInContainer = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.COUNTER} />;
  }

  return (
    <div>
      <FormSignIn />
    </div>
  );
};

export default SignInContainer;
