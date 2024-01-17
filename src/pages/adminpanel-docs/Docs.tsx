import React from "react";
import "./Docs.css";
import NetflixLogo from "../../components/NetflixLogo";



const Docs = () => {
    return (
        <div className="gridBody">
            <div className="navBar">
                <NetflixLogo />
                <h2>Admin Panel</h2>
                <div className="navButtons">
                    <button>Profiles</button>
                    <button>Media Statistics</button>
                    <button>Docs</button>
                </div>
            </div>
            <div className="header">
                <header>
                    <h1>Docs</h1>
                </header>
            </div>
            <div className="docs">
              <p>
                In this great document you will find everything you need to know how to use this software
              </p>
            </div>
        </div>
    );
};

export default Docs;