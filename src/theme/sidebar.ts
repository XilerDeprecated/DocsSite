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
    left: -${sidebar.width}px;
    width: ${sidebar.width * 2}px;
  }
  to {
    z-index: 1000;
    left: 0;
    width: ${sidebar.width}px;
  }
`;

const Sidebar = styled.nav`
  position: fixed;
  background-color: ${primaryDark};
  width: ${sidebar.width}px;
  top: ${header.height}px;
  height: calc(100vh - ${header.height}px);
  outline: none;
  user-select: none;
`;

const SidebarSectionWrapper = styled.nav`
  position: fixed;
  background-color: ${primaryDark};
  width: ${sidebar.width - 5}px;
  top: ${header.height}px;
  height: calc(100vh - ${header.height + 10 + sidebar.bottom.height}px);
  margin: 5px 5px 0 0;
  animation: ${IntroAnimation} 0.5s;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
    background-color: ${primaryDark};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${primaryLight};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${accentLight};
  }
`;

const SectionTitle = styled(Link)<any>`
  display: block;
  width: calc(100% - 20px);
  margin: 2px 10px 0px 10px;
  color: ${primaryLight};
  cursor: pointer;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: ${sidebar.width / 9}px;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${accentLight};
  }
`;

const SectionWrapper = styled.ul`
  list-style: none;
  color: ${primaryLight};
  width: calc(100% - 20px);
  padding: 0 10px;
`;

const SectionItemWrapper = styled.li`
  width: 100%;
  height: 100%;
  margin: 0 0 3px 0;
  border-left: 1px solid ${primaryLight};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.1s ease-in-out;

  &:hover {
    border-left: 3px solid ${accentLight};
  }
`;

const SectionItem = styled(Link)<any>`
  display: block;
  padding: 0 0 0 10px;
  width: calc(100% - 10px);
  height: 100%;
  color: ${primaryLight};
  text-decoration: none;
  font-size: ${sidebar.width / 12}px;
`;

const ThemeSwitch = styled.button<any>`
  border: none;
  border-radius: 5px;
  background-color: ${primaryLight};
  position: absolute;
  height: ${sidebar.bottom.height - 15}px;
  width: ${sidebar.width - sidebar.bottom.height - 15}px;
  bottom: 10px;
  left: 10px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const LanguageSelector = styled.img<any>`
  position: absolute;
  border-radius: 5px;
  background-color: red;
  height: ${sidebar.bottom.height - 15}px;
  width: ${sidebar.bottom.height - 15}px;
  bottom: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export {
  Sidebar,
  SidebarSectionWrapper,
  SectionTitle,
  SectionWrapper,
  SectionItemWrapper,
  SectionItem,
  ThemeSwitch,
  LanguageSelector,
};
