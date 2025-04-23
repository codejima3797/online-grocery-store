import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<h1>About Us</h1>} />
          <Route path="/popular" element={<h1>Contact Us</h1>} />
          <Route path="/sale" element={<h1>Contact Us</h1>} />
          <Route path="/search" element={<h1>Contact Us</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
