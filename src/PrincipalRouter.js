import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import Spinner from './components/spinner'

import PrivateRoute from "./components/privateRoute";
import Home from "./views/Home";
import Dashboard from "./views/dashboard";


const PrincipalRotuter = () => {
  const { isLoading} = useAuth0();

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <div className="container-fluid">
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
    </div>
  );
};

export default PrincipalRotuter;
