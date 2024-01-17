import React from "react";
import "./Users.css";
import NetflixLogo from "../../components/NetflixLogo";

const Users = () => {
    return (
        <div>
            <div className="navBar">
            <NetflixLogo />
            <h2>Admin Panel</h2>
            <div className="navButtons">
                <button>Users</button>
                <button>Media Statistics</button>
                <button>Docs</button>
            </div>
        </div>
        </div>
    );
}

export default Users;