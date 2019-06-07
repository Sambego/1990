import React, { Component } from "react";
import {
  Deck,
  Slide,
  Title,
  Subtitle,
  Image,
  Columns,
  List,
  Text,
  Browser,
  Code,
  Video
} from "@sambego/diorama";

import AnnoyingForm from "./Components/Annoying";
import Webauthn from "./Components/Webauthn";

import Sam from "./img/sam.png";
import Poes from "./img/poes.jpg";
import Pattern from "./img/pattern.png";
import Pattern2 from "./img/pattern-2.png";
import IOSOtp from "./img/iOS-otp.png";
import Magic from "./img/magic-link.png";
import GoogleAuthenticator from "./img/google-authenticator.png";
import Social from "./img/social.png";
import USBAUthenticator from "./img/usb.jpg";
import FastForward from "./img/fast-forward.svg";
import BreachedPW from "./img/breached-pw.png";
import Checkup from "./img/checkup.png";
import Guardian from "./img/guardian.png";
import GoogleAuthenticatorExp from "./img/google-authenticator-exp.png";
import Webauthn1 from "./img/webauthn-1.svg";
import Webauthn2 from "./img/webauthn-2.svg";
import Webauthn3 from "./img/webauthn-3.svg";
import Webauthn4 from "./img/webauthn-4.svg";
import Webauthn5 from "./img/webauthn-5.svg";
import Webauthn6 from "./img/webauthn-6.svg";
import Webauthn7 from "./img/webauthn-7.svg";
import Webauthn8 from "./img/webauthn-8.svg";

import future from "./video/future.mp4";

class App extends Component {
  render() {
    const code1 =
      "async function() {\n  try {\n      const credentials = \n        await navigator.credentials.create(config);\n    } catch (error) {\n      ...\n    }\n}";
    const code2 =
      "{\n  ...\n  // random, cryptographically secure, at least 16 bytes\n  challenge: createRandomUint8Array().buffer,\n  ...\n }";
    const code3 =
      "{\n  ...\n  // relying party\n  rp: {\n    name: 'Fronteers'\n  },\n  ...\n }";
    const code4 =
      "{\n  ...\n  // user information\n  user: {\n    id: createRandomUint8Array(),\n    name: 'Sam Bellen',\n    displayName: 'Sambego'\n  },\n  ...\n }";
    const code5 =
      "{\n  ...\n  // information about the allowed authenticator device\n  authenticatorSelection: {  \n    // optional, can also be 'cross-platform'\n    authenticatorAttachment: 'platform',\n    // optional, can also be 'require ' and 'discouraged'\n    userVerification: 'preferred'\n  },\n  ...\n }";
    const code6 =
      "{\n  ...\n  // information about the attestation, to prove the user's identity\n  // can also be 'indirect' and 'non ' to remove identifying information\n  attestation: 'direct',\n  ...\n }";
    const code7 =
      "async function() {\n  try {\n    const credentials = \n      await navigator.credentials.create(createConfig);\n\n    const attestation = \n      await navigator.credentials.get(getConfig);\n  } catch (error) {\n    ...\n  }\n}";
    const code8 = "const getConfig = {\n  publicKey: {\n    ...\n  }\n}";
    const code9 =
      "{\n  ...\n  // random, cryptographically secure, at least 16 bytes\n  challenge: createRandomUint8Array().buffer,\n  ...\n}";
    const code10 =
      "{\n  ...\n  // The allowed credentials\n  allowCredentials: [\n    {\n      id: credentials.rawId,\n      type: 'public-key'\n    }\n  ],\n  ...\n}";
    const code11 =
      "{\n  ...\n  // information about the allowed authenticator device\n  authenticatorSelection: { \n    // optional, can also be 'required' and 'discouraged'\n    userVerification: 'preferred' \n  }\n  ...\n}";

    return (
      <Deck>
        <Slide style={{ background: "#99c794", color: "#fff" }}>
          <Video src={future} loop autoplay full color="#99c794" />
          <Title style={{ color: "#ffffff", position: "relative", zIndex: 1 }}>
            Passwords are so 1990
          </Title>
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Image src={Sam} alt="A picture of me" full color="#99c794" />
            </div>
            <div>
              <Subtitle>Sam Bellen</Subtitle>
              <List>
                <li>Developer Evangelist</li>
                <li>Auth0</li>
                <li>Google Developer Expert</li>
                <li>Fronteers</li>
                <li>I&S London</li>
                <li>@sambego</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide>
          <Image
            src={Poes}
            alt="I've got cat stickers, tweet me @sambego"
            full
            color="#99c794"
          />
          <Subtitle
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate3d(-50%, -50%, 0)",
              color: "#fff",
              margin: 0
            }}
          >
            Tweet me @sambego
          </Subtitle>
        </Slide>
        <Slide>
          <List>
            <Subtitle>Summary</Subtitle>
            <li>A bit of history on passwords</li>
            <li>Types of passwords</li>
            <li>Passwordless authentication</li>
            <li>The Web authentication API</li>
          </List>
        </Slide>

        <Slide style={{ background: "#99c794", color: "#fff" }}>
          <Title>A bit of history on passwords</Title>
        </Slide>
        <Slide>
          <Subtitle
            style={{
              background: "#99c794",
              color: "#fff",
              padding: "1rem 3rem",
              marginBottom: "4rem"
            }}
          >
            Somewhere BC
          </Subtitle>
          <Subtitle>Passwords date back to the Romans!</Subtitle>
        </Slide>
        <Slide notes="In the story One Thousand and One Nights, the password to open the cave where the thieves hid they loot was “Open sesame”">
          <Subtitle
            style={{
              background: "#99c794",
              color: "#fff",
              padding: "1rem 3rem",
              marginBottom: "4rem"
            }}
          >
            10th century
          </Subtitle>
          <Subtitle>Open sesame</Subtitle>
        </Slide>
        <Slide notes="Fast forward a few hundred years and enter Fernando Corbató.">
          <Image src={FastForward} alt="Fast Forward" />
        </Slide>
        <Slide notes="Widely regarded as the godfather of the modern computer password, he introduced the idea to computer science while working at the Massachusetts Institute of Technology (MIT) in 1960.The university had developed a huge Compatible Time-Sharing System (CTSS) that all researchers had access to. However, they shared a common mainframe as well as a single disk file.To help keep individual files private, the concept of a password was developed so that users could only access their own specific files for their allotted four hours a week – hey, computer time was limited back in the 60s.">
          <Subtitle
            style={{
              background: "#99c794",
              color: "#fff",
              padding: "1rem 3rem",
              marginBottom: "4rem"
            }}
          >
            1961
          </Subtitle>
          <Subtitle>
            Fernando Corbató<br />-<br /> Time-Sharing System
          </Subtitle>
        </Slide>
        <Slide notes="Working for Bell Labs in the 70s, cryptographer Robert Morris Sr. devised “hashing”, the process by which a string of characters is transformed into a numerical code that represents the original phrase. This has the effect of not having to store the actual password itself in the password database. Hashing was adopted in early unix-like operating systems, which are widely used today across the world in mobile devices and workstations. Apple’s macOS, for example, uses unix, while the PlayStation 4 uses Orbis OS, a unix-like operating system.">
          <Subtitle
            style={{
              background: "#99c794",
              color: "#fff",
              padding: "1rem 3rem",
              marginBottom: "4rem"
            }}
          >
            1970s
          </Subtitle>
          <Subtitle>
            Robert Morris Sr<br /> -<br /> Hashing
          </Subtitle>
        </Slide>
        <Slide notes="When the web exploded in the 90s more and more public facing systems started popping up. Of course they became a target of people with bad intentions and hacking became more of an issue. Issues like hashing and salting help create a more secure way to store passwords.">
          <Subtitle
            style={{
              background: "#99c794",
              color: "#fff",
              padding: "1rem 3rem",
              marginBottom: "4rem"
            }}
          >
            1990s
          </Subtitle>
          <Subtitle>Hacking became more an issue</Subtitle>
        </Slide>

        <Slide style={{ background: "#99c794", color: "#fff" }}>
          <Title>Types of passwords</Title>
        </Slide>
        <Slide>
          <Subtitle>What's a password?</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Anything that’s a shared secret!</Subtitle>
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#99c794",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold"
            }}
          >
            A string
          </Text>
          <Subtitle>Password1234</Subtitle>
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#99c794",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold"
            }}
          >
            A string
          </Text>
          <Subtitle>colddog*</Subtitle>
          <Text style={{ marginTop: "4rem", fontStyle: "italic" }}>
            * My first password 🙊
          </Text>
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#99c794",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold"
            }}
          >
            A string
          </Text>
          <Subtitle>Zbety6FZiH6XNn3dsziGRB6+MBGDYU?</Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            Can be hard to remember if complex<br />
            <br /> <Text>A passwordmanager can help!</Text>
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>
            Can be hard to guess (by others) if complex
          </Subtitle>
        </Slide>

        <Slide>
          <Text
            style={{
              background: "#99c794",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold"
            }}
          >
            A pincode
          </Text>
          <Subtitle>1 2 3 4</Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            Not so hard to guess <br />
            <br />
            <Text>Often combined with a maximum allowed number of guesses</Text>
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>
            Fairly easy to remember
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>
            Usually used only with access to a physical thing <br />
            <Text>(card, phone, keypad, …)</Text>
          </Subtitle>
        </Slide>

        <Slide>
          <Text
            style={{
              background: "#99c794",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold"
            }}
          >
            A pattern
          </Text>
          <Image src={Pattern} alt="a pattern" />
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#99c794",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold"
            }}
          >
            A pattern
          </Text>
          <Image src={Pattern2} alt="a pattern" />
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            Touchscreens often reveal the pattern as “dirty” spots.
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            People often use their initial letter, lucky number, …
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>Easy to remember</Subtitle>
        </Slide>

        <Slide>
          <Subtitle>So what’s the problem with passwords?</Subtitle>
        </Slide>
        <Slide>
          <AnnoyingForm />
        </Slide>
        <Slide>
          <Subtitle style={{ fontSize: "20rem" }}>🤬</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Passwords can be annoying!</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Use a password manager to help you remember!</Subtitle>
        </Slide>

        <Slide notes="Fortunately in the data breaches I’ll highlight in the next slides, no raw, plain text passwords were stolen. But still not all companies treat passwords as they should!">
          <Subtitle>User data can get stolen</Subtitle>
        </Slide>
        <Slide notes="Private data, no passwords">
          <Subtitle>
            Google+<br /> -<br /> 52.5 million
          </Subtitle>
        </Slide>
        <Slide notes="Private data, no passwords">
          <Subtitle>
            Cambridge Analytica (Facebook)<br /> -<br /> 87 million
          </Subtitle>
        </Slide>
        <Slide notes="Private data, encrypted passwords">
          <Subtitle>
            Quora<br /> -<br /> 100 million
          </Subtitle>
        </Slide>
        <Slide notes="Private data, encrypted passwords">
          <Subtitle>
            MyFitnessPal<br /> -<br /> 150 million
          </Subtitle>
        </Slide>
        <Slide notes="Private data, no passwords">
          <Subtitle>
            Marriott Hotels<br /> -<br /> 500 million
          </Subtitle>
        </Slide>
        <Slide>
          <Image src={BreachedPW} alt="Auth0 breached password protection" />
        </Slide>
        <Slide>
          <Image src={Checkup} alt="Google Chrome password checkup extension" />
        </Slide>
        <Slide>
          <Subtitle>Tips for a good password</Subtitle>
          <List>
            <li>Use a complex password</li>
            <li>Don’t use personal data</li>
            <li>Don’t reuse passwords</li>
            <li>Change passwords frequently</li>
          </List>
        </Slide>
        <Slide notes="Fast forward some more, enter password less">
          <Image src={FastForward} alt="Fast Forward" />
        </Slide>

        <Slide style={{ background: "#99c794", color: "#fff" }}>
          <Title>Passwordless ✨</Title>
        </Slide>
        <Slide>
          <Subtitle>One time password</Subtitle>
        </Slide>
        <Slide>
          <List>
            <li>Valid for one time use</li>
            <li>Often expire after a certain time</li>
            <li>Sent directly to the user</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>Sent in an SMS</Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>
            iOS and Android let you fill in the OTP with the press of a button
          </Subtitle>
        </Slide>
        <Slide>
          <Image
            src={IOSOtp}
            alt="iOS let's you fill in one time passwords with the click of a button"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            Not all telecom operators take security serious, SMS messages can be
            intercepted
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            You need your cellphone on hand
          </Subtitle>
        </Slide>

        <Slide>
          <Subtitle>Sent in an email</Subtitle>
        </Slide>
        <Slide>
          <Image
            src={Magic}
            alt="Slack magic link"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>
            You don't need a second device
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            Emails can be intercepted
          </Subtitle>
        </Slide>

        <Slide>
          <Subtitle>Authenticator app</Subtitle>
        </Slide>
        <Slide>
          <Image
            src={GoogleAuthenticator}
            alt="The Google authenticator app"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Image
            src={Guardian}
            alt="Auth0 guardian app"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Subtitle>Other authenticator apps</Subtitle>
          <List>
            <li>DUO</li>
            <li>Lastpass Authenticator</li>
            <li>Authy</li>
            <li>Microsoft Authenticator</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>Time based</Subtitle>
        </Slide>
        <Slide>
          <Image
            src={GoogleAuthenticatorExp}
            alt="The Google authenticator app"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>Push based</Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            Needs a shared secret between the app and authentication service
          </Subtitle>
        </Slide>

        <Slide>
          <Subtitle>Social</Subtitle>
        </Slide>
        <Slide>
          <Image src={Social} alt="The Google authenticator app" />
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>
            One less password to remember
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#99c794" }}>
            Only give a password to a service you trust
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle style={{ color: "#ec5f67" }}>
            You rely on another service for authentication
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Other authenticator apps</Subtitle>
          <List>
            <li>It’s me</li>
            <li>Yoti</li>
            <li>Voiceit</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>Often used as a second factor</Subtitle>
        </Slide>

        <Slide style={{ background: "#99c794", color: "#fff" }}>
          <Title>Web Authentication API 🤩</Title>
        </Slide>
        <Slide style={{ background: "#99c794", color: "#fff" }}>
          <Title>Webauthn 🤩</Title>
        </Slide>
        <Slide>
          <Subtitle>Key based authentication</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Hardware authenticator</Subtitle>
        </Slide>
        <Slide>
          <Image src={USBAUthenticator} alt="USB Authenticator" />
        </Slide>
        <Slide>
          <List>
            <li>USB</li>
            <li>BLE</li>
            <li>NFC</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>Who has one?</Subtitle>
        </Slide>
        <Slide>
          <Webauthn />
        </Slide>
        <Slide>
          <Subtitle>
            Most modern devices have a built in authenticator device
          </Subtitle>
        </Slide>
        <Slide>
          <Webauthn platform />
        </Slide>
        <Slide>
          <Subtitle style={{ fontSize: "20rem" }}>🎉</Subtitle>
        </Slide>

        <Slide>
          <Subtitle>How dos this work?</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>We first need to create new credentials</Subtitle>
        </Slide>
        <Slide>
          <Image src={Webauthn1} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn2} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn3} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn4} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn5} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn6} alt="Webauthn schema" />
        </Slide>

        <Slide>
          <Subtitle>Once registered, we can authenticate</Subtitle>
        </Slide>
        <Slide>
          <Image src={Webauthn1} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn7} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn8} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn4} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn5} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn6} alt="Webauthn schema" />
        </Slide>

        <Slide>
          <Subtitle>Let's look at some code</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Create new credentials</Subtitle>
        </Slide>
        <Slide>
          <Code code={code1} />
        </Slide>
        <Slide>
          <Code code={code2} />
        </Slide>
        <Slide>
          <Code code={code3} />
        </Slide>
        <Slide>
          <Code code={code4} />
        </Slide>
        <Slide>
          <Code code={code5} />
        </Slide>
        <Slide>
          <Code code={code6} />
        </Slide>

        <Slide>
          <Subtitle>Use the created credentials</Subtitle>
        </Slide>
        <Slide>
          <Code code={code7} />
        </Slide>
        <Slide>
          <Code code={code8} />
        </Slide>
        <Slide>
          <Code code={code9} />
        </Slide>
        <Slide>
          <Code code={code10} />
        </Slide>
        <Slide>
          <Code code={code11} />
        </Slide>

        <Slide>
          <Subtitle>Some issues still to be solved</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>User credential management</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Cross devices credentials</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Lost/stolen authenticator device recovery</Subtitle>
        </Slide>

        <Slide>
          <Subtitle>It's a W3C Recommendation!</Subtitle>
        </Slide>
        <Slide>
          <List>
            <li>Chrome 67</li>
            <li>Firefox 60</li>
            <li>Edge 17723</li>
            <li>Safari Tech Preview (behind a flag)</li>
          </List>
        </Slide>

        <Slide>
          <Subtitle>So where can I use this already?</Subtitle>
        </Slide>
        <Slide>
          <List>
            <li>Google</li>
            <li>Github</li>
            <li>...</li>
          </List>
        </Slide>

        <Slide>
          <Browser url="https://webauthn.me" />
        </Slide>

        <Slide>
          <Subtitle>Let's summarize</Subtitle>
          <List>
            <li>Boo passwords!</li>
            <li>One time passwords are cool!</li>
            <li>Webauthn is even cooler!!</li>
          </List>
        </Slide>
        <Slide>
          <List>
            <li>
              <a href="https://webauthn.me" target="_blank">
                https://webauthn.me
              </a>
            </li>
            <li>
              <a href="https://auth0.com/blog" target="_blank">
                https://auth0.com/blog
              </a>
            </li>
            <li>
              <a href="https://www.w3.org/TR/webauthn" target="_blank">
                https://www.w3.org/TR/webauthn
              </a>
            </li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>https://1990.sambego.tech</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Thanks!</Subtitle>
        </Slide>
        <Slide>
          <Image
            src={Poes}
            alt="I've got cat stickers, tweet me @sambego"
            full
            color="#99c794"
          />
        </Slide>
      </Deck>
    );
  }
}

export default App;
