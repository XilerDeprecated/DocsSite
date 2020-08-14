/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import styled from "styled-components";
import header from "../config/headerConfig";
import sidebar from "../config/sidebarConfig";
import { primaryDark, primaryLight } from "../config/colors";

const Header = styled.header`
  background-color: ${primaryDark};
  width: calc(100vw - ${sidebar.width}px);
  height: ${header.height}px;
  margin-left: ${sidebar.width}px;
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

const HeaderTitle = styled.a<any>`
  cursor: pointer;
  color: ${primaryLight};
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  transition: all 0.25s ease-in-out;

  &:hover {
    font-weight: 700;
    letter-spacing: 0;
  }
`;

export { Header, HeaderTitleGroupWrapper, HeaderTitleWrapper, HeaderTitle };
