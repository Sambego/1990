import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./Form.css";
import {Subtitle} from '@sambego/diorama';

const Webauthn = ({ platform, resident }) => {
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState();
  const createRandomUIntArray = () => {
    const arr = new Uint8Array(32);
    crypto.getRandomValues(arr);

    return arr;
  };

  const attestationOptions = {
    challenge: createRandomUIntArray(),
    rp: {
      name: "Auth0",
    },
    user: {
      id: createRandomUIntArray(),
      name: "Sam Bellen",
      displayName: "Sambego"
    },
    attestation: "direct",
    authenticatorSelection: {
    },
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7
      }
    ]
  };

  if (platform) {
    attestationOptions.authenticatorSelection = {
      authenticatorAttachment: "platform"
    };
  } else if (!resident) {
    attestationOptions.authenticatorSelection = {
      authenticatorAttachment: "cross-platform"
    };
  }

  // if (resident) {
  //   attestationOptions.authenticatorSelection = {
  //     rerquireResidentKey: true,
  //   };
  // }

  const handleRegister = e => {
    e.preventDefault();

    // if (resident) {
    //   navigator.credentials.get({
    //     publicKey: {
    //       challenge: createRandomUIntArray()
    //     }
    //   }).then(response => {
    //     console.log(response);

    //     setSuccess(true);
    //     setResponse(response.id);
    //   }).catch(error => console.error(error));;
      
    // } else {
    navigator.credentials
      .create({
        publicKey: {
          ...attestationOptions,
        }
      })
      .then(response =>{
        console.log(response);
        setSuccess(true);
        setResponse(response.id);
      }).catch(error => console.error(error));
    // }
  };

  return (
    <>
      {!success && <form onSubmit={handleRegister} className="form" style={{border: '2px solid #b6c9a8', borderRadius: '10px', padding: '5rem', boxShadow: '0 0 30px 5px rgba(0, 0, 0, 0.1)'}}>
        {!resident && <input
          type="text"
          defaultValue="Sambego"
          placeholder="Username"
          className="input"
        />}
        <button className="button" type="submit">
          Log in
        </button>
      </form>
      }

      {success && <>
        <Subtitle>Login successfull!</Subtitle>
        <div style={{
          padding: '3rem 5rem',
          fontSize: '4rem',
          background: '#f4f8f7',
          border: '2px solid #b6c9a8',
          borderRadius: '5px',
          lineHeight: 1,
          fontFamily: 'monospace',
          maxWidth: '70%',
          wordBreak: 'break-all'
        }}>
          {JSON.stringify({id: response}, null, 4)}
        </div>
      </>}
    </>
  );
};

Webauthn.propTypes = {
  platform: PropTypes.bool
};

Webauthn.defaultProps = {
  platform: false
};

export default Webauthn;
