import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../css/SSNPage.css';

function SSNPage({ userData, setUserData }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submittedData, setSubmittedData] = useState(() => {
        // Initialize submitted data from localStorage if available
        const savedData = localStorage.getItem('submittedData');
        return savedData ? JSON.parse(savedData) : [];
    });
    const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state
    const navigate = useNavigate();

    // Handle form submission
    const onSubmit = (data) => {
        const updatedUserData = { ...userData, ssn: data.ssn };
        const newSubmittedData = [...submittedData, updatedUserData];
        setSubmittedData(newSubmittedData);
        localStorage.setItem('submittedData', JSON.stringify(newSubmittedData)); // Save data to localStorage
        reset();
    };

    // Handle Logout
    const handleLogout = () => {
        setUserData(null); // Clear user data
        localStorage.removeItem('submittedData');
        navigate('/login'); // Navigate to login page
    };

    // Handle Profile navigation
    const handleProfile = () => {
        navigate('/profile'); // Navigate to user profile page
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
                        <p onClick={handleProfile}>Profile</p>
                        <p onClick={handleLogout}>Logout</p>
                    </div>
                )}
            </div>

            <div className="form-container">
                <h1>Sensitive Data Scanner</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <div className="form-group">
                        <label>SSN:</label>
                        <input
                            type="text"
                            {...register('ssn', { required: 'SSN is required' })}
                        />
                        {errors.ssn && <p className="error-message">{errors.ssn.message}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Display submitted data */}
            {submittedData.length > 0 && (
                <div className="result-data">
                    <h2>User Data</h2>
                    <div className="data-container">
                        {submittedData.map((data, index) => (
                            <div key={index} className="data-entry">
                                <p><strong>Submission {index + 1}</strong></p>
                                <p><strong>Name:</strong> {data.name}</p>
                                <p><strong>Email:</strong> {data.email}</p>
                                <p><strong>Password:</strong> {data.password}</p>
                                <p><strong>SSN:</strong> {data.ssn}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SSNPage;
