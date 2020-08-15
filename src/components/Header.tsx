/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import header from "../config/headerConfig";

import {
  XilerDevDecoration,
  XilerDevWrapper,
  XilerDevIcon,
  XilerDevText,
} from "../theme/XilerDev";

import {
  Header,
  HeaderTitleGroupWrapper,
  HeaderTitleWrapper,
  HeaderTitle,
} from "../theme/header";

class HeaderWrapper extends React.Component {
  render() {
    return (
      <React.Fragment>
        <XilerDevDecoration>
          <XilerDevWrapper to="/">
            <XilerDevIcon src="/favicon.ico" alt="" />
            <XilerDevText>Docs</XilerDevText>
          </XilerDevWrapper>
        </XilerDevDecoration>
        <Header>
          <HeaderTitleGroupWrapper>
            {header.topics.map((element, index) => (
              <HeaderTitleWrapper key={index}>
                <HeaderTitle to={element.url} title={element.title}>{element.name}</HeaderTitle>
              </HeaderTitleWrapper>
            ))}
          </HeaderTitleGroupWrapper>
        </Header>
      </React.Fragment>
    );
  }
}

export default HeaderWrapper;
