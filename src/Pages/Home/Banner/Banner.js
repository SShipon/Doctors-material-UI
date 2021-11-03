import React from 'react';
import Grid from '@mui/material/Grid';
import cher from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography,Container, Box } from '@mui/material';




const bannerBg = {
  background:`url(${bg})`,
}
const verticalCenter = {
  display:'flex',
  height:400,
  alignItems:'center'
}
const Banner = () => {
  return (
      <Container style={bannerBg} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item style={{...verticalCenter,  textAlign:'left'}} xs={12} md={6}>
      <Box>
      <Typography variant='h3'>
          Your New Smile <br/>
          Starts Here
       </Typography>

          <Typography variant='h6' sx={{fontSize:13, fontWeight:300,  color:'gray'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius minus id rem assumenda corporis, accusamus error reiciendis eveniet numquam natus!
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#85FBF2',fontWeight:'bold'}}>Get Appoinment</Button>
      </Box>

      </Grid>
      <Grid item xs={12} md={6}  style={verticalCenter}>
       <img style={{width:'350px'}} src={cher} alt="" />
      </Grid>

    </Grid>
  </Container>
    );
};

export default Banner;