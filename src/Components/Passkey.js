import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import styles from "./Form.css";
import {Subtitle} from '@sambego/diorama';

const Passkey = ({ register }) => {
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState();
  const createRandomUIntArray = () => {
    const arr = new Uint8Array(32);
    crypto.getRandomValues(arr);

    return arr;
  };

  const attestationOptionsCreate = {
    challenge: createRandomUIntArray(),
    rp: {
      name: "Okta",
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
  
  const attestationOptionsGet = {
    challenge: createRandomUIntArray(),
    timeout: 100000,
    attestation: "direct",
  };

  const handleRegister = e => {
    e.preventDefault();

    if (register) {
      navigator.credentials
        .create({
          publicKey: {
            ...attestationOptionsCreate,
          }
        })
        .then(response =>{
          console.log(response);
          setSuccess(true);
          setResponse(response.id);
        }).catch(error => console.error(error));
    }
  };

  useEffect(() => {
    console.log({
      mediation: 'conditional',
      publicKey: {
        ...attestationOptionsGet,
      }});
    if (!register) {
      navigator.credentials
        .get({
          mediation: 'conditional',
          publicKey: {
            ...attestationOptionsGet,
          }
        })
        .then(response =>{
          console.log(response);
          setSuccess(true);
          setResponse(response.id);
        }).catch(error => console.error(error));
    }
  });

  return (
    <>
      {!success && <form onSubmit={handleRegister} className="form" style={{border: '2px solid #6fa9e2', borderRadius: '10px', padding: '5rem', boxShadow: '0 0 30px 5px rgba(0, 0, 0, 0.1)'}}>
        <input
          type="text"
          // defaultValue="Sambego"
          placeholder="Username"
          className="input"
          autoComplete="username webauthn"
        />
        <button className="button" type="submit">
          Log in
        </button>
      </form>
      }

      {success && <>
        <Subtitle>Login successful!</Subtitle>
        <div style={{
          padding: '3rem 5rem',
          fontSize: '4rem',
          background: '#d9eafa',
          border: '2px solid #6fa9e2',
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

Passkey.propTypes = {
  register: PropTypes.bool
};

Passkey.defaultProps = {
  register: false
};

export default Passkey;
