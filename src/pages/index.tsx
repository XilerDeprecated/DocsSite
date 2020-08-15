/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import { ThemeProvider } from "styled-components";
import HeaderWrapper from "../components/Header";

import {
  ContentWrapper,
  InnerContentDecorationWrapper,
  InnerContentWrapper,
} from "../theme/content";

import {
  Sidebar,
  SidebarSectionWrapper,
  SectionTitle,
  SectionWrapper,
  SectionItemWrapper,
  SectionItem,
  ThemeSwitch,
  LanguageSelector,
} from "../theme/sidebar";

class DocPage extends React.Component<{}, { theme: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: this.getTheme(),
    };
  }

  getTheme() {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    } else {
      localStorage.setItem("theme", "dark");
      return "dark";
    }
  }

  switchTheme = () => {
    this.setState({ theme: this.state.theme === "dark" ? "light" : "dark" });
    localStorage.setItem(
      "theme",
      this.state.theme === "dark" ? "light" : "dark"
    );
  };

  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.theme }}>
        <HeaderWrapper />
        <Sidebar>
          <SidebarSectionWrapper>
            <SectionTitle to="/welcome">Welcome</SectionTitle>
            <SectionWrapper>
              <SectionItemWrapper>
                <SectionItem to="/#about" title="About">
                  About
                </SectionItem>
              </SectionItemWrapper>
              <SectionItemWrapper>
                <SectionItem to="/#navigation" title="Navigation">
                  Navigation
                </SectionItem>
              </SectionItemWrapper>
            </SectionWrapper>
          </SidebarSectionWrapper>
          {/* <ThemeSwitch onClick={this.switchTheme} />
          <LanguageSelector src="/public/assets/lang/english_us_uk.svg" alt="" /> */}
        </Sidebar>
        <ContentWrapper>
          <InnerContentDecorationWrapper />
          <InnerContentWrapper></InnerContentWrapper>
        </ContentWrapper>
      </ThemeProvider>
    );
  }
}

export default DocPage;
