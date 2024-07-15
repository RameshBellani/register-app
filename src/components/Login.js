import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData);
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" align="center">Log In</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Password"
                        name="user_password"
                        type="password"
                        value={formData.user_password}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Box mt={2}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Log In</Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
