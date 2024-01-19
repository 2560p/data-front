import React from "react";
import "./Profiles.css";
import NavBar from "../../components/NavBar";

const users_data = [
    { profile_name: "John", email: "test1@hey.com", status: "BLOCKED", birth_date: "01-02-2003", payment: "card" },
    { email: "test2@hey.com", payment: "card" },
    { email: "test3@hey.com", payment: "card" },
    { email: "test4@hey.com", payment: "card" },
    { email: "test5@hey.com", payment: "card" },
    { email: "test", payment: "card" },
    { email: "test", payment: "card" },
    { email: "test", payment: "card" }
];

const Users = () => {
  // Sort users by email
    const sortedUsers = [...users_data].sort((a, b) => (a.email > b.email ? 1 : -1));

    return (
        <div className="gridBody">
            
            <NavBar />
            <div className="header">
                <header>
                    <h1>Profiles</h1>
                </header>
            </div>
            <div className="userList">
                {sortedUsers.map((user, index) => (
                <div key={index} className="user">
                    <p>Email: {user.email}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Users;