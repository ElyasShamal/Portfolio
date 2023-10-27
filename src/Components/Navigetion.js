import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Main from "./Main";

function Navigetion() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default Navigetion;
