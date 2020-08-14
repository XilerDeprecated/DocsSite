/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import header from "../config/headerConfig";
import { ThemeProvider } from "styled-components";

import { XilerDevDecoration } from "../theme/XilerDev";

import {
  Header,
  HeaderTitleGroupWrapper,
  HeaderTitleWrapper,
  HeaderTitle,
} from "../theme/header";

import { Sidebar } from "../theme/sidebar";

class HomePage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: "dark" }}>
        <Header>
          <XilerDevDecoration></XilerDevDecoration>
          <HeaderTitleGroupWrapper>
            {header.topics.map((element, index) => (
              <HeaderTitleWrapper key={index}>
                <HeaderTitle title={element.title}>{element.name}</HeaderTitle>
              </HeaderTitleWrapper>
            ))}
          </HeaderTitleGroupWrapper>
        </Header>
        <Sidebar>

        </Sidebar>
      </ThemeProvider>
    );
  }
}

export default HomePage;
