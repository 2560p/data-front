import React from "react";
import "./Docs.css";
import NavBar from "../../components/NavBar";



const Docs = () => {
    return (
        <div className="gridBody">
            <NavBar />
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