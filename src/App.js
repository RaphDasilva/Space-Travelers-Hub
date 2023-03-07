import './styles/App.css';
import './styles/header.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
