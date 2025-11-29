import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaChartLine, FaRupeeSign, FaSeedling } from "react-icons/fa";

function Home() {

  const [hoverIndex, setHoverIndex] = useState(null);

  const cardBaseStyle = {
    transition: "0.3s",
    cursor: "pointer"
  };

  const cardHoverStyle = {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.20)"
  };

  return (
    <div className="container mt-4">

      {/* HEADER SECTION */}
      <div
        className="p-4 mb-4 rounded text-white shadow-sm"
        style={{ backgroundColor: "#2e7d32" }}
      >
        <h2 className="fw-bold">🌾 Crop Price Forecast & Information Dashboard</h2>
        <p className="mt-2 mb-0">
          Real-time prices, smart predictions, and market insights for farmers.
        </p>
      </div>

      {/* 4 CARDS ROW */}
      <div className="row g-4">

        {/* CARD 1 */}
        <div className="col-md-3">
          <Link to="/prices" className="text-decoration-none text-dark">
            <div
              className="card text-center p-3 border-0"
              style={hoverIndex === 0 ? { ...cardBaseStyle, ...cardHoverStyle } : cardBaseStyle}
              onMouseEnter={() => setHoverIndex(0)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <FaRupeeSign size={40} className="text-success mb-2" />
              <h5 className="fw-bold">Current Market Prices</h5>
              <p className="text-muted">Get updated mandi rates across India</p>
            </div>
          </Link>
        </div>

        {/* CARD 2 */}
        <div className="col-md-3">
          <Link to="/forecast" className="text-decoration-none text-dark">
            <div
              className="card text-center p-3 border-0"
              style={hoverIndex === 1 ? { ...cardBaseStyle, ...cardHoverStyle } : cardBaseStyle}
              onMouseEnter={() => setHoverIndex(1)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <FaChartLine size={40} className="text-primary mb-2" />
              <h5 className="fw-bold">Crop Price Forecast</h5>
              <p className="text-muted">AI-based prediction for upcoming trends</p>
            </div>
          </Link>
        </div>

        {/* CARD 3 */}
        <div className="col-md-3">
  <Link to="/suggestions" className="text-decoration-none text-dark">
    <div
      className="card text-center p-3 border-0"
      style={hoverIndex === 2 ? { ...cardBaseStyle, ...cardHoverStyle } : cardBaseStyle}
      onMouseEnter={() => setHoverIndex(2)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <FaLeaf size={40} className="text-success mb-2" />
      <h5 className="fw-bold">Best Crop Suggestions</h5>
      <p className="text-muted">Know which crop will earn more profit</p>
    </div>
  </Link>
</div>


        {/* CARD 4 */}
               {/* CARD 4 */}
        <div className="col-md-3">
          <Link to="/schemes" className="text-decoration-none text-dark">
            <div
              className="card text-center p-3 border-0"
              style={hoverIndex === 3 ? { ...cardBaseStyle, ...cardHoverStyle } : cardBaseStyle}
              onMouseEnter={() => setHoverIndex(3)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <FaSeedling size={40} className="text-warning mb-2" />
              <h5 className="fw-bold">Government Schemes</h5>
              <p className="text-muted">Latest benefits & support for farmers</p>
            </div>
          </Link>
        </div>

      </div>  {/* ← MISSING CLOSING ROW DIV ADDED HERE */}

      {/* IMAGE BANNER */}
      <div className="mt-5">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          className="img-fluid rounded shadow"
          alt="Farm"
        />
      </div>

{/* FOOTER */}
<footer className="mt-5 p-3 text-center text-white" style={{ backgroundColor: "#1b5e20" }}>
  <p className="mb-1">© 2025 Crop Price Forecast Dashboard</p>
  <small>Empowering farmers with real-time market insights 🌾</small>
</footer>

    </div>
  );
}

export default Home;
