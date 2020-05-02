import React from "react";
import {LoginContainer, LoginProvider} from "../../containers";

export const LoginView = () => (
  <LoginProvider>
    <LoginContainer />
  </LoginProvider>
);

