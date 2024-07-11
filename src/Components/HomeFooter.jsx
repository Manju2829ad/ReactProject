import React from "react";
import './HomeFooter.css'; // Import your CSS file

// The import for Firebase storage (`import { list } from "firebase/storage"`) is likely not needed for this component. It interacts with data, not file storage.

const data = [
  {
    id: 1,
    title: 'About',
    list: ["Contact us", "About us", "Careers", "Flipkart Stories", "Press", "Corporate Information"]
  },
  {
    id: 2,
    title: 'Group Companies',
    list: ["Myntra", "Cleartrip", "Shopsy"]
  },
  {
    id: 3,
    title: 'Help',
    list: ["payments", "Shipping", "Cancellation & Returns", "FAQ"]
  },
  {
    id: 4,
    title: 'Consumer Policy',
    list: ["Cancellation & Returns", "Terms of Use ", "Security ", "Privacy"]
  },
  {
    id: 5,
    title: 'Mail Us',
    list: ["Cancellation & Returns", "Terms of Use ", "Security ", "Privacy"]
  }
];

function HomeFooter() {
  return (
    <> {/* Use React Fragment for better performance */}
      <div className="Footer">
     

        {data.map((column) => ( // Map over all data items
          <div key={column.id} className={column.title.toLowerCase().replace(/\s/g, '-')+" all"}> {/* Dynamic class names */}
                  <h4 className="all">{column.title}</h4>
            <ul> {/* Use an unordered list for items */}
      
              {column.list.map((item) => (
                <li className="list" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>

        <div className="Minifooter">
          <p> © 2007- 2024 Flipkart.com</p>
        </div>

    </>
  );
}

export default HomeFooter;
