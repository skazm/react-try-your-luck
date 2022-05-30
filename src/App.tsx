import { Box, Card, CardContent, Container } from '@mui/material';
import React from 'react';

function App() {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box m={1} width="300px">
          <Card>
            <CardContent>
              大吉
            </CardContent>
          </Card>
        </Box>
        <Box m={1} width="300px">
          <Card>
            <CardContent>
              大吉
            </CardContent>
          </Card>
        </Box>
        <Box m={1} width="300px">
          <Card>
            <CardContent>
              大吉
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
