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
  Video,
  Highlight
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
import cc from "./img/cc.svg";
import brave from "./img/brave.png";
import joindin from "./img/joindin.png";

import future from "./video/future.mp4";

class App extends Component {
  render() {
    const code1 =
      "navigator.credentials.create({\n  publicKey: {\n    ...\n  }\n});";
    const code2 =
      "publicKey: {\n  ...\n  challenge: Uint8Array([1, 2, ... 3, 4]),\n  ...\n }";
    const code3 =
      "publicKey: {\n  ...\n  rp: {\n    id: 'sambego.tech'\n    name: 'Sambego'\n  },\n  ...\n }";
    const code4 =
      "publicKey: {\n  ...\n  user: {\n    id: Uint8Array([1, 2, ... 3, 4]),\n    name: 'Sam Bellen',\n    displayName: 'Sambego'\n  },\n  ...\n }";
    const codePubKeyCred =
      "publicKey: {\n  ...\n  pubKeyCredParams: [\n    {  \n      type: 'public-key',\n      alg: -7,\n    }\n  ],\n  ...\n }";
    const codeTimeout =
      "publicKey: {\n  ...\n  timeout: 15000,\n  ...\n }";
    const codeExclude =
      "publicKey: {\n  ...\n  excludeCredentials: [\n    {\n      type: 'public-key',\n      id: Uint8Array([4, 3, ... 2, 1]),\n      transports: ['USB', 'NFC', 'BLE', 'internal']\n    },\n  ...\n }";
    const code5 =
      "publicKey: {\n  ...\n  authenticatorSelection: {  \n    authenticatorAttachment: 'platform',\n    userVerification: 'preferred'\n    requireResidentKey: true,\n  },\n  ...\n }";
    const code6 =
      "publicKey: {\n  ...\n  attestation: 'direct',\n  ...\n }";
    const code7 =
      "navigator.credentials.get({\n  publicKey: {\n    ...\n  }\n});";
    const code8 = "const getConfig = {\n  publicKey: {\n    ...\n  }\n}";
    const code9 =
      "publicKey: {\n  ...\n  challenge: Uint8Array([1, 2, ... 3, 4]),\n  ...\n}";
    const code10 =
      "publicKey: {\n  ...\n  allowCredentials: [\n    {\n      type: 'public-key',\n      id: Uint8Array([1, 2, ... 3, 4]),\n      transports: ['USB', 'NFC', 'BLE']\n    }\n  ],\n  ...\n}";
    const code11 =
      "publicKey: {\n  ...\n  userVerification: 'preferred',\n  ...\n}";
    const resCredcode =
      "publicKey: {\n  ...\n  authenticatorSelection: {  \n    ...\n    requireResidentKey: true\n  },\n  ...\n }";
    return (
      <Deck footer={<p style={{position: 'absolute', bottom: '-1rem', left: '2rem', fontSize: '3rem', fontWeight: 'bold'}} navigation>@sambego</p>}>
        <Slide style={{ background: "#99c794", color: "#fff" }}>
          <Video src={future} loop autoplay full color="#99c794" style={{overflow: 'hidden'}}/>
          <Title style={{ color: "#ffffff", position: "relative", zIndex: 1 }}>
            Passwords are so 1990
          </Title>
          <Image src={cc} style={{position: 'fixed', bottom: '2rem', left: '2rem', width: '10%'}} alt="Creative commons" />
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Image src={Sam} alt="A picture of me" full color="#99c794" />
            </div>
            <div>
              <Subtitle>Sam Bellen</Subtitle>
              <List>
                <li>Developer Advocate Engineer</li>
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
          <Subtitle>Passwords can get stolen!</Subtitle>
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
            <li>Lightning</li>
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
          <Subtitle>How does this work?</Subtitle>
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
        <Slide  notes="The challenge is a buffer of randomly generated bytes with a minimum of 16 bytes. This is generated on the server using a cryptographically secure random number generator. By generating the challenge on the server we can prevent 'replay attacks'. The authenticator will sign this along with other data.">
          <Code code={code2} />
        </Slide>
        <Slide notes="This is the entity which is responsible for handling all things authentication, usually your authorization server or identity provider (IdP). The id must be the current domain or a subset of it. The name is used to describe the relying party.">
          <Code code={code3} />
        </Slide>
        <Slide notes="The user object contains profile information about the user like its name and preferred display name. It also contains a user id which is again a buffer with byte values. To ensure secure operation, authentication and authorization decisions must be made based on this user id, not the name or display name. The user id can not contain information that can identify a user, like a username or an email.">
          <Code code={code4} />
        </Slide>
        <Slide notes="This is a collection of accepted public key types. The algorithm (alg) is a number that references a key type in this list of COSE algorithms.">
          <Code code={codePubKeyCred} />
          <p style={{marginTop: '3rem', fontSize: '3rem'}}><a href="https://www.iana.org/assignments/cose/cose.xhtml#algorithms" target="_blank">https://www.iana.org/assignments/cose/cose.xhtml#algorithms</a></p>
        </Slide>
        <Slide notes="Defines the maximum time in milliseconds the user has to complete the registration action. This can be touching their authenticator device, TouchID or any other method used to interact with an authenticator.">
          <Code code={codeTimeout} />
        </Slide>
        <Slide notes="You can use this if you wish to limit the creation of multiple credentials for the same account on a single authenticator. Your browser will throw an error if you try to create a new credential while one of the public keys in this collection already exists on the authenticator.">
          <Code code={codeExclude} />
        </Slide>
        <Slide notes="You can limit the type of authenticator devices you allow to register new credentials with part of the configuration.    Authenticator Attachment  Only allow platform authenticators like TouchID or Windows Hello. You can also do the opposite, and only allow cross-platform authenticators like a Yubikey or a Google Titan Security Key.    Require Resident Key  When set to true, the private key is stored on the authenticator. This means that the user can login without entering a username. This can be done with the user.id property we’ve seen before. The relying party will create a user handle which is stored in the resident key on the authenticator when creating a new credential. When authenticating the authenticator will return the user handle, so the relying party can look up the user linked to this user handle.    User Verification  Use the user verification option to only allow or discourage authenticators that verify the user is performing the registration. By checking a fingerprint with TouchID or doing facial recognition with Windows Hello the authenticator can verify the user performing the registration.">
          <Code code={code5} />
        </Slide>
        <Slide notes="An attestation object is returned when completing the registration. With this parameter, you can specify if you want the attestation data from the authenticator as is (direct), or you're fine with anonymized (indirect) data.">
          <Code code={code6} />
        </Slide>

        <Slide>
          <Subtitle>Use the created credentials</Subtitle>
        </Slide>
        <Slide>
          <Code code={code7} />
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
          <Subtitle>Resident credentials</Subtitle>
        </Slide>
        <Slide>
          <Code code={resCredcode} />
        </Slide>
        <Slide>
          <List>
            <li>
              <a href="https://webauthn.me/debugger" target="_blank">
                https://webauthn.me/debugger
              </a>
            </li>
          </List>
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
            <li>Safari 13</li>
            <li>Brave (iOS) 1.11.4</li>
          </List>
        </Slide>
        <Slide>
          <Image src={brave} alt="Screenshot of the yubikey 5Ci in action on Brave for iOS" contain />
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
          <List>
            <li>
              <a href="https://webauthn.me" target="_blank">
                https://webauthn.me
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
          <List>
            <li>
              <a href="https://auth0.com/blog" target="_blank">
                https://auth0.com/blog
              </a>
            </li>
            <li>
              <a href="https://auth0.com/blog/enhancing-webauthn-me-with-the-online-debugger-tool/" target="_blank">
                https://auth0.com/blog/enhancing-webauthn-me-with-the-online-debugger-tool/
              </a>
            </li>
            <li>
              <a href="https://auth0.com/blog/a-look-at-webauthn-resident-credentials/" target="_blank">
                https://auth0.com/blog/a-look-at-webauthn-resident-credentials/
              </a>
            </li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>https://1990.sambego.tech</Subtitle>
        </Slide>
        <Slide>
          <Image src={joindin} alt="QR code to the JoindIn page" />
          <Text>https://joind.in/event/webcamp-zagreb-2019/passwords-are-so-1990</Text>
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
