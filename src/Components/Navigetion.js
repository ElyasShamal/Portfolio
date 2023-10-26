import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";

function Navigetion() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/About" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default Navigetion;
