import React from "react";
import {LoginContainer, LoginProvider} from "../../containers";

export const LoginView = (props: any) => (
  <LoginProvider>
    <LoginContainer {...props} />
  </LoginProvider>
);

