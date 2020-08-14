/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import styled from "styled-components";
import header from "../config/headerConfig";
import sidebar from "../config/sidebarConfig";
import { primaryDark, primaryLight } from "../config/colors";

const Sidebar = styled.nav`
  background-color: ${primaryDark};
  width: ${sidebar.width}px;
  height: calc(100vh - ${header.height}px);
`;

export { Sidebar };
