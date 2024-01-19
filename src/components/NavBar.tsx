import NetflixLogo from "./NetflixLogo";
import React from "react";
import "./NavBar.css";

function NavBar (){
  return(
    <div className="navBar">
        <NetflixLogo />
        <h2>Admin Panel</h2>
        <div className="navButtons">
            <button>Profiles</button>
            <button>Media Statistics</button>
            <button>Docs</button>
        </div>
    </div>
  )
}
export default NavBar;