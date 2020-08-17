/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import styled, { keyframes } from "styled-components";
import header from "../config/headerConfig";
import sidebar from "../config/sidebarConfig";
import {
  primaryDark,
  primaryLight,
  accentLight,
  secondaryLight,
  secondaryDark,
} from "../config/colors";

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
  background-color: ${primaryLight};
  width: calc(100% - ${sidebar.width}px);
  height: calc(100vh - ${header.height}px);
  animation: ${IntroAnimation} 0.5s;
  overflow: auto;
  margin: 0 5px 0 0;
  scroll-behavior: smooth;

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
  width: 100%;
  min-height: 100%;
`;

const ContentTitle = styled.h3<any>`
  color: ${accentLight};
  width: 100%;
  border-bottom: 2px solid ${primaryDark};
  text-align: center;
  padding: 30px 0;
  font-size: calc(100% * 1.5);
`;

const ContentSubTitle = styled.h4<any>`
  color: ${secondaryDark};
  width: 100%;
  border-top: 1px solid ${primaryDark};
  border-bottom: 1px solid ${primaryDark};
  text-align: center;
  padding: 15px 0;
`;

const ContentParagraphWrapper = styled.div`
  max-width: 1000px;
  width: 80%;
  margin: 15px auto 30px auto;

  pre {
    border-radius: 5px;
  }

  code span.react-syntax-highlighter-line-number {
    user-select: none;
  }
`;

const ContentParagraph = styled.p`
  color: ${secondaryDark};

  a {
    color: ${accentLight};
    text-decoration: none;
  }
`;

const ContentBlock = styled.span`
  display: block;
  background-color: ${secondaryDark};
  color: ${primaryLight};
  padding: 10px;
  margin: 3px 0;
  width: 100%;
  border-radius: 5px;
`;

const ContentDarker = styled.span`
  color: ${secondaryLight};
  font-size: 80%;
  opacity: 0.8;
`;

export {
  ContentWrapper,
  InnerContentDecorationWrapper,
  InnerContentWrapper,
  ContentTitle,
  ContentSubTitle,
  ContentParagraph,
  ContentParagraphWrapper,
  ContentBlock,
  ContentDarker,
};
