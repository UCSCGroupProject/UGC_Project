import React, { Component } from "react";

import SignUpForm from "../../components/Forms/SignUpForm";

export default class SignUp extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="fs-1 text-center">Sign Up</div>
            <div className="lead text-center">Plese enter your credentials</div>
            <hr />

            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}
