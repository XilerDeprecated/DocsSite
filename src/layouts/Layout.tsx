/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import { Helmet } from "react-helmet";
import HeaderWrapper from "../components/Header";

const Layout = ({ children, title }: { children: JSX.Element; title: string }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{`Xiler Documentation | ${title}`}</title>
      </Helmet>
      <HeaderWrapper />
      {children}
    </React.Fragment>
  );
};
export default Layout;
