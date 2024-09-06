import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SSNPage from './components/SSNPage';
import UserProfile from './components/UserProfile';

function App() {
    const [userData, setUserData] = useState(null); // State to store user data

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={!userData ? <LoginPage setUserData={setUserData} /> : <Navigate to="/ssn" />}
                />
                <Route
                    path="/login"
                    element={<LoginPage setUserData={setUserData} />}
                />
                <Route
                    path="/ssn"
                    element={userData ? <SSNPage userData={userData} setUserData={setUserData} /> : <Navigate to="/login" />}
                />
                <Route
                    path="/profile"
                    element={userData ? <UserProfile userData={userData} setUserData={setUserData} /> : <Navigate to="/login" />}
                />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}

            </Routes>
        </Router>
    );
}

export default App;
