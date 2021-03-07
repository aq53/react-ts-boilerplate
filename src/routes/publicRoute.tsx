import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../components/Authenticator";

const PublicRoute = ({ component: Component, ...rest }: { component: any }) => {
  return (
    <AuthenticationContext.Consumer>
      {(value) => (
        <Route
          {...rest}
          render={(props) =>
            value.authenticationStatus ? (
              <Redirect
                to={{
                  pathname: "/admin/dashboard",
                }}
              />
            ) : (
              <Component {...props} />
            )
          }
        />
      )}
    </AuthenticationContext.Consumer>
  );
};


export default PublicRoute;
