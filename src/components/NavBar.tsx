import React from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "./NetflixLogo";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <NetflixLogo />
      <h2>Admin Panel</h2>
      <div>
        <Link to="/profiles">
          <button  className="navButtons">Profiles</button>
        </Link>
        <Link to="/statistics">
          <button  className="navButtons">Statistics</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
