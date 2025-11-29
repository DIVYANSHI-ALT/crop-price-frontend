import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MarketPrices from "./components/MarketPrices";
import Forecast from "./components/Forecast";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import CropSuggestions from "./components/CropSuggestions";
import Schemes from "./components/Schemes";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<MarketPrices />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/suggestions" element={<CropSuggestions />} />
        <Route path="/schemes" element={<Schemes />} />

      </Routes>
    </Router>
  );
}

export default App;
