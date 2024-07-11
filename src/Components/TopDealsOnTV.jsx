import React from "react";
import './TopDealsOnTV.css';

const products = [
    {id:1, title:'Semi Automatic Washing Machine', image:'https://picsum.photos/506/300?Sony Camera'},
    {id:2, title:'Double Door Refrigerator', image:'https://picsum.photos/507/300?Sony Camera'},
    {id:3, title:'Godrej Refrigerator', image:"https://picsum.photos/508/300?Sony Camera"},
    {id:4, title:'Samsung Refrigerator', image:"https://picsum.photos/509/300?Sony Camera"},
    {id:5, title:'Front Load Washing Machine', image:"https://unsplash.com/photos/WashingMachine"}
];

function TopDealsOnTV() {
    return (
        <>
            <div className="Container">
                <h3 className="headingTV">Top Deals on TV</h3> {/* Added text inside h1 */}
                {products.map((product) => (
                    <div key={product.id} className="Products">
                        <img src={product.image} alt={product.title} /> {/* Added alt attribute */}
                        <div className="ItemName">{product.title}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TopDealsOnTV;
