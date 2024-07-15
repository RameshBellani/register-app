import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_phone: '',
        user_password: '',
    });

    const getRandomDetails = () => {
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];
        const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
        const zipcodes = ['500072', '400001', '600002', '700003', '800004'];

        const randomIndex = Math.floor(Math.random() * lastNames.length);

        return {
            user_lastname: lastNames[randomIndex],
            user_city: cities[randomIndex],
            user_zipcode: zipcodes[randomIndex],
        };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const randomDetails = getRandomDetails();

        const payload = {
            ...formData,
            ...randomDetails,
        };

        try {
            const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', payload);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="md">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ height: '100%' }}>
                        <Box p={2} display="flex" justifyContent="center" alignItems="center" height="100%">
                            <img src="https://res.cloudinary.com/dwffepf9q/image/upload/v1721041549/dzxq4hmlfc6heaeuxebb.jpg" alt="Left Side" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} marginTop={3}>
                    <Paper elevation={3} style={{ height: '100%' }}>
                        <Box p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                            <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
                            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                                <TextField
                                    label="First Name"
                                    name="user_firstname"
                                    value={formData.user_firstname}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    required
                                />
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
                                    label="Phone"
                                    name="user_phone"
                                    value={formData.user_phone}
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
                                <Box mt={2} width="100%">
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Sign Up</Button>
                                </Box>
                            </form>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignUp;
