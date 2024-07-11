// BestOfElectronics.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './BestOFElectronics.css';

const Monitors = [
    { name: "Dell", category: "Computer", subCategory: "Monitors" },
    { name: "Samsung", category: "Computer", subCategory: "Monitors" },
    { name: "Lenovo", category: "Computer", subCategory: "Monitors" },
    { name: "Apple", category: "Computer", subCategory: "Monitors" },
    { name: "HP", category: "Computer", subCategory: "Monitors" }
];

function BestOfElectronics() {
    const [electronicsData, setElectronicsData] = useState([]);

    useEffect(() => {
        const fetchElectronicsData = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: {
                        query: 'Monitors', // Example search query
                        per_page: 5, // Number of images to fetch
                        client_id: 'u55i2jtbmfuX9Wei25It1ZZVCUBW-wPyxp1LB966i_g', // Replace with your Unsplash access key
                    }
                });
                setElectronicsData(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchElectronicsData();
    }, []);

    return (
        <div>
            <div className="Container">
                <h1 className="heading">Best of Electronics</h1>

                {electronicsData.map((item, index) => (
                    <div key={index} className="items">
                        <Link to={`/item/${index}`}>
                            <img src={item.urls.regular} alt={item.alt_description} />
                        </Link>
                        <div className="ItemName">
                            {Monitors[index].name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestOfElectronics;
