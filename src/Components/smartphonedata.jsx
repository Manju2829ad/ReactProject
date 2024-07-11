import React, { useState, useEffect } from 'react';

function SmartphoneData() {
  const [smartphones, setSmartphones] = useState([]);
  const [sortKey, setSortKey] = useState('popularity');

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setSmartphones(data.products); // Assuming the API returns a 'products' array
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    let sortedSmartphones = [...smartphones];
    if (sortKey === 'lowtohigh') {
      sortedSmartphones.sort((a, b) => a.price - b.price);
    } else if (sortKey === 'hightolow') {
      sortedSmartphones.sort((a, b) => b.price - a.price);
    }
    setSmartphones(sortedSmartphones);
  }, [sortKey, smartphones]);

  const handleSort = (key) => {
    setSortKey(key);
  };

  return (
    <div className="RightSection">
      <div className="Sorting">
        <a href="#" onClick={() => handleSort('popularity')}>Popularity</a>
        <a href="#" onClick={() => handleSort('lowtohigh')}>Price--Low to High</a>
        <a href="#" onClick={() => handleSort('hightolow')}>Price--High to Low</a>
      </div>
      <div className="DisplaySection">
        {smartphones.map(smartphone => (
          <div key={smartphone.id} className="ProductCard">
            <h3>{smartphone.title}</h3>
            <img src={smartphone.thumbnail} alt={smartphone.title} />
            <p>Price: ₹{smartphone.price}</p>
            <p>{smartphone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartphoneData;
