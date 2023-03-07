import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <nav className="navBar">
    <div className="Logo">
      <img className="top-logo" src={logo} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <ul className="links">
      <NavLink className="link" to="/">Rockets</NavLink>
      <NavLink className="link" to="/Missions">Missions</NavLink>
      <vl className="vl" />
      <NavLink className="link" to="/Profile">My Profile</NavLink>
    </ul>
  </nav>
);

export default Header;
