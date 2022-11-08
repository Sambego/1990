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
  Highlight,
  Footer,
} from "@sambego/diorama";

import AnnoyingForm from "./Components/Annoying";
import Webauthn from "./Components/Webauthn";
import Passkey from "./Components/Passkey";

import Sam from "./img/sam.png";
import NPM from "./video/npm.mp4";
import Poes from "./img/poes.jpg";
import Pattern from "./img/pattern.png";
import Pattern2 from "./img/pattern-2.png";
import IOSOtp from "./img/iOS-otp.png";
import Magic from "./img/magic-link.png";
import GoogleAuthenticator from "./img/google-authenticator.png";
import Social from "./img/social.png";
import AUthenticators from "./img/authenticators.jpg";
import FastForward from "./img/fast-forward.svg";
import BreachedPW from "./img/breached-pw.png";
import Checkup from "./img/checkup2.png";
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
import Webauthn9 from "./img/webauthn-9.svg";
import Webauthn10 from "./img/webauthn-10.svg";
import cc from "./img/cc.svg";
import IOSReg from "./img/IOS-reg.png";
import IOSLogin from "./img/IOS-login.png";
import ChromeManageCreds from "./img/chrome-manage-creds.png";
import YubicoManager from "./img/yubico-manager.png";
import Joel from "./img/joel.jpg";
import Debugger from "./img/debugger.png";
import Auth0Webauthn1 from "./img/Auth0-webauthn-1.png";
import Auth0Webauthn2 from "./img/Auth0-webauthn-2.png";
import Auth0Webauthn3 from "./img/Auth0-webauthn-3.png";
import Auth0CredentialGuard from "./img/credential-guard.png";
import Push1 from "./img/push1.png";
import Push2 from "./img/push2.png";

import Trezor from "./video/trezor.mp4";
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
    const codeTimeout = "publicKey: {\n  ...\n  timeout: 15000,\n  ...\n }";
    const codeExclude =
      "publicKey: {\n  ...\n  excludeCredentials: [\n    {\n      type: 'public-key',\n      id: Uint8Array([4, 3, ... 2, 1]),\n      transports: ['USB', 'NFC', 'BLE', 'internal']\n    },\n  ...\n }";
    const code5 =
      "publicKey: {\n  ...\n  authenticatorSelection: {  \n    authenticatorAttachment: 'platform',\n    userVerification: 'preferred',\n    requireResidentKey: true,\n  },\n  ...\n }";
    const code6 = "publicKey: {\n  ...\n  attestation: 'direct',\n  ...\n }";
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
      "navigator.credentials.create({\n  publicKey: {\n    ...\n    authenticatorSelection: {  \n      ...\n      requireResidentKey: true\n    }\n  }\n});";
    const mediationcode =
      "navigator.credentials.get({\n  ...\n  mediation: \"silent\"| \"optional\" | \"conditional\" | \"required\"\n});";
    const mediationcode2 =
      "<input \n  type=\"text\" \n  name=\"name\" \n  autocomplete=\"username webauthn\"\n\/>";
    const isAvailableCode =
      "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();";
    const createBackend1 = "{\n  \"rawId\": \"010d...8c\",\n  \"id\": \"AQ...ow\",\n  \"type\": \"public-key\",\n  \"response\": {\n    \"clientDataJSON\": {...},\n    \"attestationObject\": {...}\n  }\n}";
    const createBackend2 = "{\n  \"clientDataJSON\": {\n    \"type\": \"webauthn.create\",\n    \"challenge\": \"FuRfP7QOl...RiHq3iytg\",\n    \"origin\": \"https://webauthn.me\",\n    \"crossOrigin\": false,\n  }\n}";
    const createBackend3 = "{\n  \"attestationObject\": {\n    \"fmt\": \"none\",\n    \"attStmt\": {...},\n    \"authData\": {\n      \"rpIdHash\": \"f9...ad\",\n      \"flags\": {...},\n      \"attestedCredentialData\": {\n        \"credentialPublicKey\": {\n          \"kty\": \"EC\",\n          \"alg\": \"ECDSA_w_SHA256\",\n          \"crv\": \"P-256\",\n          \"x\": \"ig...JvGg=\",\n          \"y\": \"PK...06c4=\"\n        }\n      }\n    }\n  }\n}";
    const getBackend = "{\n  \"signature\": \"304...85c\",\n  \"userHandle\": \"5b4...d98\",\n  \"clientDataJSON\": {\n    \"type\": \"webauthn.get\",\n    \"challenge\": \"FuRfP7QOlAWW6moq2oU4MR9Mlxi6pJ3LqJRiHq3iytg\",\n    \"origin\": \"https://webauthn.me\",\n    \"crossOrigin\": false\n  },\n  \"authenticatorData\": {\n    \"rpIdHash\": \"f95...cd2e1ad\",\n    \"signCount\": 1600698991\n  }\n}";
    
    return (
      // <Deck navigation footer={footer}>
      <Deck>
        <Slide style={{ background: "#6699CC", color: "#fff" }}>
          <Title style={{ color: "#ffffff", position: "relative", zIndex: 1 }}>
            Life Beyond Passwords
          </Title>
          <Image
            src={cc}
            style={{
              position: "fixed",
              bottom: "2rem",
              left: "2rem",
              width: "10%",
              zIndex: 2,
            }}
            alt="Creative commons"
          />
        </Slide>
        <Slide>
          <Columns>
            <div>
              <Image src={Sam} alt="A picture of me" full color="#6699CC" />
            </div>
            <div>
              <Subtitle>Sam Bellen</Subtitle>
              <List>
                <li>Principal Developer Advocate</li>
                <li>Okta</li>
                <li>Google Developer Expert</li>
                <li>@sambego</li>
              </List>
            </div>
          </Columns>
        </Slide>
        <Slide>
          <List>
            <Subtitle style={{ display: "inline-block" }}>Summary</Subtitle>
            <li>Common Password types</li>
            <li>Passwordless authentication</li>
            <li>The Web authentication API</li>
          </List>
        </Slide>
        
        <Slide style={{ background: "#6699CC", color: "#000" }}>
          <Title>Types of passwords</Title>
        </Slide>
        <Slide>
          <Subtitle>What's a password?</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Anything that’s a <Highlight>shared secret</Highlight>!</Subtitle>
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#6699CC",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            string
          </Text>
          <Subtitle style={{
            padding: '3rem 5rem',
            fontSize: '4rem',
            background: '#d9eafa',
            border: '2px solid #6fa9e2',
            borderRadius: '5px',
            lineHeight: 1,
            fontFamily: 'monospace',
            fontWeight: 'bold'
          }}>************</Subtitle>
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#6699CC",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            string
          </Text>
          <Subtitle style={{
            padding: '3rem 5rem',
            fontSize: '4rem',
            background: '#d9eafa',
            border: '2px solid #6fa9e2',
            borderRadius: '5px',
            lineHeight: 1
          }}>Password1234</Subtitle>
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#6699CC",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            string
          </Text>
          <Subtitle style={{
            padding: '3rem 5rem',
            fontSize: '4rem',
            background: '#d9eafa',
            border: '2px solid #6fa9e2',
            borderRadius: '5px',
            lineHeight: 1
          }}>Zbety6FZiH6XNn3dsziGRB6+MBGDYU?</Subtitle>
        </Slide>
        <Slide>
          <Text
            style={{
              background: "#6699CC",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            string
          </Text>
          <Subtitle style={{
            padding: '3rem 5rem',
            fontSize: '4rem',
            background: '#d9eafa',
            border: '2px solid #6fa9e2',
            borderRadius: '5px',
            lineHeight: 1
          }}>correct-horse-battery-staple</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Can be <Highlight style={{background: '#99c794'}}>hard to guess (by others)</Highlight> if complex
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Can be <Highlight style={{background: '#ec5f67'}}>hard to remember</Highlight> if complex
          </Subtitle>
          <br/>
          <br/>
          <Text>A password manager can help!</Text>
        </Slide>

        <Slide>
          <Text
            style={{
              background: "#6699CC",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            pincode
          </Text>
          <Subtitle style={{
            padding: '3rem 5rem',
            fontSize: '4rem',
            background: '#d9eafa',
            border: '2px solid #6fa9e2',
            borderRadius: '5px',
            lineHeight: 1
          }}>1 2 3 4</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Fairly <Highlight style={{background: '#99c794'}}>easy to remember</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Usually used only with access to <Highlight>a physical thing</Highlight>
          </Subtitle>
          <br/>
          <br/>
          <Text>(card, phone, keypad, …)</Text>
        </Slide>
        <Slide>
          <Subtitle>
            Pincodes are <Highlight style={{background: '#ec5f67'}}>Not so hard to guess</Highlight>
          </Subtitle>
        </Slide>

        <Slide>
          <Text
            style={{
              background: "#6699CC",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            pattern
          </Text>
          <Image src={Pattern} alt="a pattern" />
        </Slide>
        <Slide>
          <Text
            style={{
            background: "#6699CC",
              padding: "1rem 2rem",
              marginBottom: "4rem",
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}
          >
            pattern
          </Text>
          <Image src={Pattern2} alt="a pattern" />
        </Slide>
        <Slide>
          <Subtitle><Highlight style={{background: '#99c794'}}>Easy to remember</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Touchscreens often <Highlight style={{background:"#ec5f67"}}>reveal the pattern</Highlight> as “dirty” spots.
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            People often use <Highlight style={{background:"#ec5f67"}}>their initial letter, lucky number</Highlight>
          </Subtitle>
        </Slide>

        <Slide>
          <Subtitle>So what’s <Highlight>my problem</Highlight> with passwords?</Subtitle>
        </Slide>
        <Slide>
          <AnnoyingForm />
        </Slide>
        <Slide>
          <Subtitle style={{ fontSize: "20rem" }}>🤬</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Passwords <Highlight>can be annoying</Highlight>!</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Use a <Highlight>password manager</Highlight> to help you remember!</Subtitle>
        </Slide>

        <Slide notes="Fortunately in the data breaches I’ll highlight in the next slides, no raw, plain text passwords were stolen. But still not all companies treat passwords as they should!">
          <Subtitle>User data can get <Highlight>stolen</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Data breaches <Highlight>don't always include passwords</Highlight>.</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Sometimes <Highlight>they do</Highlight>.</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Sometimes in <Highlight>plain text</Highlight>.</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>😭</Subtitle>
        </Slide>

        {/* <Slide notes="Private data, no passwords">
          <Subtitle style={{ color: "#99c794" }}>January 2019</Subtitle>
          <Subtitle>
            Marriott Hotels
            <br /> -<br /> 383 million
          </Subtitle>
        </Slide>
        <Slide notes="including 22,000 passwords stored in plain text">
          <Subtitle style={{ color: "#99c794" }}>April 2019</Subtitle>
          <Subtitle>
            Facebook <br /> -<br /> 540 million
          </Subtitle>
        </Slide>
        <Slide notes="Personal data, Credit cards in the open">
          <Subtitle style={{ color: "#99c794" }}>August 2019</Subtitle>
          <Subtitle>
            MoviePass <br /> -<br /> 160 million
          </Subtitle>
        </Slide>
        <Slide notes="Personal data, no passwords">
          <Subtitle style={{ color: "#99c794" }}>Septemner 2019</Subtitle>
          <Subtitle>
            Words with Friends <br /> -<br /> 218 million
          </Subtitle>
        </Slide>
        <Slide notes="personal data, including email addresses, employers, locations, job titles, names, phone numbers and social media profiles, no passwords">
          <Subtitle style={{ color: "#99c794" }}>Oktober 2019</Subtitle>
          <Subtitle>
            People Data Labs <br /> -<br /> 1.2 billion
          </Subtitle>
        </Slide> */}

        <Slide>
          <Image src={BreachedPW} alt="Auth0 breached password protection" />
        </Slide>
        <Slide>
          <Image src={Auth0CredentialGuard} alt="Auth0 breached credential guard" />
        </Slide>
        <Slide>
          <Image src={Checkup} alt="Google Chrome password checkup extension" />
        </Slide>
        {/* <Slide>
          <Subtitle>Tips for a good password</Subtitle>
          <List>
            <li>Use a reasonably <Highlight>long</Highlight> password</li>
            <li>Don’t use <Highlight>personal data</Highlight></li>
            <li>Don’t <Highlight>re-use</Highlight> passwords</li>
          </List>
        </Slide> */}

        <Slide style={{ background: "#6699CC"}}>
          <Title>Passwordless</Title>
        </Slide>
        <Slide style={{background: '#6699CC'}}>
          <Subtitle>One time password</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Valid for <Highlight style={{background: '#99c794'}}>one time use</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Often <Highlight style={{background: '#99c794'}}>expire</Highlight> after a certain time</Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight style={{background: '#99c794'}}>Sent directly</Highlight> to the user</Subtitle>
        </Slide>
        <Slide style={{background: '#6699CC'}}>
          <Subtitle>Sent in an SMS</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            iOS and Android let you fill in the OTP with the <Highlight style={{background: '#99c794'}}>press of a button</Highlight>
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
          <Subtitle>
            SMS messages can be <Highlight style={{background: '#ec5f67'}}>intercepted</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            You need your cellphone <Highlight style={{background: '#ec5f67'}}>on hand</Highlight>
          </Subtitle>
        </Slide>

        <Slide style={{background: '#6699CC'}}>
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
          <Subtitle>
            You don't need a <Highlight style={{background: '#99c794'}}>second device</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Emails can be <Highlight style={{background: '#ec5f67'}}>intercepted</Highlight>
          </Subtitle>
        </Slide>

        <Slide style={{background: '#6699CC'}}>
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
          <Subtitle>Time based</Subtitle>
        </Slide>
        <Slide>
          <Image
            src={GoogleAuthenticatorExp}
            alt="The Google authenticator app"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Subtitle>Push based</Subtitle>
        </Slide>
        <Slide>
          <Image
            src={Push2}
            alt="A Guardian push message"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Image
            src={Push1}
            alt="The Guardian app"
            style={{ objectFit: "contain" }}
          />
        </Slide>

        <Slide>
          <Subtitle>
            Relies on a <Highlight style={{background: "#ec5f67"}}>shared secret</Highlight> between the app and authentication service
          </Subtitle>
        </Slide>

        <Slide style={{background: '#6699CC'}}>
          <Subtitle>Social</Subtitle>
        </Slide>
        <Slide>
          <Image src={Social} alt="The Google authenticator app" />
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight style={{background: '#99c794'}}>One less password</Highlight> to remember
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            Only give a password to a <Highlight style={{background: '#99c794'}}>service you trust</Highlight>
          </Subtitle>
        </Slide>
        <Slide>
          <Subtitle>
            <Highlight style={{background: "#ec5f67"}}>You rely on another service</Highlight> for authentication
          </Subtitle>
        </Slide>
        
        <Slide>
          <Subtitle>One Time Passwords are often used as <Highlight>a second factor</Highlight></Subtitle>
        </Slide>

        <Slide style={{ background: "#6699CC"}}>
          <Title>Web Authentication API</Title>
        </Slide>
        <Slide style={{ background: "#6699CC"}}>
          <Title>WebAuthN</Title>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Key based</Highlight> authentication</Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Hardware</Highlight> authenticator</Subtitle>
        </Slide>
        <Slide>
          <Image src={AUthenticators} alt="USB Authenticator" />
        </Slide>
        <Slide>
          <List>
            <li>USB</li>
            <li>Lightning</li>
            <li>Bluetooth Low Energy</li>
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
          <Subtitle style={{ fontSize: "20rem" }}>🎉</Subtitle>
        </Slide>

        <Slide>
          <Subtitle>How does this <Highlight>work</Highlight>?</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>We first need to <Highlight>create new credentials</Highlight></Subtitle>
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
          <Subtitle>Once registered, we can <Highlight>authenticate</Highlight></Subtitle>
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
          <Image src={Webauthn9} alt="Webauthn schema" />
        </Slide>
        <Slide>
          <Image src={Webauthn10} alt="Webauthn schema" />
        </Slide>

        {/* <Slide>
          <Subtitle>To recap, registering</Subtitle>
          <List style={{ padding: "0 50px" }}>
            <li>Request a challenge</li>
            <li>Sign that challenge</li>
            <li>Send back the signed challenge, <br/>public key and private key ID</li>
            <li>Save this data together with a username</li>
          </List>
        </Slide>
        <Slide>
          <Subtitle>To recap, authenticating</Subtitle>
          <List style={{ padding: "0 50px" }}>
            <li>Request a challenge</li>
            <li>Request the private key ID for the user</li>
            <li>
              Sign that challenge using the same private key used when
              registering
            </li>
            <li>Send the signed challenge back</li>
          </List>
        </Slide> */}

        <Slide>
          <Subtitle>Let's look at some <Highlight>code</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Create</Highlight> new credentials</Subtitle>
        </Slide>
        <Slide>
          <Code code={code1} />
        </Slide>
        <Slide notes="The challenge is a buffer of randomly generated bytes with a minimum of 16 bytes. This is generated on the server using a cryptographically secure random number generator. By generating the challenge on the server we can prevent 'replay attacks'. The authenticator will sign this along with other data.">
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
          <p style={{ marginTop: "3rem", fontSize: "3rem" }}>
            <a
              href="https://www.iana.org/assignments/cose/cose.xhtml#algorithms"
              target="_blank"
            >
              https://www.iana.org/assignments/cose/cose.xhtml#algorithms
            </a>
          </p>
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
          <Subtitle><Highlight>Use</Highlight> the created credentials</Subtitle>
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
          <Subtitle>What to do on the <Highlight>backend</Highlight>?</Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Creating</Highlight> a new credential</Subtitle>
        </Slide>
        <Slide>
          <Code code={createBackend1} />
        </Slide>
        <Slide>
          <Code code={createBackend2} />
        </Slide>
        <Slide notes="attStmt: lets call it the signature, Flags contain more info like was the user preset, was the user verified">
          <Code code={createBackend3} />
        </Slide>
        <Slide><Subtitle>Validate the returned authenticator data. <br/><br/><Highlight>Is there an ID? </Highlight></Subtitle></Slide>
        <Slide><Subtitle>Validate the returned client data. <br/><br/><Highlight>Challenge, Origin, ...</Highlight></Subtitle></Slide>
        <Slide><Subtitle>Validate the returned attestation data <br/><br/><Highlight>User verified, ...</Highlight></Subtitle></Slide>
        <Slide><Subtitle>Save the <Highlight>credential ID</Highlight> and <Highlight>pulic key</Highlight> data</Subtitle></Slide>

        <Slide><Subtitle>When <Highlight>verifying</Highlight> an existing credential</Subtitle></Slide>
        <Slide>
          <Code code={getBackend} />
        </Slide>
        <Slide><Subtitle>Validate <Highlight>user, challenge, and origin</Highlight></Subtitle></Slide>
        <Slide><Subtitle>Validate the returned <Highlight>signature</Highlight></Subtitle></Slide>
        
        {/* <Slide>
          <Subtitle><Highlight>Resident</Highlight> credentials</Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Discoverable</Highlight> credentials</Subtitle>
        </Slide>
        <Slide>
          <Code code={resCredcode} />
        </Slide> */}
        {/* <Slide>
          <Webauthn resident/>
        </Slide> */}

        {/* <Slide>
          <Subtitle>User <Highlight>mediation</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Code code={mediationcode} />
        </Slide> */}
        {/* <Slide>
          <Code code={mediationcode2} />
        </Slide> */}
                
        {/* <Slide>
          <Image contain src={Debugger} alt="Chrome devtools WebAuthn debugger" />
        </Slide> */}
        {/* <Slide>
          <List>
            <li>
              <a href="https://webauthn.me/debugger" target="_blank">
                https://webauthn.me/debugger
              </a>
            </li>
          </List>
        </Slide> */}

        <Slide>
          <Subtitle>What are the <Highlight>benefits</Highlight> of WebAuthn</Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Private/Public Key</Highlight> based authentication</Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Phishing</Highlight> resistant</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>You only <Highlight>store public data</Highlight> in your database</Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Fine-grained controll</Highlight> which kind of credentials to allow</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Better <Highlight>user experience</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>No more passwords!</Highlight></Subtitle>
        </Slide>
        
        <Slide>
          <Subtitle>Some <Highlight>issues</Highlight> still to be solved</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>User <Highlight>credential management</Highlight></Subtitle>
        </Slide>
        {/* <Slide>
          <Image
            src={ChromeManageCreds}
            alt="Chrome can manage some data"
            style={{ objectFit: "contain" }}
          />
        </Slide> */}
        <Slide>
          <Image
            src={YubicoManager}
            alt="Yubico manager"
            style={{ objectFit: "contain" }}
          />
        </Slide>
        <Slide>
          <Subtitle>This is <Highlight>solved</Highlight> with Authenticator devices that support <Highlight>CTAP 2.1</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle><Highlight>Cross device</Highlight> credentials</Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Lost/stolen authenticator <Highlight>device recovery</Highlight></Subtitle>
        </Slide>

        <Slide style={{ background: "#6699CC"}}>
          <Title>Passkeys</Title>
        </Slide>
        <Slide>
          <Subtitle>Passkeys are <Highlight>WebAuthn credentials</Highlight>, that are <Highlight>synced across devices</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle>This solves <Highlight>user credential management</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Passkeys can be <Highlight>managed in your platforns keychain</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle>This solves <Highlight>cross device credentials</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Subtitle>Passkeys are automatically <Highlight>synced across devices within an ecosystem</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Passkey />
        </Slide>
        <Slide>
          <Subtitle>Use <Highlight>existing passkey</Highlight> from <Highlight>another ecosystem</Highlight></Subtitle>
        </Slide>
        <Slide>
          <Passkey />
        </Slide>
        <Slide>
          <Subtitle>🎉</Subtitle>
        </Slide>

        <Slide>
          <Subtitle>Let's summarize</Subtitle>
          <List>
            <li>Boo passwords!</li>
            <li>One time passwords are cool!</li>
            <li>WebAuthn and passkeys are even cooler!!</li>
          </List>
        </Slide>
        
        <Slide>
          <Subtitle>
            <a href="https://a0.to/lbp-oktane22" target="_blank" style={{color: '#000'}}>
              a0.to/lbp-oktane22
            </a>
          </Subtitle>
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
          <Subtitle>Thanks!</Subtitle>
        </Slide>
      </Deck>
    );
  }
}

export default App;
