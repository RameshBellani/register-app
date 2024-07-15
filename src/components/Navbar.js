// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Register App
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    <Button color="inherit" component={Link} to="/login">Log In</Button>
                    <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        <CustomSwitch checked={isDarkMode} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
