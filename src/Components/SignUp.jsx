import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css'
function SignUp() {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleContinueClick = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (if applicable)
    // Add your logic to handle the "CONTINUE" button click here
    // (e.g., validate mobile number, sendr to server for signup)
  };

  return (
    <>
    <div className="SignUp">
      <div className="Aside">
        <h1 className="Header1">Looks like You're New Here!</h1>
        <h4 className="Header2">Sign up with your mobile number to get started</h4>
      </div> <br />
      <div className="SignUpSection">
        <input
          className="Email"
          type="tel"  // Use "tel" for phone numbers (browser hint for keypad)
          id="mobileNumber" // Use a more descriptive ID
          name="mobileNumber" // Use a more descriptive name
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        /> <br /> 
        <button type="button" className="Continue" onClick={handleContinueClick}>
          CONTINUE
        </button>
        <br />
        <div className="Existing-User">
        <Link className='login' to="/Login">Existing User? Click to Login</Link>

        </div>
      </div>
      
      </div>
    </>
  );
}

export default SignUp;
