import React from 'react';
import Navbar from './Navbar';
import Station from './Station';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Station stationId="82bd"/>
      <Station stationId="84ac"/>
      <Station stationId="d2c6"/>
      <Station stationId="3cf6"/>
    </div>
  );
}

export default App;
