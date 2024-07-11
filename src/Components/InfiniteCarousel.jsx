import React from 'react';
import { useState } from 'react';
import './InfiniteCarouselComponent.css'


const items = [
  { id: 1, image: 'image1.jpg', title: 'Mobiles & Tablets' },
  { id: 2, image: 'image2.jpg', title: 'TVs & Appliances' },
  { id: 3, image: 'image3.jpg', title: 'Electronics' },
  { id: 4, image: 'image4.jpg', title: 'Fashion' },
  // ... more carousel items
];



function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="infinite-carousel">
      <div
        data={items}
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      >

        {({ item }) => (
          <div className="carousel-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default InfiniteCarousel;


