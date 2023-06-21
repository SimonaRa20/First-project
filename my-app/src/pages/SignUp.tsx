import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

function SignUp() {
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
            marginTop: '6rem',
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
            <h1>SIGN UP</h1>
          </Box>
          <Box sx={{ padding: '20px' }}>
          <TextField
              sx={{
                width: '100%',
                background: 'white',
                borderRadius: '6px',
                marginBottom: '20px',
              }}
              label="Name"
              variant="outlined"
            />
            <TextField
              sx={{
                width: '100%',
                background: 'white',
                borderRadius: '6px',
                marginBottom: '20px',
              }}
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{
                width: '100%',
                background: 'white',
                borderRadius: '6px',
                marginBottom: '20px',
              }}
              label="Password"
              variant="outlined"
            />
            <TextField
              sx={{
                width: '100%',
                background: 'white',
                borderRadius: '6px',
                marginBottom: '20px',
              }}
              label="Confirm password"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" color="primary">
              Sign up
            </Button>
          </Box>
          <Box sx={{
              width: '100%',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}>
              <Link to='/login'>Already have an account? Login</Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SignUp;