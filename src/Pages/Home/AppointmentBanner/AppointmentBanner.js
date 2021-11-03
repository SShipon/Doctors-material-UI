import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointment={
    background: `url(${bg})`,
    backgroundColor:'rgba(45,58,78, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 125,
}
const AppointmentBanner = () => {
    return (
        <Box style={appointment} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
           style={{width:400, marginTop:'-110px'}}
          src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'plex', justifyContent: 'flex-start', textAlign:'left', alignItems: 'center'}}>
        <Box>
        <Typography variant="h6" sx={{ mb:3}}  style={{color: 'white'}}>
           Appointment
        </Typography>
        <Typography variant="h4"  sx={{ mb:3}} style={{color: 'white', 
          fontWeight:300}}>
          Make an Appointment Today
        </Typography>
        <Typography variant="h6"  sx={{ mb:3}} style={{color: 'white', fontSize: 14,
         fontWeight:300}}>
         assume treason PC Magazine reviews 
         Blending modes should be defined in the same order as the background-image property. If the blending
        </Typography>
         <Button variant="contained"  style={{background:'#5CE7ED'}}>LeARN More</Button>
        </Box>
    
     </Grid>
        
     </Grid>
    </Box>
    );
};

export default AppointmentBanner;