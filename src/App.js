import React, { Component } from 'react';
import { Deck, Slide, Title, Subtitle, Image, Columns, List, Text, Browser, Code } from '@sambego/diorama';
import Sam from './img/sam.png';
import Poes from './img/poes.jpg';
import Pattern from './img/pattern.png';
import IOSOtp from './img/iOS-otp.png';
import Magic from './img/magic-link.png';
import GoogleAuthenticator from './img/google-authenticator.png';
import Social from './img/social.png';
import USBAUthenticator from './img/usb.jpg';

class App extends Component {
  render() {
    const code1 = "async function() {\n  try {\n      const credentials = \n        await navigator.credentials.create(config);\n    } catch (error) {\n      ...\n    }\n}";
    const code2 = "{\n  ...\n  // random, cryptographically secure, at least 16 bytes\n  challenge: createRandomUint8Array().buffer,\n  ...\n }";
    const code3 = "{\n  ...\n  // relying party\n  rp: {\n    name: 'Fronteers'\n  },\n  ...\n }";
    const code4 = "{\n  ...\n  // user information\n  user: {\n    id: createRandomUint8Array(),\n    name: 'Sam Bellen',\n    displayName: 'Sambego'\n  },\n  ...\n }";
    const code5 = "{\n  ...\n  // information about the allowed authenticator device\n  authenticatorSelection: {  \n    // optional, can also be 'cross-platform'\n    authenticatorAttachment: 'platform',\n    // optional, can also be 'require ' and 'discouraged'\n    userVerification: 'preferred'\n  },\n  ...\n }";
    const code6 = "{\n  ...\n  // information about the attestation, to prove the user's identity\n  // can also be 'indirect' and 'non ' to remove identifying information\n  attestation: 'direct',\n  ...\n }";
    const code7 = "async function() {\n  try {\n    const credentials = \n      await navigator.credentials.create(createConfig);\n\n    const attestation = \n      await navigator.credentials.get(getConfig);\n  } catch (error) {\n    ...\n  }\n}";
    const code8 = "const getConfig = {\n  publicKey: {\n    ...\n  }\n}";
    const code9 = "{\n  ...\n  // random, cryptographically secure, at least 16 bytes\n  challenge: createRandomUint8Array().buffer,\n  ...\n}";
    const code10 = "{\n  ...\n  // The allowed credentials\n  allowCredentials: [\n    {\n      id: credentials.rawId,\n      type: 'public-key'\n    }\n  ],\n  ...\n}";
    const code11 = "{\n  ...\n  // information about the allowed authenticator device\n  authenticatorSelection: { \n    // optional, can also be 'required' and 'discouraged'\n    userVerification: 'preferred' \n  }\n  ...\n}";


    return (
      <Deck>
      <Slide style={{background: '#99c794', color: '#fff'}}>
        <Title>Passwords are so 1990</Title>
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
                <li>@sambego</li>
              </List>
            </div>
          </Columns>
      </Slide>
      <Slide>
        <Image src={Poes} alt="I've got cat stickers, tweet me @sambego" full color="#99c794" />
        <Subtitle style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate3d(-50%, -50%, 0)', color: '#fff', margin: 0}}>Tweet me @sambego</Subtitle>
      </Slide>
      <Slide style={{background: '#99c794', color: '#fff'}}>
        <Title>Passwords 😭</Title>
      </Slide>
      <Slide>
        <Subtitle>What's a password?</Subtitle>
      </Slide>
      <Slide>
        <Text style={{background: '#99c794', padding: '1rem 2rem', marginBottom: '4rem', fontWeight: 'bold'}}>A string</Text>
        <Subtitle>Password1234</Subtitle>
      </Slide>
      <Slide>
        <Text style={{background: '#99c794', padding: '1rem 2rem', marginBottom: '4rem', fontWeight: 'bold'}}>A string</Text>
        <Subtitle>colddog*</Subtitle>
        <Text style={{marginTop: '4rem', fontStyle: 'italic'}}>* My first password 🙊</Text>
      </Slide>
      <Slide>
        <Text style={{background: '#99c794', padding: '1rem 2rem', marginBottom: '4rem', fontWeight: 'bold'}}>A string</Text>
        <Subtitle>Zbety6FZiH6XNn3dsziGRB6+MBGDYU?</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#ec5f67"}}>Can be hard to remember if complex. A passwordmanager can help!</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#99c794"}}>Can be hard to guess (by others) if complex</Subtitle>
      </Slide>


      <Slide>
        <Text style={{background: '#99c794', padding: '1rem 2rem', marginBottom: '4rem', fontWeight: 'bold'}}>A pincode</Text>
        <Subtitle>1 2 3 4</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#ec5f67"}}>Not so hard to guess (Often combined with a maximum allowed number of guesses)</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#99c794"}}>Fairly easy to remember</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#99c794"}}>Usually used only with access to a physical thing (card, phone, keypad, …)</Subtitle>
      </Slide>



      <Slide>
        <Text style={{background: '#99c794', padding: '1rem 2rem', marginBottom: '4rem', fontWeight: 'bold'}}>A pattern</Text>
        <Image src={Pattern} alt="a pattern"/>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#ec5f67"}}>Touchscreens often reveal the pattern as “dirty” spots.</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#ec5f67"}}>People often use their initial letter, lucky number, …</Subtitle>
      </Slide>
      <Slide>
        <Subtitle style={{color: "#99c794"}}>Easy to remember</Subtitle>
      </Slide>

      <Slide>
        <Subtitle>Anything that’s a shared secret!</Subtitle>
      </Slide>
      <Slide>
        <Subtitle>So what’s the problem with passwords?</Subtitle>
      </Slide>
      <Slide>
        <Browser url="https://codepen.io/Sambego/pen/xMNZxW?editors=0010" />
      </Slide>
      <Slide>
        <Subtitle>Passwords can be annoying!</Subtitle>
      </Slide>

      <Slide style={{background: '#99c794', color: '#fff'}}>
        <Title>Passwordless 😁</Title>
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
        <Image src={IOSOtp} alt="iOS let's you fill in one time passwords with the click of a button" style={{objectFit: 'contain'}} />
      </Slide>
      <Slide>
        <Subtitle>Sent in an email</Subtitle>
      </Slide>
      <Slide>
        <Image src={Magic} alt="Slack magic link" style={{objectFit: 'contain'}}  />
      </Slide>
      <Slide>
        <Subtitle>Authenticator app</Subtitle>
      </Slide>
      <Slide>
        <Image src={GoogleAuthenticator} alt="The Google authenticator app" style={{objectFit: 'contain'}} />
      </Slide>
      <Slide>
        <Subtitle>Social</Subtitle>
      </Slide>
      <Slide>
        <Image src={Social} alt="The Google authenticator app" />
      </Slide>

      <Slide style={{background: '#99c794', color: '#fff'}}>
        <Title>Web Authentication API 🤩</Title>
      </Slide>
      <Slide style={{background: '#99c794', color: '#fff'}}>
        <Title>Webauthn 🤩</Title>
      </Slide>
      <Slide>
        <Subtitle>Public key based authentication</Subtitle>
      </Slide>
      <Slide>
        <Subtitle>Hardware authenticator</Subtitle>
      </Slide>
      <Slide>
        <Image src={USBAUthenticator} alt="USB Authenticator" />
      </Slide>
      <Slide>
        <Subtitle>Who has one?</Subtitle>
      </Slide>
      <Slide>
        <Browser url="https://codepen.io/Sambego/pen/xMNZxW?editors=0010" />
      </Slide>
      <Slide>
        <Subtitle>Doesn't work in cross origin iframes 🤷‍♂️</Subtitle>
      </Slide>
      <Slide>
        <Text style={{maxWidth: '80vw', wordBreak: 'break-all'}}>https://s.codepen.io/Sambego/debug/xMNZxW/DqrDdKvRxwPr#/simple</Text>
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
        <Subtitle>🎉🎉🎉🎉</Subtitle>
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
        <Subtitle>https://1990.sambego.tech</Subtitle>
      </Slide>
      <Slide>
        <Subtitle>Thanks</Subtitle>
      </Slide>
      <Slide>
        <Image src={Poes} alt="I've got cat stickers, tweet me @sambego" full color="#99c794" />
      </Slide>
    </Deck>
    );
  }
}

export default App;
