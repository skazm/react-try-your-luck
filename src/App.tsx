import { Box, Container } from '@mui/material';
import React from 'react';
import Omikuji from './Components/Omikuji';

function App() {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Omikuji />
        <Omikuji />
        <Omikuji />
      </Box>
    </Container>
  );
}

export default App;
