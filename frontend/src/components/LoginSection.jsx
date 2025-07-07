import React from "react";
import HeroSection from './HeroSection';
import LoginForm from './LoginForm';
import PageFooter from './PageFooter';
import './LoginSection.css';

function LoginSection() {
  return (
    <div className="login-section">
      <div className="main-login-content">
        <HeroSection />
        <LoginForm />
      </div>
      <PageFooter />
    </div>
  );
}

export default LoginSection;
