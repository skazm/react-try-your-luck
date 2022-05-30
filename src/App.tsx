import { Box, Container } from '@mui/material';
import React from 'react';
import {range} from "lodash";
import Omikuji from './Components/Omikuji';

function App() {
  // 大吉30個ほしい
  const daikichiCount = 30;
  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {range(daikichiCount).map(_=><Omikuji>大吉</Omikuji>)}
        <Omikuji>中吉</Omikuji>
        <Omikuji>小吉</Omikuji>
      </Box>
    </Container>
  );
}

export default App;
