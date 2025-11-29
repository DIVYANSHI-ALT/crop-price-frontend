import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Schemes() {
  const schemes = [
    {
      name: "PM-Kisan Samman Nidhi",
      details: "₹6000 yearly financial support for farmers",
      icon: "💰",
    },
    {
      name: "PM Fasal Bima Yojana",
      details: "Crop insurance against natural disasters",
      icon: "🛡️",
    },
    {
      name: "Soil Health Card Scheme",
      details: "Soil testing and improvement guidance",
      icon: "🧪",
    },
    {
      name: "Kisan Credit Card (KCC)",
      details: "Low-interest loans for crop investment",
      icon: "📄",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">🏛 Government Schemes</h2>

      <div className="row">
        {schemes.map((item, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm p-3">
              <h4>
                {item.icon} {item.name}
              </h4>
              <p className="text-muted">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
