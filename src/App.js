import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

const App = () => {
    const [themeMode, setThemeMode] = useState('light'); 

    const toggleTheme = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    };

    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Router>
                <Navbar toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={user && user.status ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
