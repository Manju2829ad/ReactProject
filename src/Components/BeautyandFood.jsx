import React from "react";


import './BeautyandFood.css'
import { Link } from "react-router-dom";


const products=[
    {id:1,title:'OnePlus True Wireless Earphones',image:'https://picsum.photos/501/300?Sony Camera'},
    {id:2,title:'ASUS Monitor',image:'https://picsum.photos/502/300?Sony Camera'},
    {id:3,title:'boat SmartWatches',image:'https://picsum.photos/503/300?Sony Camera'},
    {id:4,title:'Noise SmartWatches',image:'https://picsum.photos/504/300?Sony Camera'},   
    {id:5,title:'Top Mirrorless Cameras',image: 'https://picsum.photos/505/300?Sony Camera'},   

]
function BeautyandFood() {
    return (
      <>
        <div className="BeautyandFood">
          <h3 className="beauty">Beauty Food toys and More</h3>
          {products.map((product) => (
            <div key={product.id} className="Products">
              <img className="image" src={product.image} alt={product.title} /> {/* Added `alt` attribute */}
              <div className="ItemName"><Link className="ItemName" >{product.title}</Link></div>
            </div>
          ))}
        </div>
      </>
    );
  }
  




export default BeautyandFood;