import React from 'react';
import { Container, Typography, Box, Paper, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
    textAlign: 'left',
    color: theme.palette.text.primary,
}));

const UserInfo = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.main,
}));

const NameValue = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.primary.main,
}));

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Container maxWidth="sm">
            <Box mt={5} textAlign="center">
                <Typography variant="h4" gutterBottom>Dashboard</Typography>
                {user && user.status ? (
                    <StyledPaper elevation={3} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2} md={1} textAlign="center" margin={1}>
                                <Avatar 
                                    alt={user.user_data[0].user_firstname} 
                                    src="/static/images/avatar/1.jpg" 
                                    sx={{ width: 56, height: 56 }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={10} md={11}>
                                <Typography variant="h6" gutterBottom>User Information</Typography>
                                <Box>
                                    <Box>
                                        <NameValue variant="body1">First Name:</NameValue>
                                        <UserInfo variant="body1">{user.user_data[0].user_firstname}</UserInfo>
                                    </Box>
                                    <Box>
                                        <NameValue variant="body1">Last Name:</NameValue>
                                        <UserInfo variant="body1">{user.user_data[0].user_lastname}</UserInfo>
                                    </Box>
                                    <Box>
                                        <NameValue variant="body1">Email:</NameValue>
                                        <UserInfo variant="body1">{user.user_data[0].user_email}</UserInfo>
                                    </Box>
                                    <Box>
                                        <NameValue variant="body1">Phone:</NameValue>
                                        <UserInfo variant="body1">{user.user_data[0].user_phone}</UserInfo>
                                    </Box>
                                    <Box>
                                        <NameValue variant="body1">City:</NameValue>
                                        <UserInfo variant="body1">{user.user_data[0].user_city}</UserInfo>
                                    </Box>
                                    <Box>
                                        <NameValue variant="body1">Zipcode:</NameValue>
                                        <UserInfo variant="body1">{user.user_data[0].user_zipcode}</UserInfo>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </StyledPaper>
                ) : (
                    <Typography variant="h6">No user information available.</Typography>
                )}
            </Box>
        </Container>
    );
};

export default Dashboard;
