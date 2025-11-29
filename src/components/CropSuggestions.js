import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CropSuggestions() {
  const suggestions = [
    {
      crop: "Wheat",
      reason: "High market demand in North India and stable MSP",
      icon: "🌾",
    },
    {
      crop: "Maize",
      reason: "Low cultivation cost with rising demand in poultry feed",
      icon: "🌽",
    },
    {
      crop: "Sugarcane",
      reason: "Excellent profitability with government support",
      icon: "🍃",
    },
    {
      crop: "Pulses",
      reason: "High profit and low water requirement",
      icon: "🌱",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">🌿 Best Crop Suggestions</h2>

      <div className="row">
        {suggestions.map((item, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm p-3">
              <h4>
                {item.icon} {item.crop}
              </h4>
              <p className="text-muted">{item.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
