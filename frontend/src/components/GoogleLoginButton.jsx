import React from "react";
import './GoogleLoginButton.css';

function GoogleLoginButton({ onClick }) {
  return (
    <button type="button" className="google-login-button" onClick={onClick}>
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="google-icon"
      />
      Log In with Google
    </button>
  );
}

export default GoogleLoginButton; 