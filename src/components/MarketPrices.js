import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MarketPrices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:5000/api/prices")
    .then((res) => {
      console.log("API RESPONSE:", res.data);  // <--- ADD THIS
      setPrices(res.data);
    })
    .catch((err) => console.log("API ERROR:", err));
}, []);


  return (
    <div className="container mt-5">
      <h3 className="fw-bold mb-4">📊 Market Prices</h3>

      <table className="table table-bordered table-hover">
        <thead className="table-success">
          <tr>
            <th>Crop</th>
            <th>Market</th>
            <th>Price (₹)</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {prices.map((item, index) => (
            <tr key={index}>
              <td>{item.crop_name}</td>
              <td>{item.market}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
