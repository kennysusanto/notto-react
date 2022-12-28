import React from 'react';
import Container from '@mui/material/Container';
import CustomCard from './ComponentMultiActionAreaCard.js';

function PageHome() {
  return (
    <Container>
      <Container>
        <h2>Explore Our Restaurants</h2>
        <Container>
          <CustomCard/>
        </Container>
      </Container>
      <Container>
        <h2>See Customer and Restaurant Reviews</h2>
      </Container>
      <Container>
        <h2>Join Us!</h2>
      </Container>
    </Container>
  )
}

export default PageHome