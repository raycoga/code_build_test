/* import React from "react";
import auth from "../../utils/auth";

const LoginButton = () => {

  return (
    <button onClick={() => auth.authorize()}>Login / Signup</button>
  );
};

export default LoginButton;
 */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
/* import auth from "../../utils/auth"; */

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      class="btn btn-dark home"
    >
      Log In
    </button>
  );
};

export default LoginButton;
