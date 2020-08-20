/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";
import { Link } from "react-router-dom";

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
  ContentArgsWrapper,
  ContentFuncWrapper,
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

// prettier-ignore
const pyTypes = {
  str: <a href="https://docs.python.org/3/library/string.html" target="_blanc">str</a>,
  int: <a href="https://docs.python.org/3/library/functions.html#int" target="_blanc">int</a>,
  float: <a href="https://docs.python.org/3/library/functions.html#float" target="_blanc">float</a>,
  bool: <a href="https://docs.python.org/3/c-api/bool.html" target="_blanc">bool</a>,
  dict: <a href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries" target="_blanc">dict</a>,
  none: <a href="https://docs.python.org/3/library/constants.html#None" target="_blanc">None</a>,
  messagable: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.abc.Messageable" target="_blanc">Messagable</a>,
  embedHandler: <Link to="#">EmbedHandler</Link>,
  messageHandler: <Link to="#">MessageHandler</Link>,
  footerHandler: <Link to="#">FooterHandler</Link>,
  authorHandler: <Link to="#">AuthorHandler</Link>,
  embed: <Link to="#">Embed</Link>,
  message: <Link to="#">Message</Link>,
  footer: <Link to="#">Footer</Link>,
  field: <Link to="#">Field</Link>,
  author: <Link to="#">Author</Link>,
  discordEmbed: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.Embed" target="_blanc">discord.Embed</a>,
  discordFile: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.File" target="_blanc">discord.File</a>,
  discordMessage: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.Message" target="_blanc">discord.Message</a>,
  discordColor: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.Colour" target="_blanc">discord.Color</a>,
  discordAllowedMentions: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.AllowedMentions" target="_blanc">discord.AllowedMentions</a>,
  cog: <a href="https://discordpy.readthedocs.io/en/latest/ext/commands/api.html?highlight=cog#discord.ext.commands.Cog" target="_blanc">Cog</a>,
  callable: <a href="https://en.wikibooks.org/wiki/Python_Programming/Functions#:~:text=A%20callable%20object%20is%20an,classes%20or%20certain%20class%20instances." target="_blanc">callable</a>,
}

class UtilsX extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      minimalDiscordBot: "Fetching example...",
      minimalConsolePrinter: "Fetching example...",
      botXExample: "Fetching example...",
    };
  }

  componentDidMount() {
    this.getData(
      "https://raw.githubusercontent.com/XilerNet/UtilsX/master/examples/discord_embeds.py"
    ).then((data) => this.setState({ minimalDiscordBot: data }));
    this.getData(
      "https://raw.githubusercontent.com/XilerNet/UtilsX/master/examples/console_prettifier.py"
    ).then((data) => this.setState({ minimalConsolePrinter: data }));
    this.getData(
      "https://raw.githubusercontent.com/XilerNet/UtilsX/master/examples/discord_botx.py"
    ).then((data) => this.setState({ botXExample: data }));
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
            {/* Quickstart */}
            <React.Fragment>
              <SectionTitle href="#discord">Discord</SectionTitle>
              <SectionWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#discord.BotX" title="BotX">
                    BotX
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#discord.Cog" title="Cog">
                    Cog
                  </SectionItem>
                </SectionItemWrapper>
                {/* <SectionItemWrapper>
                  <SectionItem href="#discord.Exceptions" title="Exceptions">
                    Exceptions
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#discord.handlers" title="Handlers">
                    Handlers
                  </SectionItem>
                </SectionItemWrapper> */}
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
            {/* Quickstart */}
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
            {/* Discord */}
            <React.Fragment>
              <hr />
              <ContentTitle id="discord">Discord</ContentTitle>
              <ContentParagraphWrapper>
                <ContentParagraph>
                  The discord module was developed to be able to create
                  discord.py bots more easy, it provides extra handlers and is
                  super easy to implement! No functions have been removed, only
                  shortcuts have been added to make your development process
                  easier than ever!
                </ContentParagraph>
              </ContentParagraphWrapper>
              <ContentSubTitle id="discord.BotX">BotX</ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentBlock>
                  <ContentDarker>class</ContentDarker> utilsx.discord.BotX():
                </ContentBlock>
                <ContentParagraph>
                  The shorter way to create a discord.py bot instance. This also
                  includes a few extra default functions. <br />
                  <br />
                  <h4>Attributes:</h4>
                  <ContentArgsWrapper>
                    <li>
                      <b>prefix</b> (Union[{pyTypes.str}, {pyTypes.callable},
                      List[{pyTypes.str}]]) - The bot instance its prefix,
                      default is '!'
                    </li>
                    <li>
                      <b>description</b> ({pyTypes.str}) - The bot instance its
                      description.
                    </li>
                    <li>
                      <b>case_insensitive</b> ({pyTypes.bool}) - If the bot will
                      reply to all commands or only the case correct commands,
                      default is True. (replies to all)
                    </li>
                  </ContentArgsWrapper>
                  <ContentFuncWrapper>
                    <li>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>
                        get_case_insensitive() -{">"} {pyTypes.bool}
                      </div>
                      <p>Retrieves if the bot its case_insensitive status.</p>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>
                        get_description() -{">"} {pyTypes.str}
                      </div>
                      <p>Retrieves the bot description.</p>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>
                        get_default_prefix(*args, **kwargs) -{">"} {pyTypes.str}
                      </div>
                      <p>Retrieves the bot prefix.</p>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>run(token)
                      </div>
                      <div className="desc">
                        Runs the bot instance.
                        <br />
                        <br />
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>token</b> ({pyTypes.str}) - The bot its{" "}
                            <a
                              href="https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token"
                              target="_blanc"
                            >
                              secret token
                            </a>
                            .
                          </li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>
                        load_extensions(extensions)
                      </div>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>
                        unload_extensions(extensions)
                      </div>
                      <div className="desc">
                        Loads/unloads all extensions from a list
                        <br />
                        <br />
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>extensions</b> (List[{pyTypes.str}]) - A list of
                            extensions.
                          </li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>
                        load_cogs(cogs)
                      </div>
                      <div className="function">
                        <ContentDarker dark>BotX.</ContentDarker>
                        unload_cogs(cogs)
                      </div>
                      <div className="desc">
                        Loads/unloads all cogs from a list
                        <br />
                        <br />
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>cogs</b> (List[{pyTypes.cog}]) - A list of cog
                            objects.
                          </li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    Here is a little example that will start your bot in only a
                    few lines!
                    <SyntaxHighlighter
                      language="python"
                      style={tomorrow}
                      showLineNumbers={true}
                    >
                      {this.state.botXExample.trim()}
                    </SyntaxHighlighter>
                  </ContentFuncWrapper>
                </ContentParagraph>
              </ContentParagraphWrapper>

              <ContentSubTitle id="discord.Cog">Cog</ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentBlock>
                  <ContentDarker>class</ContentDarker> utilsx.discord.Cog():
                </ContentBlock>
                <ContentParagraph>
                  The <code>commands.Cog</code> implemented Cog object. This
                  processes the bot COG object.
                  <br />
                  <br />
                  <h4>Attributes:</h4>
                  <ContentArgsWrapper>
                    <li>
                      <b>message_handler</b> ({pyTypes.messageHandler}) - The
                      message handler object, default is empty.
                    </li>
                    <li>
                      <b>embed_handler</b> ({pyTypes.embedHandler}) - The
                      default embed handler object, default is empty.
                    </li>
                    <li>
                      <b>footer_handler</b> ({pyTypes.footerHandler}) - The
                      footer handler object, default is empty.
                    </li>
                    <li>
                      <b>author_handler</b> ({pyTypes.authorHandler}) - The
                      author handler object, default is empty.
                    </li>
                  </ContentArgsWrapper>
                  <ContentFuncWrapper>
                    <li>
                      <div className="function">
                        <ContentDarker dark>Cog.</ContentDarker>
                        handle_message(message, format_args, handler_enabled)
                      </div>
                      <div className="desc">
                        Handles all messages using the set message handler
                        object.
                        <br />
                        <br />
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>message</b> ({pyTypes.str}) - The message that
                            should get processed.
                          </li>
                          <li>
                            <b>format_args</b> ({pyTypes.dict}) - The format
                            arguments that will be implemented in the prefix and
                            suffix.
                          </li>
                          <li>
                            <b>handler_enabled</b> ({pyTypes.bool}) - If the
                            message should get handled using the set message
                            handler object.
                          </li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>Cog.</ContentDarker>
                        send(target, message, *, tts, embed, file, files, nonce,
                        delete_after, allowed_mentions, handler_enabled,
                        format_args )
                      </div>
                      <div className="desc">
                        Processes a message and forwards it to the default
                        discord.py send method.
                        <br />
                        <br />
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>target</b> ({pyTypes.messagable}) - The location
                            where the message should get sent to.
                          </li>
                          <li>
                            <b>message</b> ({pyTypes.str}) - The message that
                            should get processed. .
                          </li>
                          <li>
                            <b>message</b> ({pyTypes.str}) - The location where
                            the message should get sent to.
                          </li>
                          <li>
                            <b>tts</b> ({pyTypes.bool}) - If TTS should be
                            enabled for the message.
                          </li>
                          <li>
                            <b>embed</b> ({pyTypes.discordEmbed}) - A discord.py
                            embed object for sending embeds the old classical
                            way.
                          </li>
                          <li>
                            <b>file</b> ({pyTypes.discordFile}) - A discord.py
                            file that will be sent in the message.
                          </li>
                          <li>
                            <b>files</b> (List[{pyTypes.discordFile}]) - A list
                            of discord.py files that will all be sent in the
                            message.
                          </li>
                          <li>
                            <b>nonce</b> ({pyTypes.int}) - The nonce repl value.
                          </li>
                          <li>
                            <b>delete_after</b> ({pyTypes.float}) - The amount
                            of seconds the message should be visible.
                          </li>
                          <li>
                            <b>allowed_mentions</b> (
                            {pyTypes.discordAllowedMentions}) - Controls the
                            mentions being processed in this message.
                          </li>
                          <li>
                            <b>handler_enabled</b> ({pyTypes.bool}) - If the
                            message should get handled using the set message
                            handler object.
                          </li>
                          <li>
                            <b>format_args</b> ({pyTypes.dict}) - The format
                            arguments that will be implemented in the prefix and
                            suffix.
                          </li>
                        </ContentArgsWrapper>
                        <br />
                        <h4>Returns:</h4>
                        <ContentArgsWrapper>
                          <li>
                            ({pyTypes.discordMessage}) - The message that was
                            sent.
                          </li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>Cog.</ContentDarker>
                        embed(target, message, *, title, raw, handler_enabled,
                        color, format_args, image, thumbnail, footer, author,
                        fields)
                      </div>
                      <div className="desc">
                        Formats an embed and forwards it to the default
                        discord.py send method.
                        <br />
                        <br />
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>target</b> ({pyTypes.messagable}) - The location
                            where the message should get sent to.
                          </li>
                          <li>
                            <b>message</b> ({pyTypes.str}) - The message that
                            should get processed. .
                          </li>
                          <li>
                            <b>title</b> ({pyTypes.str}) - The title for the
                            embed.
                          </li>
                          <li>
                            <b>raw</b> ({pyTypes.str}) - The non embedded
                            content.
                          </li>
                          <li>
                            <b>handler_enabled</b> ({pyTypes.bool}) - If the
                            message should get handled using the set message
                            handler object.
                          </li>
                          <li>
                            <b>color</b> (Union[{pyTypes.discordColor},{" "}
                            {pyTypes.int}]) - The color of the embed bar.
                          </li>
                          <li>
                            <b>format_args</b> ({pyTypes.dict}) - The format
                            arguments that will be implemented in the prefix and
                            suffix.
                          </li>
                          <li>
                            <b>image</b> ({pyTypes.str}) - The url for a image
                            that will be set as the embed image.
                          </li>
                          <li>
                            <b>thumbnail</b> ({pyTypes.str}) - The url for a
                            image that will be set as the embed thumbnail.
                          </li>
                          <li>
                            <b>footer</b> ({pyTypes.footer}) - A UtilsX footer
                            object that will format the embed footer section.
                          </li>
                          <li>
                            <b>author</b> ({pyTypes.author}) - A utilsX author
                            object that will format the embed author section.
                          </li>
                          <li>
                            <b>fields</b> (List[{pyTypes.field}]) - A list (up
                            to 25) objects that will format the embed fields.
                          </li>
                        </ContentArgsWrapper>
                        <br />
                        <h4>Returns:</h4>
                        <ContentArgsWrapper>
                          <li>
                            ({pyTypes.discordMessage}) - The message that was
                            sent.
                          </li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                  </ContentFuncWrapper>
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
