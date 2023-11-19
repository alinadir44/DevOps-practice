import React from 'react';
import {  Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <li>
        <Link to="/sheeps">Sheeps</Link>
      </li>
      <li>
        <Link to="/goats">Goats</Link>
      </li>
    </div>
  );
};
export default Navbar;