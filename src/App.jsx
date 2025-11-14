import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./donation/Navbar";
import Home from "./donation/Home";
import About from "./donation/About";
import Donate from "./donation/Donate";
import Ngos from "./donation/Ngos";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/ngos" element={<Ngos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
