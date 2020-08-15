/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";

import {
  ContentWrapper,
  InnerContentDecorationWrapper,
  InnerContentWrapper,
} from "../theme/content";

class Content extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <InnerContentDecorationWrapper />
        <InnerContentWrapper></InnerContentWrapper>
      </ContentWrapper>
    );
  }
}

export default Content;
