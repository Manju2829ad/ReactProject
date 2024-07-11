import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css';

function Login() {
    const [phoneNumberOrEmail, setPhoneNumberOrEmail] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleInputChange = (event) => {
        const userInput = event.target.value;
        setPhoneNumberOrEmail(userInput);

        let newValidationMessage = '';

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput) && !/^\d+$/.test(userInput)) {
            newValidationMessage = 'Invalid phone number or email format';
        } else if (/^\d+$/.test(userInput) && userInput.length < 10) {
            newValidationMessage = 'Please enter a valid phone number (minimum 10 digits)';
        }

        setValidationMessage(newValidationMessage);
    };

    const validateInput = (userInput) => {
        if (!userInput) {
            setValidationMessage("Please enter the phone number or Email");
            return false;
        }

        if (validationMessage) {
            return false;
        }

        return true;
    };

    const handleOTPRequest = (event) => {
        event.preventDefault();
        const validationResult = validateInput(phoneNumberOrEmail);

        if (validationResult) {
            // Navigate to the OTP page
            navigate('/OTP');
        }
    };

    return (
        <div className="Login">
            <form>
                <input
                    className="Pore"
                    type="text"
                    id="numberorId"
                    name="phoneNumberOrEmail"
                    value={phoneNumberOrEmail}
                    onChange={handleInputChange}
                    placeholder="Enter phone number or Email Id"
                    onFocus={() => setValidationMessage('')} // Reset on focus
                />
            </form>
            <button onClick={handleOTPRequest} className='OTPButton'>
                Request OTP
            </button>
            {validationMessage && <p className="validation-message">{validationMessage}</p>}
            <Link className='Signup' to="/SignUp">New to Flipkart? Create an Account</Link>
        </div>
    );
}

export default Login;
