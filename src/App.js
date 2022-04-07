import React from "react";
import Navbar from "./Navbar";
import Station from "./Station";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/union" element={<Station stationId="82bd" />} />
        <Route path="/times" element={<Station stationId="84ac" />} />
        <Route path="/atlantic" element={<Station stationId="d2c6" />} />
        <Route path="/fulton" element={<Station stationId="3cf6" />} />
      </Routes>
    </div>
  );
}

export default App;
