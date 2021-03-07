import React, { Component } from "react";
import {
  getAuthTokensFromStorage,
  saveAuthTokensInStorage,
} from "../../utils/authUtils";

let authenticationObject = {
  authenticationStatus: false,
  accessToken: "",
  setAuthenticationStatus: (status: boolean, accessToken: string) => {},
};

function setDefaultUser() {
  const accessToken = getAuthTokensFromStorage();
  if (accessToken) {
    authenticationObject = {
      authenticationStatus: true,
      accessToken: accessToken,
      setAuthenticationStatus: authenticationObject.setAuthenticationStatus,
    };
  }

  return authenticationObject;
}

const AuthenticationContext = React.createContext(setDefaultUser());

class Authenticator extends Component {
  state = {
    authenticationStatus: true,
    accessToken: "",
    isAuthenticating: true,
    setAuthenticationStatus: this.setAuthenticationStatus,
  };

  componentDidMount() {
    const {
      authenticationStatus,
      accessToken,
    } = AuthenticationContext._currentValue;
    this.setAuthenticationStatus(authenticationStatus, accessToken);
  }

  setAuthenticationStatus = (status: boolean, token: string) => {
    saveAuthTokensInStorage(token);
    this.setState({
      authenticationStatus: status,
      accessToken: token,
      isAuthenticating: false,
    });
  };
  render() {
    const { children } = this.props;
    const { isAuthenticating } = this.state;
    return (
      <AuthenticationContext.Provider
        value={{
          authenticationStatus: this.state.authenticationStatus,
          accessToken: this.state.accessToken,
          setAuthenticationStatus: this.setAuthenticationStatus,
        }}
      >
        {isAuthenticating ? null : children}
      </AuthenticationContext.Provider>
    );
  }
}

export { AuthenticationContext, Authenticator };
