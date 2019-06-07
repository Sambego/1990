import React, { Component, useState } from "react";
import classnames from "classnames";
import styles from "./Form.css";

export default class AnnoyingForm extends Component {
  state = {
    shake: false,
    reset: false,
    error: false,
    attempts: 1
  };

  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleResetPassword = this.handleResetPassword.bind(this);
  }

  handleLogIn(event) {
    event.preventDefault();

    this.setState(prevState => ({
      ...prevState,
      shake: true,
      attempts: prevState.attempts + 1
    }));
    console.log(this.state);

    window.setTimeout(
      () => this.setState(prevState => ({ ...prevState, shake: false })),
      500
    );

    if (this.state.attempts >= 3) {
      this.setState(prevState => ({ ...prevState, reset: true }));
    }
  }

  handleResetPassword(event) {
    event.preventDefault();
    this.setState(prevState => ({ ...prevState, error: true }));
  }

  render() {
    const formClasses = classnames("form", {
      shake: this.state.shake
    });

    return (
      <>
        <form onSubmit={this.handleLogIn} className={formClasses}>
          <input
            type="text"
            defaultValue="Sambego"
            placeholder="Username"
            className="input"
          />
          <input
            type="password"
            defaultValue="password"
            placeholder="Password"
            className="input"
          />
          <input type="submit" value="Log in" className="button" />
        </form>
        {this.state.reset && (
          <div className="modal" style={{ minWidth: "60vw" }}>
            <form onSubmit={this.handleResetPassword} className="form">
              <input
                type="password"
                placeholder="Please reset your password"
                className="input"
              />
              <input type="submit" value="Reset password" className="button" />
            </form>
          </div>
        )}
        {this.state.error && (
          <div
            className="modal"
            style={{ background: "#ec5f67", color: "#fff" }}
          >
            <p>Your new password can't be the same as your old password!</p>
          </div>
        )}
      </>
    );
  }
}
