import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import image1 from '../../../images/cavity.png';
import image2 from '../../../images/fluoride.png';
import image3 from '../../../images/whitening.png';

const services =[
    {
      name: 'Fluoride cavity',
      description: 'most of us readers assume that this conflict of interest is the reason PC Magazine reviews of Microsoft products are softball treatments that in no way reflect the actual experiences of users, who are',
      img:image1
    },
    {
        name: 'Fluoride Treatement',
        description: 'most of us readers assume that this conflict of interest is the reason PC Magazine reviews of Microsoft products are softball treatments that in no way reflect the actual experiences of users, who are',
        img:image2
      },
      {
        name: 'whitening Treatement',
        description: 'most of us readers assume that this conflict of interest is the reason PC Magazine reviews of Microsoft products are softball treatments that in no way reflect the actual experiences of users, who are',
        img:image3
      }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography  sx={{ fontWeight: 500, color: 'warning.main', m: 2  }} variant="h5" component="div">
         OUR SERVICES
        </Typography>
        <Typography  sx={{ fontWeight: 600, color: 'info.main', m: 2  }} variant="h2" component="div">
         OUR SERVICES
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service => <Service
               key={service.name}
               service={service}
              ></Service>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;