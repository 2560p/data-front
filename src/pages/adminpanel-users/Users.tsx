import React from "react";
import "./Users.css";
import NetflixLogo from "../../components/NetflixLogo";

// const users_data = [
//     {profile_name: "John", email: "test1@hey.com", status: "BLOCKED", birth_date: 01-02-2003, payment: "card"},
//     {email: "test2@hey.com", payment: "card"},
//     {email: "test3@hey.com", payment: "card"},
//     {email: "test4@hey.com", payment: "card"},
//     {email: "test5@hey.com", payment: "card"},
//     {email: "test", payment: "card"},
//     {email: "test", payment: "card"},
//     {email: "test", payment: "card"}
// ]

const Users = () => {
    return (
        <div className="gridBody">
            <div className="navBar">
                <NetflixLogo />
                <h2>Admin Panel</h2>
                <div className="navButtons">
                    <button>Users</button>
                    <button>Media Statistics</button>
                    <button>Docs</button>
                </div>
            </div>
            <div className="header">
                <header>
                    <h1>Users</h1>
                </header>
            </div>
        </div>
    );
}

export default Users;