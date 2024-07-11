import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './PriceRange.css';

function PriceRange({ min, max, step }) {
    const [minPrice, setMinPrice] = useState(min);
    const [maxPrice, setMaxPrice] = useState(max);

    const handleSliderChange = (values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };

    const generateOptions = (min, max, step) => {
        const options = [];
        for (let i = min; i <= max; i += step) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    return (
        <div className="price-range-container">
            <h3>PRICE</h3>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="thumb"
                trackClassName="track"
                min={min}
                max={max}
                value={[minPrice, maxPrice]}
                onChange={handleSliderChange}
                pearling
                minDistance={step}
            />
            <div className="price-inputs">
                <div className="price-input">
                    <select value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))}>
                        <option value={min}>Min</option>
                        {generateOptions(min, max, step)}
                    </select>
                </div>
                <div className="price-separator">to</div>
                <div className="price-input">
                    <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}>
                        {generateOptions(min, max, step)}
                        <option value={max}>Max</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default PriceRange;
