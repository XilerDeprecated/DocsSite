/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import styled, { keyframes } from "styled-components";
import header from "../config/headerConfig";
import sidebar from "../config/sidebarConfig";
import { primaryDark, primaryLight } from "../config/colors";

import { Link } from "react-router-dom";

const IntroAnimation = keyframes`
  from {
    top: -${header.height}px;
    height: calc(100vh + ${header.height}px);
  }
  to {
    top: 0;
  }
`;

const XilerDevDecoration = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${primaryDark};
  width: ${sidebar.width}px;
  height: ${header.height}px;
  user-select: none;
  animation: ${IntroAnimation} 0.5s;
`;

const XilerDevWrapper = styled(Link)<any>`
  position: relative;
  cursor: pointer;
  background-color: ${primaryLight};
  width: ${sidebar.width - 5}px;
  height: ${header.height - 5}px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-decoration: none;
  color: ${primaryDark};
  letter-spacing: 1px;
  transition: all 0.25s ease-in-out;

  &:hover {
    font-weight: 700;
    letter-spacing: 0;
  }
`;

const XilerDevIcon = styled.img<any>`
  position: relative;
  height: 80%;
`;

const XilerDevText = styled.h2`
  font-weight: 700;
  font-size: calc(100% * 1.5);
  width: calc(100% / 3);
  text-align: center;
`;

export { XilerDevDecoration, XilerDevWrapper, XilerDevIcon, XilerDevText };
