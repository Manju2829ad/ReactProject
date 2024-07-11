import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context object
export const UnsplashContext = createContext();

// Context provider component
export const UnsplashProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: 'u55i2jtbmfuX9Wei25It1ZZVCUBW-wPyxp1LB966i_g', // Replace with your Unsplash access key
          per_page: 5,
        }
      });
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images from Unsplash:', error);
    }
  };

  return (
    <UnsplashContext.Provider value={{ images, fetchImages }}>
      {children}
    </UnsplashContext.Provider>
  );
};
