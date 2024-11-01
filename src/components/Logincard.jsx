import React, { useState } from 'react';
import "./Logincard.css";
import { useNavigate } from 'react-router-dom';

function Logincard() {
  const navigate = useNavigate();
  const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    // Form submission logic here
    setIsSubmitting(true);
    // Redirect to another page after submission
    navigate('/Cover');
  };

  const handleSignInClick = () => {
    setIsSignUpFormActive(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpFormActive(true);
  };

  return (
    <div className={`container ${isSignUpFormActive ? "right-panel-active" : ""}`} id='container'>
      <div className="form-container sign-up-container">
        <form onSubmit={handleFormSubmission}>
          <h1>Create Account</h1>
          <p>or use your email for registration</p>
          <input type="text" name='txt' placeholder='Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <input type="password" name='pswd' placeholder='Password' required />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleFormSubmission}>
          <h1>Sign in</h1>
          <p>or use your account</p>
          <input type="email" name='email' placeholder='Email' required />
          <input type="password" name='pswd' placeholder='Password' required />
          <a href="#">Forgot your Password</a>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Sign In'}
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome back!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className='ghost' id='signIn' onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello! Friend</h1>
            <p>To keep connected with us please login</p>
            <button className='ghost' id='signUp' onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logincard;