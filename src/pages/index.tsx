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
  ContentTitle,
  ContentSubTitle,
  ContentParagraph,
  ContentParagraphWrapper,
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

class DocPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar>
          <SidebarSectionWrapper>
            <SectionTitle href="#welcome">Welcome</SectionTitle>
            <SectionWrapper>
              <SectionItemWrapper>
                <SectionItem href="#about" title="About">
                  About
                </SectionItem>
              </SectionItemWrapper>
              <SectionItemWrapper>
                <SectionItem href="#navigation" title="Navigation">
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
          <InnerContentWrapper>
            <ContentTitle id="welcome">
              Welcome to the Official Xiler Documentation
            </ContentTitle>
            <ContentSubTitle id="about">
              About our Documentation
            </ContentSubTitle>
            <ContentParagraphWrapper>
              <ContentParagraph>
                To let our clients and developers use/integrate our services
                easily we provide documentation for our products. Yet if you
                still have questions or problems you can contact our support in{" "}
                <a href="http://dc.xiler.net">our discord</a>, please also
                contact us if you find any problems in our documentation.
                Nothing is perfect, so we are always open for improvement!
              </ContentParagraph>
            </ContentParagraphWrapper>
            <ContentSubTitle id="navigation">
              How does our navigation work?
            </ContentSubTitle>
            <ContentParagraphWrapper>
              <ContentParagraph>
                On the top we have our different projects that are documented.
                As we create new projects new ones will appear there. Some might
                be categorized, for example <code>plugins</code> would contain
                the documentation about our minecraft plugins.
                <br />
                <br />
                At the left of our screen is the selected page its index, if you
                click on a name there you will jump to that topic.
              </ContentParagraph>
            </ContentParagraphWrapper>
          </InnerContentWrapper>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DocPage;
