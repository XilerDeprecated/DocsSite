/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";

import {
  ContentWrapper,
  InnerContentDecorationWrapper,
  InnerContentWrapper,
  ContentTitle,
  ContentSubTitle,
  ContentParagraphWrapper,
  ContentParagraph,
  ContentBlock,
  ContentDarker,
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

class UtilsX extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      minimalDiscordBot: "Fetching example...",
      minimalConsolePrinter: "Fetching example...",
    };
  }

  componentDidMount() {
    this.getData(
      "https://raw.githubusercontent.com/XilerNet/UtilsX/master/examples/discord_embeds.py"
    ).then((data) => this.setState({ minimalDiscordBot: data }));
    this.getData(
      "https://raw.githubusercontent.com/XilerNet/UtilsX/master/examples/console_prettifier.py"
    ).then((data) => this.setState({ minimalConsolePrinter: data }));
  }

  async getData(url: string) {
    const res = await axios.get(url);
    return res.data;
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar>
          <SidebarSectionWrapper>
            {/* Introduction */}
            <React.Fragment>
              <SectionTitle href="#introduction">Introduction</SectionTitle>
              <SectionWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#prerequisites" title="Prerequisites">
                    Prerequisites
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#installation" title="Installation">
                    Installation
                  </SectionItem>
                </SectionItemWrapper>
              </SectionWrapper>
            </React.Fragment>
            {/* Quickstart */}
            <React.Fragment>
              <SectionTitle href="#quickstart">Quickstart</SectionTitle>
              <SectionWrapper>
                <SectionItemWrapper>
                  <SectionItem
                    href="#a-minimal-discord-bot"
                    title="A minimal discord bot"
                  >
                    A minimal discord bot
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem
                    href="#a-minimal-console-printer"
                    title="A minimal console printer"
                  >
                    A minimal console printer
                  </SectionItem>
                </SectionItemWrapper>
              </SectionWrapper>
            </React.Fragment>
          </SidebarSectionWrapper>
          {/* <ThemeSwitch onClick={this.switchTheme} />
          <LanguageSelector src="/public/assets/lang/english_us_uk.svg" alt="" /> */}
        </Sidebar>
        <ContentWrapper>
          <InnerContentDecorationWrapper />
          <InnerContentWrapper>
            {/* Introduction */}
            <React.Fragment>
              <ContentTitle id="introduction">Introduction</ContentTitle>
              <ContentSubTitle id="prerequisites">
                Prerequisites
              </ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentParagraph>
                  UtilsX works with Python 3.5.3 or higher, this is because
                  UtilsX relies on discord.py, if you would wish to have lower
                  Python version support you are free to remove the{" "}
                  <code>discord</code> folder in the UtilsX pip installation
                  location.
                </ContentParagraph>
              </ContentParagraphWrapper>
              <ContentSubTitle id="installation">Installation</ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentParagraph>
                  You can directly get the library from PyPi:
                  <ContentBlock>
                    <ContentDarker>(python3 -m | py -3 -m) </ContentDarker>
                    pip install utilsx
                  </ContentBlock>
                </ContentParagraph>
              </ContentParagraphWrapper>
            </React.Fragment>
            {/* Quickstart Minimal Bot */}
            <React.Fragment>
              <hr />
              <ContentTitle id="quickstart">Quickstart</ContentTitle>
              <ContentSubTitle id="a-minimal-discord-bot">
                A minimal discord bot
              </ContentSubTitle>
              <ContentParagraphWrapper>
                <SyntaxHighlighter
                  language="javascript"
                  style={tomorrow}
                  showLineNumbers={true}
                >
                  {this.state.minimalDiscordBot.trim()}
                </SyntaxHighlighter>
                <ContentParagraph>
                  So okay, lets get started! Using UtilsX is not that different
                  than using the default discord.py library. The good thing
                  about UtilsX is that you still have all your features from
                  discord.py, the only difference is that you have some more
                  features and that you have to use UtilsX its classes as meta
                  classes in place of discord.py its meta classes. As you can
                  see in the example, instead of making our bot class using{" "}
                  <code>commands.Bot</code> we'll use <code>BotX</code> from{" "}
                  <code>utilsx.discord</code>. (This isn't required as default
                  for UtilsX to work module but its a shorter/easier way to
                  create your bot instance.)
                  <br />
                  <br />
                  Its good practice to not put your commands/functions in your
                  main instance. So UtilsX supports Cog support, a cog instance
                  can be initialized like in the example. Just like our Bot
                  instance the UtilsX Cog instance has all functions from the
                  discord.py cog class. In UtilsX you can send an embedded
                  message as easy as a normal message using{" "}
                  <code>self.embed(target, message, *args)</code>. This then
                  constructs your embed and sends it.
                </ContentParagraph>
              </ContentParagraphWrapper>
              <ContentSubTitle id="a-minimal-console-printer">
                A minimal console printer
              </ContentSubTitle>
              <ContentParagraphWrapper>
                <SyntaxHighlighter
                  language="javascript"
                  style={tomorrow}
                  showLineNumbers={true}
                >
                  {this.state.minimalConsolePrinter.trim()}
                </SyntaxHighlighter>
                <ContentParagraph>
                  UtilsX pretty printer transforms your CLI from a plain old
                  gray and black CLI to a fancy rainbow! Well not really but you
                  could do it if you wanted to. We use the pretty printer to
                  make our products look more professional. Its not even hard to
                  do it, first of all we have to setup our pretty printer, we
                  can do this by doing <code>var = Prettier(*args)</code>, yeah,
                  thats all! In the example all the text we send (if we don't
                  use other color codes) will be yellow. If you want to set
                  another color you can provide a color code or use our enum
                  codes. (like shown in the example).
                  <br />
                  <br />
                  The <code>Prettier.print()</code> statement takes a required
                  message argument. But if you want to add a timestamp that will
                  be formatted and shown before the message you can provide a
                  datetime object.
                </ContentParagraph>
              </ContentParagraphWrapper>
            </React.Fragment>
          </InnerContentWrapper>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default UtilsX;
