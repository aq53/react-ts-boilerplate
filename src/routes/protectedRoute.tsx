import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../components/Authenticator";

const ProtectedRoute = (
  { component: Component, ...rest }:
  { component: any }
) => {
  return (
    <AuthenticationContext.Consumer>
      {(value) => (
        <Route
          {...rest}
          render={(props) =>
            value.authenticationStatus ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: `/auth/login`,
                }}
              />
            )
          }
        />
      )}
    </AuthenticationContext.Consumer>
  );
};

export default ProtectedRoute;
