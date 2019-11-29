import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.css";

const Webauthn = ({ platform }) => {
  const createRandomUIntArray = () => {
    const arr = new Uint8Array(32);
    crypto.getRandomValues(arr);

    return arr;
  };

  const attestationOptions = {
    challenge: createRandomUIntArray(),
    rp: {
      name: "Auth0"
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
  } else {
    attestationOptions.authenticatorSelection = {
      authenticatorAttachment: "cross-platform"
    };
  }

  const user = {
    id: createRandomUIntArray(),
    name: "Sam Bellen",
    displayName: "Sambego"
  };

  const handleRegister = e => {
    e.preventDefault();

    navigator.credentials
      .create({
        publicKey: {
          ...attestationOptions,
          user
        }
      })
      .then(response =>
        window.alert(`Login successfull!\n\nThe challenge was signed using the private key with ID: \n----------------------------------------------------------------${response.id}`)
      );
  };

  return (
    <form onSubmit={handleRegister} className="form" style={{border: '2px solid #b6c9a8', borderRadius: '10px', padding: '5rem', boxShadow: '0 0 30px 5px rgba(0, 0, 0, 0.1)'}}>
      <input
        type="text"
        defaultValue="Sambego"
        placeholder="Username"
        className="input"
      />
      <button className="button" type="submit">
        Log in
      </button>
    </form>
  );
};

Webauthn.propTypes = {
  platform: PropTypes.bool
};

Webauthn.defaultProps = {
  platform: false
};

export default Webauthn;
