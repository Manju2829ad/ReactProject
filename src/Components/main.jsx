import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import OTPVerification from './OTP.jsx';
import LandingPage from './HomePage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UnsplashProvider } from './UnsplashContext'; // Assuming UnsplashProvider is correctly implemented
import ProductLayout from './ProductLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UnsplashProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login route */}
          <Route path="/SignUp" element={<SignUp />} /> {/* Signup route */}
          <Route path="/OTP" element={<OTPVerification />} /> {/* OTP route */}
          <Route path="/HomePage" element={<LandingPage />} /> {/* Landing page route */}
          <Route path="/item/:id"   element={<ProductLayout/>} />
        </Routes>
      </Router> 
    </UnsplashProvider>
  </React.StrictMode>
);



