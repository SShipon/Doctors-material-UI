import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Backdrop, Button, Fade, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

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
const BookingModul = ({openBooking, handleBookingClose, booking,date}) => {
  const {name, time, }=booking;

  const handleBookSubmit = e =>{
    alert('Booking');
  //collect data  
  // send  to the server
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
           defaultValue='Your Name'
           size="small"
        />
            <TextField
           
            sx={{width:'90%', m:1}}
           id="outlined-size-small"
           defaultValue='Your Email'
           size="small"
        />
            <TextField
            
            sx={{width:'90%', m:1}}
           id="outlined-size-small"
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