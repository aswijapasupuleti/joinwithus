// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WorkWithUs from './pages/WorkWithUs'; // Ensure this path is correct
import PartnerWithUs from './pages/PartnerWithUs'; // Ensure this path is correct
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/work-with-us">Work With Us</Link>
            </li>
            <li>
              <Link to="/partner-with-us">Partnered With Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;