import React from 'react';

const Navbar = ({ userName = "John Doe", businessName = "My Business", onLogout }) => {
    return (
        <nav
            className="navbar"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                backgroundColor: "#e9ecef", // Changed background color
                borderBottom: "1px solid #dee2e6",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div className="navbar-left">
                <h1
                    className="business-name"
                    style={{ margin: 0, fontSize: "1.5rem", color: "#343a40" }}
                >
                    {businessName}
                </h1>
            </div>
            <div className="navbar-right" style={{ display: "flex", alignItems: "center" }}>
                <span
                    className="user-name"
                    style={{ marginRight: "15px", fontSize: "1rem", color: "#495057" }}
                >
                    Welcome, {userName}
                </span>
                <button
                    className="logout-button"
                    onClick={onLogout}
                    style={{
                        padding: "5px 10px",
                        fontSize: "0.9rem",
                        color: "#fff",
                        backgroundColor: "#007bff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;