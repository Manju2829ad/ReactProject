// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
//   { id: 3, name: 'HeadPhones', price: 100 }
// ];


import React, { useState, useEffect } from 'react';

function CurrentTime() {
// function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(updateTimer);
  }, []); // Empty dependency array: runs only on mount

  return (
    <div>
      The current time is: {currentTime}
    </div>
  );
}

// export default CurrentTime;



export default CurrentTime;
// Attach the component to the window object to make it globally accessible
// window.ProductList = ProductList;

