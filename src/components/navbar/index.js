import React, { memo } from "react";
import LogoutButton from '../logoutButton'
import { useAuth0 } from "@auth0/auth0-react";

const index = memo(() => {
  const { isAuthenticated } = useAuth0();
 /*  console.log(isAuthenticated) */
  return (
    <nav className="navbar navbar-dark bg-dark ">
    <span className="navbar-brand">Test Code BUILD</span>
    {isAuthenticated ? <LogoutButton /> : null}
  </nav>
  );
});

export default index;
