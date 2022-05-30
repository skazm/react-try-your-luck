import { Box, Card, CardContent } from '@mui/material';
import React from 'react';

type Props = {
  children?: string;
}

function Omikuji(props: Props) {
  const { children = "大吉" } = props; // (children = props.children)
  return (
    <Box m={1} width="300px">
      <Card>
        <CardContent>
          { children }
        </CardContent>
      </Card>
    </Box>
  );
}

export default Omikuji;
