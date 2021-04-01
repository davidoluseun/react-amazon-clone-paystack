import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../common/Form";
import { auth } from "../../firebase";
import "../../styles/auth/auth.css";

class SignIn extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    isLoading: false,
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { history, location } = this.props;
      const { email, password } = data;
      const { state } = location;

      this.setState({ isLoading: true });

      await auth.signInWithEmailAndPassword(email, password);

      history.push(state ? state.from.pathname : "/");
    } catch (e) {
      const errors = { ...this.state.errors };
      this.setState({ isLoading: false });

      if (e.code === "auth/user-not-found") errors.email = "Invalid email";

      if (e.code === "auth/wrong-password")
        errors.password = "Invalid password.";

      this.setState({ errors });
      toast.error("An unexpected error occurred.");
    }
  };

  render() {
    if (auth.currentUser) return <Redirect to="/" />;

    const { history } = this.props;
    const { isLoading } = this.state;
    const signInBtnText = !isLoading ? "Continue" : "Loading...";

    return (
      <>
        <main className="form-main auth-content-wrap">
          {this.renderSiteLogo()}
          <div className="form-wrap">
            <form onSubmit={this.handleSubmit} noValidate>
              <fieldset>
                {this.renderFormTitle("Sign-In")}

                {this.renderInput(
                  "email",
                  "Email or mobile phone number",
                  "email"
                )}

                {this.renderInput("password", "Password", "password")}

                {this.renderSubmitBotton(signInBtnText)}
              </fieldset>

              {this.renderRecoveryLink("Forgot your password?")}

              {this.renderFormNotice(
                "By continuing, you agree to Amazon's",
                "Conditions of Use",
                "Privacy Notice",
                "/conditions-of-use",
                "/privacy-notice",
                "Need help?",
                "/need-help"
              )}
            </form>
          </div>

          {this.renderCreateAccount(
            "New to Amazon?",
            "Create your Amazon Account",
            history
          )}
        </main>

        {this.renderFormFooter(
          "Conditions of Use",
          "Privacy Notice",
          "Help",
          "/sign-in",
          "/sign-in",
          "/sign-in",
          "1996-2021, Amazon.com, Inc. or its affiliates"
        )}
      </>
    );
  }
}

export default SignIn;
