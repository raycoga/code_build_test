import React from "react";
import PrincipalRouter from "./PrincipalRouter";
import Navbar from "./components/navbar";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import './assets/globalStyle.scss'
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_8BASE}/${process.env.REACT_APP_8BASE_ID}`,
});

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={client}>
          <Navbar />
          <PrincipalRouter />
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
