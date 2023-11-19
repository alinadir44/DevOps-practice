/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
//import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home
        {/* <Link to="/">Home</Link> */}
      </a>
      <a href="#about">About
        {/* <Link to="/projects">Projects</Link> */}
      </a>
      <a href="#portfolio">Portfolio
        {/* <Link to="/education">Education</Link> */}
      </a>
      {/* <a href="#footer">Contact</a>
      <a href="#education">Education</a> */}
      <a href="#education">Education</a>
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/education">Education</Link>
      </li> */}
    </div>
  );
};

export default Header;
