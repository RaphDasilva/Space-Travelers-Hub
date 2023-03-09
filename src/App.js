import './styles/App.css';
import './styles/header.css';
import './styles/Rockets.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import { getMission } from './redux/mission/missionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
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
