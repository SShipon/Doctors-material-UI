import { Button, Container, Grid, TextField, Typography,CircularProgress,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation,useHistory} from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth.js';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, signInWithGoogle, authError, loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    
        const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        setLoginData(newLoginData)
        
    }
    const handleLoginSubmit = e => {
       
        e.preventDefault();
        console.log(loginData);
         loginUser(loginData.email,loginData.password, location,history);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
       <Container>
  <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography variant="body1" gutterBottom>Login</Typography>
        <form onSubmit ={handleLoginSubmit}>
         <TextField
            sx={{width:'75%', m:1 }}               
             id="standard-basic"
             name="email"
             onChange={handleOnChange}
             label="Your Email"
             variant="standard" />
    
        <TextField 
             sx={{width:'75%', m:1}}   
             id="standard-basic"
             label="Your Password"
             type="password"
             name="password"
             onChange={handleOnChange}
             variant="standard" />
             <Button  sx={{width:'75%', m:1}} type="submit"                       variant="contained">LogIn</Button>
             <NavLink style={{textDecoration:'none'}} to="/register">
             <Button variant="text">New User ? Please Register</Button>
             </NavLink>
             {isLoading && <CircularProgress />}
             {user?.email && <Alert severity="success">User login successfully!</Alert>}
             {authError && <Alert severity="error">{ authError}</Alert>}
    
            </form>
                    <p>---------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
        <img src={login} alt="" />
        </Grid>
       </Grid>
       </Container>
    );
};

export default Login;