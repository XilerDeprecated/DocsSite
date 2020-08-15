/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import styled, { keyframes } from "styled-components";
import header from "../config/headerConfig";
import sidebar from "../config/sidebarConfig";
import { primaryDark, primaryLight, accentLight } from "../config/colors";

import { Link } from "react-router-dom";

const IntroAnimation = keyframes`
  from {
    z-index: 1000;
    top: -${header.height}px;
    height: calc(100vh + ${header.height}px);
  }
  to {
    z-index: 1000;
    top: ${header.height}px;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: ${sidebar.width}px;
  top: ${header.height}px;
  background-color: ${primaryDark};
  width: calc(100% - ${sidebar.width}px);
  height: calc(100vh - ${header.height}px);
  user-select: none;
  animation: ${IntroAnimation} 0.5s;
  overflow: auto;
  margin: 0 5px 0 0;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${primaryDark};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${accentLight};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${accentLight};
  }
`;

const InnerContentDecorationWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: ${primaryDark};
  width: 5px;
  height: 5px;

  &::before {
    content: "";
    position: fixed;
    background-color: ${primaryLight};
    width: 5px;
    height: 5px;
    border-top-left-radius: 5px;
  }
`;

const InnerContentWrapper = styled.div`
  position: relative;
  background-color: ${primaryLight};
  width: 100%;
  height: 100%;
`;

export { ContentWrapper, InnerContentDecorationWrapper, InnerContentWrapper };
