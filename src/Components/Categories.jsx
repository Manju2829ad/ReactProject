import React from 'react';


import './Categories.css'

const categories = [
    { id: 1, name: 'Top Offers', image: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100' },
    { id: 2, name: 'Mobiles & Tablets', image: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100' },
    { id: 3, name: 'TVs & Appliances', image: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100' },
    { id: 4, name: 'Electronics', image: 'https://rukminim2.flixcart.com/fk-p-flap/80/80/image/4da1d0d19350cc84.jpg?q=100' },
    { id: 5, name: 'Home & Furniture', image: 'https://source.unsplash.com/1600*1000?burger' },
    { id: 6, name: 'Appliances', image: 'https://source.unsplash.com/1600*1000?Appliances' },

    // ... more categories with image URLs
  ];
  

  function Categories() {
    return (
      <div className="Categories">

          {categories.map((category) => (
            <span key={category.id} className="category-item">
              <img  src={category.image} alt={category.name} />

              <div className='ItemNames'>{category.name}</div>
            </span>
          ))}
        </div>
    );
  }
  


export default Categories;
