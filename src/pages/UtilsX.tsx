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
  messagable: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.abc.Messageable" target="_blanc">abc.Messagable</a>,
  embedHandler: <a href="#discord.handlers.EmbedHandler" target="_self">EmbedHandler</a>,
  messageHandler: <a href="#discord.handlers.MessageHandler" target="_self">MessageHandler</a>,
  footerHandler: <a href="#discord.handlers.FooterHandler" target="_self">FooterHandler</a>,
  authorHandler: <a href="#discord.handlers.AuthorHandler" target="_self">AuthorHandler</a>,
  embed: <a href="#discord.objects.Embed" target="_self">Embed</a>,
  message: <a href="#discord.objects.Message" target="_self">Message</a>,
  footer: <a href="#discord.objects.Footer" target="_self">Footer</a>,
  field: <a href="#discord.objects.Field" target="_self">Field</a>,
  author: <a href="#discord.objects.Author" target="_self">Author</a>,
  utilsXDiscordException: <a href="#discord.exceptions.UtilsXDiscordException" target="_self">UtilsXDiscordException</a>,
  missingFormatArguments: <a href="#discord.exceptions.MissingFormatArguments" target="_self">MissingFormatArguments</a>,
  discordEmbed: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.Embed" target="_blanc">discord.Embed</a>,
  discordFile: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.File" target="_blanc">discord.File</a>,
  discordMessage: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.Message" target="_blanc">discord.Message</a>,
  discordColor: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.Colour" target="_blanc">discord.Color</a>,
  discordAllowedMentions: <a href="https://discordpy.readthedocs.io/en/latest/api.html#discord.AllowedMentions" target="_blanc">discord.AllowedMentions</a>,
  cog: <a href="https://discordpy.readthedocs.io/en/latest/ext/commands/api.html?highlight=cog#discord.ext.commands.Cog" target="_blanc">Cog</a>,
  callable: <a href="https://en.wikibooks.org/wiki/Python_Programming/Functions#:~:text=A%20callable%20object%20is%20an,classes%20or%20certain%20class%20instances." target="_blanc">callable</a>,
  datetime: <a href="https://docs.python.org/3/library/datetime.html#datetime-objects" target="_blanc">datetime</a>,
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
            {/* Discord */}
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
                <SectionItemWrapper>
                  <SectionItem href="#discord.Exceptions" title="Exceptions">
                    Exceptions
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#discord.Objects" title="Objects">
                    Objects
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#discord.Handlers" title="Handlers">
                    Handlers
                  </SectionItem>
                </SectionItemWrapper>
              </SectionWrapper>
            </React.Fragment>
            {/* Console */}
            <React.Fragment>
              <SectionTitle href="#console">Console</SectionTitle>
              <SectionWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#console.Prettier" title="Prettier">
                    Prettier
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#console.Formats" title="Formats">
                    Formats
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#console.Colors" title="Colors">
                    Colors
                  </SectionItem>
                </SectionItemWrapper>
                <SectionItemWrapper>
                  <SectionItem href="#console.Backgrounds" title="Backgrounds">
                    Backgrounds
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
              {/* BotX */}
              <React.Fragment>
                <ContentSubTitle id="discord.BotX">BotX</ContentSubTitle>
                <ContentParagraphWrapper>
                  <ContentBlock>
                    <ContentDarker>class</ContentDarker> utilsx.discord.BotX():
                  </ContentBlock>
                  <ContentParagraph>
                    The shorter way to create a discord.py bot instance. This
                    also includes a few extra default functions. <br />
                    <br />
                    <h4>Attributes:</h4>
                    <ContentArgsWrapper>
                      <li>
                        <b>prefix</b> (Union[{pyTypes.str}, {pyTypes.callable},
                        List[{pyTypes.str}]]) - The bot instance its prefix,
                        default is '!'
                      </li>
                      <li>
                        <b>description</b> ({pyTypes.str}) - The bot instance
                        its description.
                      </li>
                      <li>
                        <b>case_insensitive</b> ({pyTypes.bool}) - If the bot
                        will reply to all commands or only the case correct
                        commands, default is True. (replies to all)
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
                          get_default_prefix(*args, **kwargs) -{">"}{" "}
                          {pyTypes.str}
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
                              <b>extensions</b> (List[{pyTypes.str}]) - A list
                              of extensions.
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
                      Here is a little example that will start your bot in only
                      a few lines!
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
              </React.Fragment>
              {/* Cog */}
              <React.Fragment>
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
                              arguments that will be implemented in the prefix
                              and suffix.
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
                          send(target, message, *, tts, embed, file, files,
                          nonce, delete_after, allowed_mentions,
                          handler_enabled, format_args )
                        </div>
                        <div className="desc">
                          Processes a message and forwards it to the default
                          discord.py send method.
                          <br />
                          <br />
                          <h4>Parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>target</b> ({pyTypes.messagable}) - The
                              location where the message should get sent to.
                            </li>
                            <li>
                              <b>message</b> ({pyTypes.str}) - The message that
                              should get processed. .
                            </li>
                            <li>
                              <b>message</b> ({pyTypes.str}) - The location
                              where the message should get sent to.
                            </li>
                            <li>
                              <b>tts</b> ({pyTypes.bool}) - If TTS should be
                              enabled for the message.
                            </li>
                            <li>
                              <b>embed</b> ({pyTypes.discordEmbed}) - A
                              discord.py embed object for sending embeds the old
                              classical way.
                            </li>
                            <li>
                              <b>file</b> ({pyTypes.discordFile}) - A discord.py
                              file that will be sent in the message.
                            </li>
                            <li>
                              <b>files</b> (List[{pyTypes.discordFile}]) - A
                              list of discord.py files that will all be sent in
                              the message.
                            </li>
                            <li>
                              <b>nonce</b> ({pyTypes.int}) - The nonce repl
                              value.
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
                              arguments that will be implemented in the prefix
                              and suffix.
                            </li>
                          </ContentArgsWrapper>
                          <br />
                          <h4>Returns:</h4>
                          <ContentArgsWrapper>
                            <li>
                              {pyTypes.discordMessage} - The message that was
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
                              <b>target</b> ({pyTypes.messagable}) - The
                              location where the message should get sent to.
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
                              arguments that will be implemented in the prefix
                              and suffix.
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
                              {pyTypes.discordMessage} - The message that was
                              sent.
                            </li>
                          </ContentArgsWrapper>
                        </div>
                      </li>
                    </ContentFuncWrapper>
                  </ContentParagraph>
                </ContentParagraphWrapper>
              </React.Fragment>
              {/* Exceptions */}
              <React.Fragment>
                <ContentSubTitle id="discord.Exceptions">
                  Exceptions
                </ContentSubTitle>
                <ContentParagraphWrapper>
                  <ContentBlock>
                    <ContentDarker>module</ContentDarker>{" "}
                    utilsx.discord.exceptions
                  </ContentBlock>
                  <ContentParagraph>
                    The <code>utilsx.discord</code> exceptions.
                    <br />
                    <br />
                    <ContentFuncWrapper>
                      <li id="discord.exceptions.UtilsXDiscordException">
                        <div className="function">
                          <ContentDarker dark>exceptions.</ContentDarker>
                          UtilsXDiscordException()
                        </div>
                        <div className="desc">
                          The base exception for the UtilsX discord section!
                        </div>
                      </li>
                      <li id="discord.exceptions.MissingFormatArguments">
                        <div className="function">
                          <ContentDarker dark>exceptions.</ContentDarker>
                          MissingFormatArguments()
                        </div>
                        <div className="desc">
                          Exception that gets thrown when a <code>.format</code>{" "}
                          raises an error due to missing keys.
                        </div>
                      </li>
                    </ContentFuncWrapper>
                  </ContentParagraph>
                </ContentParagraphWrapper>
              </React.Fragment>
              {/* Objects */}
              <React.Fragment>
                <ContentSubTitle id="discord.Objects">Objects</ContentSubTitle>
                <ContentParagraphWrapper>
                  <ContentBlock>
                    <ContentDarker>module</ContentDarker> utilsx.discord.objects
                  </ContentBlock>
                  <ContentParagraph>
                    UtilsX its data objects, these are used in the handlers and
                    embeds.
                    <br />
                    <br />
                    <ContentFuncWrapper>
                      <li id="discord.objects.Embed">
                        <div className="function">
                          <ContentDarker dark>objects.</ContentDarker>
                          Embed(*, color, title, image, thumbnail)
                        </div>
                        <div className="desc">
                          The embed object that UtilsX can process.
                          <h4>Attributes {"&"} parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>color</b> (Union[{pyTypes.discordColor},{" "}
                              {pyTypes.int}]) - The color of the embed bar.
                            </li>
                            <li>
                              <b>title</b> ({pyTypes.str}) - The title for the
                              embed.
                            </li>
                            <li>
                              <b>image</b> ({pyTypes.str}) - The url for a image
                              that will be set as the embed image.
                            </li>
                            <li>
                              <b>thumbnail</b> ({pyTypes.str}) - The url for a
                              image that will be set as the embed thumbnail.
                            </li>
                          </ContentArgsWrapper>
                        </div>
                      </li>
                      <li id="discord.objects.Footer">
                        <div className="function">
                          <ContentDarker dark>objects.</ContentDarker>
                          Footer(*, text, icon_url, timestamp)
                        </div>
                        <div className="desc">
                          The embed object that UtilsX can process.
                          <h4>Attributes {"&"} parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>text</b> ({pyTypes.str}) - The text that will
                              be visible in the footer.
                            </li>
                            <li>
                              <b>icon_url</b> ({pyTypes.str}) - An image url for
                              the footer icon.
                            </li>
                            <li>
                              <b>timestamp</b> ({pyTypes.bool}) - If a timestamp
                              should be visible.
                            </li>
                          </ContentArgsWrapper>
                        </div>
                      </li>
                      <li id="discord.objects.Author">
                        <div className="function">
                          <ContentDarker dark>objects.</ContentDarker>
                          Author(name, *, url, icon_url)
                        </div>
                        <div className="desc">
                          The embed object that UtilsX can process.
                          <h4>Attributes {"&"} parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>name</b> ({pyTypes.str}) - The text that will
                              be in the author name field.
                            </li>
                            <li>
                              <b>url</b> ({pyTypes.str}) - The url to what the
                              author section should link.
                            </li>
                            <li>
                              <b>icon_url</b> ({pyTypes.str}) - An image url for
                              the author icon.
                            </li>
                          </ContentArgsWrapper>
                        </div>
                      </li>
                      <li id="discord.objects.Field">
                        <div className="function">
                          <ContentDarker dark>objects.</ContentDarker>
                          Field(name, value, *, inline)
                        </div>
                        <div className="desc">
                          The embed object that UtilsX can process.
                          <h4>Attributes {"&"} parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>name</b> ({pyTypes.str}) - The title for the
                              field.
                            </li>
                            <li>
                              <b>value</b> ({pyTypes.str}) - The main content
                              for the field.
                            </li>
                            <li>
                              <b>inline</b> ({pyTypes.bool}) - If the field
                              should be inline.
                            </li>
                          </ContentArgsWrapper>
                        </div>
                      </li>
                    </ContentFuncWrapper>
                  </ContentParagraph>
                </ContentParagraphWrapper>
              </React.Fragment>
              {/* Handlers */}
              <React.Fragment>
                <ContentSubTitle id="discord.Handlers">
                  Handlers
                </ContentSubTitle>
                <ContentParagraphWrapper>
                  <ContentBlock>
                    <ContentDarker>module</ContentDarker>{" "}
                    utilsx.discord.handlers
                  </ContentBlock>
                  <ContentParagraph>
                    UtilsX its discord data handlers, these process and handle
                    all (related) data that goes through the cog.
                    <br />
                    <br />
                    <ContentFuncWrapper>
                      <li id="discord.handlers.MessageHandler">
                        <div className="function">
                          <ContentDarker dark>handlers.</ContentDarker>
                          MessageHandler(*, prefix, suffix)
                        </div>
                        <div className="desc">
                          The object that handles all messages that are sent
                          through the Cog object.
                          <h4>Attributes {"&"} parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>prefix</b> ({pyTypes.str}) - The string that
                              will be prepended.
                            </li>
                            <li>
                              <b>suffix</b> ({pyTypes.str}) - The string that
                              will be appended.
                            </li>
                          </ContentArgsWrapper>
                          <br />
                          <div className="function">
                            <ContentDarker dark>MessageHandler.</ContentDarker>
                            process(message, **kwargs)
                          </div>
                          <div className="desc">
                            Message processor for the MessageHandler.
                            <h4>Parameters:</h4>
                            <ContentArgsWrapper>
                              <li>
                                <b>message</b> ({pyTypes.str}) - The message
                                that will be processed.
                              </li>
                              <li>
                                <b>**kwargs</b> ({pyTypes.str}) - The formatting
                                for the message.
                              </li>
                            </ContentArgsWrapper>
                            <h4>Raises:</h4>
                            <ContentArgsWrapper>
                              <li>
                                {pyTypes.missingFormatArguments} - If not all
                                format parameters have been filled.
                              </li>
                            </ContentArgsWrapper>
                          </div>
                        </div>
                      </li>
                      <li id="discord.handlers.FooterHandler">
                        <div className="function">
                          <ContentDarker dark>handlers.</ContentDarker>
                          FooterHandler(footer)
                        </div>
                        <div className="desc">
                          The object that handles embed footers.
                          <h4>Parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>footer</b> ({pyTypes.footer}) - The default
                              footer object.
                            </li>
                          </ContentArgsWrapper>
                          <br />
                          <div className="function">
                            <ContentDarker dark>FooterHandler.</ContentDarker>
                            process(obj)
                          </div>
                          <div className="desc">
                            Message processor for the MessageHandler.
                            <h4>Parameters:</h4>
                            <ContentArgsWrapper>
                              <li>
                                <b>obj</b> (Union[{pyTypes.footer},{" "}
                                {pyTypes.none}]) - The new provided footer.
                              </li>
                            </ContentArgsWrapper>
                            <h4>Returns:</h4>
                            <ContentArgsWrapper>
                              <li>
                                Union[{pyTypes.footer}, {pyTypes.none}] - A
                                valid footer object or None
                              </li>
                            </ContentArgsWrapper>
                          </div>
                        </div>
                      </li>
                      <li id="discord.handlers.AuthorHandler">
                        <div className="function">
                          <ContentDarker dark>handlers.</ContentDarker>
                          AuthorHandler(footer)
                        </div>
                        <div className="desc">
                          The object that handles the embed author field.
                          <h4>Parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>author</b> ({pyTypes.author}) - The default
                              author object.
                            </li>
                          </ContentArgsWrapper>
                          <br />
                          <div className="function">
                            <ContentDarker dark>AuthorHandler.</ContentDarker>
                            process(obj)
                          </div>
                          <div className="desc">
                            Message processor for the MessageHandler.
                            <h4>Parameters:</h4>
                            <ContentArgsWrapper>
                              <li>
                                <b>obj</b> (Union[{pyTypes.author},{" "}
                                {pyTypes.none}]) - The new provided author.
                              </li>
                            </ContentArgsWrapper>
                            <h4>Returns:</h4>
                            <ContentArgsWrapper>
                              <li>
                                Union[{pyTypes.author}, {pyTypes.none}] - A
                                valid author object or None
                              </li>
                            </ContentArgsWrapper>
                          </div>
                        </div>
                      </li>
                      <li id="discord.handlers.EmbedHandler">
                        <div className="function">
                          <ContentDarker dark>handlers.</ContentDarker>
                          EmbedHandler(footer)
                        </div>
                        <div className="desc">
                          The object that handles the general embed structure.
                          <h4>Parameters:</h4>
                          <ContentArgsWrapper>
                            <li>
                              <b>embed</b> ({pyTypes.embed}) - The default embed
                              object.
                            </li>
                          </ContentArgsWrapper>
                          <br />
                          <div className="function">
                            <ContentDarker dark>EmbedHandler.</ContentDarker>
                            process(obj)
                          </div>
                          <div className="desc">
                            Message processor for the MessageHandler.
                            <h4>Parameters:</h4>
                            <ContentArgsWrapper>
                              <li>
                                <b>obj</b> (Union[{pyTypes.embed},{" "}
                                {pyTypes.none}]) - The new provided embed.
                              </li>
                            </ContentArgsWrapper>
                            <h4>Returns:</h4>
                            <ContentArgsWrapper>
                              <li>
                                Union[{pyTypes.embed}, {pyTypes.none}] - A valid
                                embed object or None
                              </li>
                            </ContentArgsWrapper>
                          </div>
                        </div>
                      </li>
                    </ContentFuncWrapper>
                  </ContentParagraph>
                </ContentParagraphWrapper>
              </React.Fragment>
            </React.Fragment>
            {/* Console */}
            <React.Fragment>
              <hr />
              <ContentTitle id="console">Console</ContentTitle>
              <ContentParagraphWrapper>
                <ContentParagraph>
                  UtilsX its solution for easily formatting your consoles.
                </ContentParagraph>
              </ContentParagraphWrapper>
              <ContentSubTitle id="console.Prettier">Prettier</ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentBlock>
                  <ContentDarker>module</ContentDarker> utilsx.console.Prettier
                </ContentBlock>
                <ContentParagraph>
                  Prettier can make your programs look more professional with
                  almost no effort!
                  <br />
                  <br />
                  <h4>Parameters:</h4>
                  <ContentArgsWrapper>
                    <li>
                      <b>datetime_format</b> ({pyTypes.str}) - The datetime
                      format that your entered datetime object will take. The
                      default format is `[%y-%d-%m %H:%M:%S] `.
                    </li>
                    <li>
                      <b>default_text_format</b> ({pyTypes.str}) - The default
                      way text will be formatted in a print. This can be a
                      color, format or background. (or combined)
                    </li>
                    <li>
                      <b>colors_enabled</b> ({pyTypes.bool}) - If colors should
                      be enabled in the console. If false it will strip all
                      color codes from the message.
                    </li>
                    <li>
                      <b>auto_strip_message</b> ({pyTypes.str}) - If the pretty
                      printer should automatically apply the python .strip()
                      method to the content.
                    </li>
                  </ContentArgsWrapper>
                  <ContentFuncWrapper>
                    <li>
                      <div className="function">
                        <ContentDarker dark>Prettier.</ContentDarker>
                        clear_colors(msg)
                      </div>
                      <div className="desc">
                        Clears all known color codes from a given message.
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>msg</b> ({pyTypes.str}) - The message that is the
                            target.
                          </li>
                        </ContentArgsWrapper>
                        <h4>Returns:</h4>
                        <ContentArgsWrapper>
                          <li>{pyTypes.str} - A color code stripped string.</li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>Prettier.</ContentDarker>
                        print(message, *, time)
                      </div>
                      <div className="desc">
                        Pretty prints a given message.
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>message</b> ({pyTypes.str}) - The message that
                            must be pretty printed.
                          </li>
                          <li>
                            <b>time</b> ({pyTypes.datetime}) - The printed
                            datetime object. (Optional)
                          </li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>Prettier.</ContentDarker>
                        format(message, *, time)
                      </div>
                      <div className="desc">
                        Formats a message, this method is also called in the
                        Prettier print statement!
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>message</b> ({pyTypes.str}) - The message that
                            must be formatted.
                          </li>
                          <li>
                            <b>time</b> ({pyTypes.datetime}) - The formatted
                            datetime object. (Optional)
                          </li>
                        </ContentArgsWrapper>
                        <h4>Returns:</h4>
                        <ContentArgsWrapper>
                          <li>{pyTypes.str} - A formatted string.</li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                    <li>
                      <div className="function">
                        <ContentDarker dark>Prettier.</ContentDarker>
                        format_timestamp(time)
                      </div>
                      <div className="desc">
                        Formats a datetime object, this method is also called in
                        the Prettier format statement!
                        <h4>Parameters:</h4>
                        <ContentArgsWrapper>
                          <li>
                            <b>time</b> ({pyTypes.datetime}) - The datetime
                            object that must be formatted
                          </li>
                        </ContentArgsWrapper>
                        <h4>Returns:</h4>
                        <ContentArgsWrapper>
                          <li>{pyTypes.str} - A formatted datetime object.</li>
                        </ContentArgsWrapper>
                      </div>
                    </li>
                  </ContentFuncWrapper>
                </ContentParagraph>
              </ContentParagraphWrapper>
              <ContentSubTitle id="console.Formats">Formats</ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentBlock>
                  <ContentDarker>module</ContentDarker> utilsx.console.Formats
                </ContentBlock>
                <ContentParagraph>
                  Enum for console formats/styling codes.
                  <br />
                  <br />
                  <strong>
                    NOTE: Some CLI's may not support some formatting.
                  </strong>
                  <br />
                  <br />
                  Example:
                  <SyntaxHighlighter
                    language="python"
                    style={tomorrow}
                    showLineNumbers={false}
                  >
                    {
                      'print(f"{Formats.underline.value}Underline text{Formats.default.value}")'
                    }
                  </SyntaxHighlighter>
                  <br />
                  <h4>Attributes:</h4>
                  <p>default, dim, underline, blink, inverted, hidden</p>
                </ContentParagraph>
              </ContentParagraphWrapper>
              <ContentSubTitle id="console.Colors">Colors</ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentBlock>
                  <ContentDarker>module</ContentDarker> utilsx.console.Colors
                </ContentBlock>
                <ContentParagraph>
                  Enum for console color codes.
                  <br />
                  <br />
                  <strong>
                    NOTE: Some CLI's may not support some  colors.
                  </strong>
                  <br />
                  <br />
                  Example:
                  <SyntaxHighlighter
                    language="python"
                    style={tomorrow}
                    showLineNumbers={false}
                  >
                    {
                      'print(f"{Colors.yellow.value}Yellow text{Colors.default.value}")'
                    }
                  </SyntaxHighlighter>
                  <br />
                  <h4>Attributes:</h4>
                  <p>
                    default, black, red, green, yellow, blue, magenta, cyan,
                    light_gray, dark_gray, light_red, light_green, light_yellow,
                    light_blue, light_magenta, light_cyan, white
                  </p>
                </ContentParagraph>
              </ContentParagraphWrapper>
              <ContentSubTitle id="console.Backgrounds">
                Backgrounds
              </ContentSubTitle>
              <ContentParagraphWrapper>
                <ContentBlock>
                  <ContentDarker>module</ContentDarker>{" "}
                  utilsx.console.Backgrounds
                </ContentBlock>
                <ContentParagraph>
                  num for console background color codes.
                  <br />
                  <br />
                  <strong>
                    NOTE:  Some CLI's may not support some background colors.
                  </strong>
                  <br />
                  <br />
                  Example:
                  <SyntaxHighlighter
                    language="python"
                    style={tomorrow}
                    showLineNumbers={false}
                  >
                    {
                      'print(f"{Backgrounds.red.value}This text has a red background{Backgrounds.default.value}")'
                    }
                  </SyntaxHighlighter>
                  <br />
                  <h4>Attributes:</h4>
                  <p>
                    default, black, red, green, yellow, blue, magenta, cyan,
                    light_gray, dark_gray, light_red, light_green, light_yellow,
                    light_blue, light_magenta, light_cyan, white
                  </p>
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
