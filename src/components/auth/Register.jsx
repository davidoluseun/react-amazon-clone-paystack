import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../common/Form";
import { auth, db } from "../../firebase";
import "../../styles/auth/auth.css";

class Register extends Form {
  state = {
    data: { name: "", email: "", password: "", confirmPassword: "" },
    errors: {},
    isLoading: false,
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { name, email, password } = data;
      const { history } = this.props;
      this.setState({ isLoading: true });

      let displayName = name;

      if (displayName.indexOf(" ") >= 0) {
        displayName = displayName.split(" ").slice(0, -1).join(" ");
      }

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await user.updateProfile({ displayName });

      await db.collection("users").doc(user.uid).set({
        name,
        displayName,
        email,
      });

      history.push("/");
    } catch (e) {
      const errors = { ...this.state.errors };
      this.setState({ isLoading: false });

      if (e.code === "auth/email-already-in-use")
        errors.email = "Email already registered.";

      this.setState({ errors });
      toast.error("An unexpected error occurred.");
    }
  };

  render() {
    if (auth.currentUser) return <Redirect to="/" />;

    const { isLoading } = this.state;
    const signUpBtnText = !isLoading
      ? "Create your Amazon Account"
      : "Loading...";

    return (
      <>
        <main className="form-main auth-content-wrap">
          {this.renderSiteLogo()}
          <div className="form-wrap">
            <form onSubmit={this.handleSubmit} noValidate>
              <fieldset>
                {this.renderFormTitle("Create Account")}

                {this.renderInput("name", "Your name")}

                {this.renderInput("email", "Email", "email")}

                {this.renderInput("password", "Password", "password")}

                {this.renderSubmitBotton(signUpBtnText)}
              </fieldset>

              {this.renderFormNotice(
                "By creating an account, you agree to Amazon's",
                "Conditions of Use",
                "Privacy Notice",
                "/conditions-of-use",
                "/privacy-notice",
                "Sign-In",
                "/sign-in",
                "Already have an account?"
              )}
            </form>
          </div>
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

export default Register;
