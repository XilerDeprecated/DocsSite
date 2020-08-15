/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import styled from "styled-components";
import header from "../config/headerConfig";
import sidebar from "../config/sidebarConfig";
import { primaryDark, primaryLight } from "../config/colors";
import {Link} from "react-router-dom"

const Header = styled.header`
  position: fixed;
  z-index: 100;
  background-color: ${primaryDark};
  width: calc(100vw - ${sidebar.width}px);
  height: ${header.height}px;
  margin-left: ${sidebar.width}px;
  user-select: none;
`;

const HeaderTitleGroupWrapper = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HeaderTitleWrapper = styled.li`
  margin: 0 5px;
  height: 100%;
  width: calc((100vw - ${sidebar.width}px) / ${header.topics.length} - (${header.topics.length} * 5px));
`;

const HeaderTitle = styled(Link)<any>`
  cursor: pointer;
  color: ${primaryLight};
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  transition: all 0.25s ease-in-out;
  font-size: ${header.height / 4}px;

  &:hover {
    font-weight: 700;
    letter-spacing: 0;
  }
`;

export { Header, HeaderTitleGroupWrapper, HeaderTitleWrapper, HeaderTitle };
