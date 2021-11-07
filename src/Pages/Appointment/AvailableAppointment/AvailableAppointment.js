import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings =[
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '09.00 AM - 11.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '06.00 AM - 07.00 AM',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '06.00 AM - 07.00 AM',
        space: 10,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '06.00 AM - 04.00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Teeth Pediatric Dental',
        time: '06.00 AM - 02.00 AM',
        space: 10,
    },
    {
        id:6 ,
        name: 'Oral Dental',
        time: '07.00 AM - 05.00 AM',
        space: 10,
    }
]


const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main' }}>AvailableAppointment {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">User login successfully!</Alert>}
            <Grid container spacing={2}>
             {
                 bookings.map(booking =><Booking
                 key={booking.id}
                 booking={booking}
                 date={date}
                 setBookingSuccess={setBookingSuccess}
                 
                 ></Booking>)
             }
         </Grid>
        </Container>
    );
};

export default AvailableAppointment;