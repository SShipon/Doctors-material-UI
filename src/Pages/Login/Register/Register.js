
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth.js';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { user , authError,registerUser,isLoading } = useAuth();

        const handleOnblur = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        setLoginData(newLoginData)
        
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password did not match");
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name,history );
        e.preventDefault();
    }
    return ( 
<Container>
  <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography variant="body1" gutterBottom>Register</Typography>
       {!isLoading && <form onSubmit ={handleLoginSubmit}>
         <TextField
            sx={{width:'75%', m:1 }}               
             id="standard-basic"
             name="name"
             type="text"
             onBlur={handleOnblur}
             label="Your Name"
             variant="standard" />
    
         <TextField
            sx={{width:'75%', m:1 }}               
             id="standard-basic"
             name="email"
             type="email"
             onBlur={handleOnblur}
             label="Your Email"
             variant="standard" />
    
        <TextField 
             sx={{width:'75%', m:1}}   
             id="standard-basic"
             label="New Password"
             type="password"
             name="password"
            onBlur={handleOnblur}
             variant="standard" />
        <TextField 
             sx={{width:'75%', m:1}}   
             id="standard-basic"
             label="Confirm Password"
             type="password"
             name="password2"
             onBlur={handleOnblur}
             variant="standard" />
             <Button  sx={{width:'75%', m:1}} type="submit" variant="contained">Register</Button>
              <NavLink style={{textDecoration:'none'}} to="/login">
              <Button variant="text">Already Registered ? Please LogIn</Button>
             </NavLink>
    </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Create successfully!</Alert>}
          {authError && <Alert severity="error">{ authError}</Alert>}
        </Grid>
       </Grid>
       </Container>
    );
};

export default Register;