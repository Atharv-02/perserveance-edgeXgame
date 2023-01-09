import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './About';
import Home from './Home';
import Items from './Item';
import Navbar from './Navbar';
import './style.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='buy' element={<Items />} />
        <Route path='aboutus' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
