import React from "react";
import {MainContainer, MainProvider} from "../../containers";

export const MainView = (props: any) => (
  <MainProvider>
    <MainContainer {...props} />
  </MainProvider>
);

