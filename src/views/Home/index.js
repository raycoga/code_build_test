import React, { memo } from "react";
import logo from "../../assets/logo.svg";
import LogInButton from "../../components/loginButton";
import SignUpButton from "../../components/signUpButton";

const index = memo(() => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="row justify-content-center">
          <p class="h6 text-center mt-2 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus tempora recusandae provident deleniti distinctio voluptates nostrum quia dolores, aut unde itaque quam. Quidem ad quod possimus vero, placeat explicabo.</p>
         
          <SignUpButton />
            <LogInButton />
         
            
          </div>
        </div>
      </div>
    </div>
  );
});

export default index;
