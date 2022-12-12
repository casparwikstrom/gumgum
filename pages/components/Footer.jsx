// create footer component with next.js
// Path: pages/components/Footer.jsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Typography variant="body1">
            <Link color="inherit" href="https://material-ui.com/">
              Material-UI
            </Link>{' '}
            <Link color="inherit" href="https://material-ui.com/">
              Material-UI
            </Link>{' '}
            with Next.js
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {'.'}

          </Typography>
        </Box>
        {/* End footer */}
      </Box>
    </ThemeProvider>
  )
}

