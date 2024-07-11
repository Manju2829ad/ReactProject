import React from "react";
import { useParams } from 'react-router-dom'; // Import useParams hook
import './ProductLayout.css';
import PriceRange from './PriceRange'; // Replace with actual path to PriceRange component
import SmartphoneData from './smartphonedata'; // Import the SmartphoneData component

function ProductLayout() {
  const { id } = useParams(); // Use useParams hook to get id from URL params

  return (
    <div>
      <aside className="FilterSection">
        <div className="Filters "></div>
        <div className="categories">
          <h4>Categories</h4>
          {/* Add categories content here */}
        </div>
        <div className="Price">
          <h4>Price Range</h4>
          <PriceRange min={0} max={60000} step={1000} /> {/* Example props */}
        </div>
        <div className="Brand"></div>
      </aside>   
  
      <div className="RightSection">
        <SmartphoneData /> {/* Render the SmartphoneData component */}
      </div>
    </div>
  );
}

export default ProductLayout;
