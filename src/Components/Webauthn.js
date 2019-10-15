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
    authenticatorSelection: {},
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

  const handleRegister = () => {
    navigator.credentials
      .create({
        publicKey: {
          ...attestationOptions,
          user
        }
      })
      .then(response =>
        window.alert(`You logged in successfull!\n\n The private key used to sign the challenge has ID:\n\n********************************\n${response.id}\n********************************`)
      );
  };

  return (
    <button className="button" onClick={handleRegister}>
      Log in
    </button>
  );
};

Webauthn.propTypes = {
  platform: PropTypes.bool
};

Webauthn.defaultProps = {
  platform: false
};

export default Webauthn;
