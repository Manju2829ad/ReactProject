import { useState } from 'react';
import './index.css';
import { initializeApp } from "firebase/app";
import OTPVerification from "./OTP.jsx"; // Assuming it's in the same directory

import { Link } from 'react-router-dom';

function Login1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOTPSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Input Validation (Optional but Recommended)
    // You can add validation logic here to check for empty fields or password formats

    try {
      // Fetch user data from backend API
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse response data (assuming JSON response)
      const data = await response.json();

      // Check for successful login and handle accordingly
      if (data.success) {
        console.log('Login successful!');
        // Store authentication token or user data (replace with your logic)
        // Redirect to a protected area or perform other actions
      } else {
        setErrorMessage(data.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleOTPRequest = () => {
    // Add your OTP request logic here
    console.log('OTP requested for:', username);
    // Pass the mobile number as a prop to OTPVerification 
return <OTPVerification mobileNumber={username} />;

  };

  const firebaseConfig = {
    apiKey: "AIzaSyAnSj3i6KWt25XvrLxCT-YP2sxMEQ2EszQ",
    authDomain: "otp-project-4734a.firebaseapp.com",
    projectId: "otp-project-4734a",
    storageBucket: "otp-project-4734a.appspot.com",
    messagingSenderId: "439673042122",
    appId: "1:439673042122:web:4d886009018d39132ab033"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <>
    <div className='Header'>
      <header className='heading'> 
        Welcome to Flipkart
      </header>
       </div>
      <div className='Login'>
        <input
        className='Email'
          type='text'
          id='contactinfo'
          name='contactinfo'
          placeholder='Enter your email or phone number'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />   <br></br>
   {/* Trigger navigation to "/otp-verification" on click */}
   
      {/* Call handleOTPRequest conditionally based on user interaction */}
      {/* (e.g., within a button click event handler) */}
      {/** Example with a button click */}
    <Link onClick={handleOTPReqsuest} to="/OTP" tate={{ mobilenumber: username }} className='OTPButton'>
        Request OTP
      </Link>
         <Link className='Signup' to="/SignUp">New to Flipkart? Create an Account</Link>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </>
  );
}

export default Login1;
