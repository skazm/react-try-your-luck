import { Box, Container } from '@mui/material';
import React from 'react';
import Omikuji from './Components/Omikuji';

function App() {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Omikuji>大吉</Omikuji>
        <Omikuji>中吉</Omikuji>
        <Omikuji>小吉</Omikuji>
      </Box>
    </Container>
  );
}

export default App;
