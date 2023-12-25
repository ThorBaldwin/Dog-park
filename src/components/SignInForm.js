import React from "react";
import "./SignInForm.css";

function SignInForm() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Sign In</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </div>
    </div>
  );
}

export default SignInForm;
