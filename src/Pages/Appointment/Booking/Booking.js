import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModul from '../BookingModul/BookingModul';

const Booking = ({booking, date,setBookingSuccess}) => {
    const {name, time ,space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true)
     const handleBookingClose =() => setBookingOpen(false);
    return (
        
     <>
    <Grid item xs={12} sm={6} md={4}>

      <Paper elevation={3} sx={{py: 5 }} >
      <Typography variant="h5" sx={{ color: 'info.main' }} gutterBottom component="div">
      {name}
      </Typography>
      <Typography variant="h6" display="block" gutterBottom>
      {time}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
      {space}SPACES AVAILABL
      </Typography>
      <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
      </Paper>
      </Grid>
      <BookingModul
       date={date}
       booking={booking}
       openBooking={openBooking}
       handleBookingClose={handleBookingClose}
       setBookingSuccess={setBookingSuccess}
      ></BookingModul>
                
                
   </>
                 
             
          );
      };
      
      export default Booking;