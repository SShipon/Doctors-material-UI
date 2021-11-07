import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Backdrop, Button, Fade, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth.js';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const BookingModul = ({openBooking, handleBookingClose, booking,date,setBookingSuccess}) => {
  const { name, time, } = booking;
  const { user } = useAuth();
  
  const initialInfo = {patientName: user.displayName, email: user.email, phone:''}
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }

  const handleBookSubmit = e =>{
   
  //collect data  
    
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()

    }
    
  // send  to the server
    
    fetch('http://localhost:5000/appointments',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
        setBookingSuccess(true);
        handleBookingClose()
      }

      });
    
    

    handleBookingClose()
    e.preventDefault()

  }
    return (
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
             {name}
            </Typography>
            
            <form onSubmit={handleBookSubmit} action="">
            {/* <Typography id="spring-modal-description" sx={{ mt: 2 }}>
            {time}
            </Typography> */}
            <TextField
            disabled
            sx={{width:'90%', m:1}}
           id="outlined-size-small"
           defaultValue={time}
           size="small"
        />
            <TextField
           
            sx={{width:'90%', m:1}}
           id="outlined-size-small"
           name="patientName"
           onBlur={handleOnBlur}
           defaultValue={user.displayName}
           size="small"
        />
            <TextField
           
            sx={{width:'90%', m:1}}
           id="outlined-size-small"
           email="email"
            onBlur={handleOnBlur}
           defaultValue={user.email}
           size="small"
        />
            <TextField
            
            sx={{width:'90%', m:1}}
           id="outlined-size-small"
           name="phone"
           onBlur={handleOnBlur}
           defaultValue='Phone Number'
           size="small"
        />
            <TextField
            disabled
            sx={{width:'90%', m:1}}
           id="outlined-size-small"
           defaultValue={date.toDateString()}
           size="small"
        />
        <Button type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModul;