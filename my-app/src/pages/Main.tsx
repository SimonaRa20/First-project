import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginTop: '8rem',
            width: 480,
            height: 560,
            background: theme.palette.secondary.main,
            padding: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 'xx-large',
              fontWeight: 'bolder',
            }}
          >
            <h1>Main</h1>
          </Box>
         
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Main;