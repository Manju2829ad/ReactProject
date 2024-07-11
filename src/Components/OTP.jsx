import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTP.css';




function OTPVerification({ mobileNumber }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        event.target.nextElementSibling.focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    const key = event.key;
    if (key === 'ArrowRight' && index < 3) {
      event.target.nextElementSibling.focus();
    } else if (key === 'ArrowLeft' && index > 0) {
      event.target.previousElementSibling.focus();
    }
  };

  const handleOTPVerification = async (event) => {
    event.preventDefault();
    const otpValue = otp.join('');

    console.log('Verifying OTP:', otpValue, 'for mobile number:', mobileNumber);

    if (otpValue === '1234') { // Example condition, replace with actual verification logic
      console.log('OTP verification successful!');
      navigate('/homepage');
    } else {
      console.error('OTP verification failed!');
    }
  };



  return (
    <div className="OTP">
      <h1>Verify With OTP</h1>
      <h6>OTP sent to {mobileNumber}</h6>
      <form className="OTPFORM" onSubmit={handleOTPVerification}>
        <div className="OTP-fields">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="otp-input"
            />
          ))}
        </div>
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default OTPVerification;
