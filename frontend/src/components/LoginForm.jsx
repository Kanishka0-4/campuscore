import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import RoleToggle from './RoleToggle';
import GoogleLoginButton from './GoogleLoginButton';
import './LoginForm.css';

function LoginForm() {
  const [role, setRole] = useState("Faculty");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { role, ...formData });
    // TODO: Add backend integration here
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // TODO: Add Google login integration here
  };

  return (
    <div className="login-form-container">
      <div className="login-container">
        <RoleToggle role={role} setRole={setRole} />

        <h2 className="login-title">Logging in as {role}</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              {role === "Faculty" ? "Faculty ID or Email" : "Student ID or Email"}
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                name="email"
                className="form-input"
                placeholder={`Enter your ${role} ID or email`}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <span className="input-icon">
                <FaUser />
              </span>
            </div>
          </div>
          
          <div className="form-group">
            <div className="form-label-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label className="form-label">Password</label>
              <div className="forgot-password">
                <a href="#forgot">Forgot password?</a>
              </div>
            </div>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <span 
                className="input-icon password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleInputChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="divider">or continue with</div>

        <GoogleLoginButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
}

export default LoginForm; 