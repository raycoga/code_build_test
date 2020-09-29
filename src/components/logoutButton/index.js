import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <span
    style={{cursor:'pointer',color:'white'}}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      
     
    >
      <span style={{marginRight:'5px'}}> Log Out</span>
     
      <i  className="fas fa-sign-out-alt"></i>
    </span>
  );
};

export default LogoutButton;