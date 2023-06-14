import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
          main: purple[600],
        },
        secondary: {
            main: purple[50],
          },
    }
});

export default theme;
