import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UserProfile.css';

function UserProfile({ userData, setUserData }) {
    const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state
    const navigate = useNavigate();

    // Handle Logout
    const handleLogout = () => {
        setUserData(null); // Clear user data
        navigate('/login'); // Navigate to login page
    };

    // Handle Profile navigation
    const handleBack = () => {
        setUserData(userData);
        navigate('/ssn'); // Navigate to user profile page
    };

    return (
        <div className="page-container">
            {/* Hamburger Menu */}
            <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
                <button className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                {menuOpen && (
                    <div className="menu-options">
                        <p onClick={handleLogout}>Logout</p>
                    </div>
                )}
            </div>

            {/* Display data */}
            {userData && (
                <div className="result-data">
                    <h2>User Profile</h2>
                    <div className="data-container">
                        <div className="data-entry">
                            <p><strong>Name:</strong> {userData.name}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Password:</strong> {userData.password}</p>
                        </div>
                    </div>
                    <p className="switch-link" onClick={handleBack}>Back</p>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
