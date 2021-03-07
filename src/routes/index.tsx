import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Authenticator } from "../components/Authenticator";
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import store from "../store/store";

const Routes = () => {
  return (
    <Authenticator>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/auth" render={(props) => <Auth {...props} />} />
            <Route path="/admin" render={(props) => <Admin {...props} />} />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Authenticator>
  );
};
export default Routes;
