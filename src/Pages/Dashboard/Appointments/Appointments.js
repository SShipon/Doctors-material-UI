import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth.js';
 import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
const Appointments = ({date}) => {
    const { user } = useAuth()
    const [appointment, setAppointment] = useState([])
    
    useEffect(() => {
        const url =`http://localhost:5000/appointments?email=${user.email}&date=${date}`
         fetch(url)
        .then(res => res.json())
        .then(data =>setAppointment(data))
    },[date])
    return (
        <div>
            <h1>appointment:{appointment.length}</h1>
             <TableContainer component={Paper}>
      <Table sx={{}} aria-label="appointment table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Email</TableCell>
             <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Services</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointment.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
    );
};

export default Appointments;