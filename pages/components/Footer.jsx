// create footer component with next.js
// Path: pages/components/Footer.jsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

const theme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Footer */}
        <Box
          component="footer"
          className='lgreen footer-box'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            minHeight: '25rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Container sx={{ display: "flex" }}>

            <div className="col-sm-4 links-footer">
              <Link color="inherit" href="https://material-ui.com/">
                Material-UI
              </Link>
            </div>

            <div className="col-sm-4 links-footer">
              <Link color="inherit" href="https://material-ui.com/">
                Material-UI
              </Link>
            </div>

            <div className="col-sm-4 links-footer">
              <Link color="inherit" href="https://material-ui.com/">
                Material-UI
              </Link>
            </div>


          </Container>


          
        </Box>

        <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        {/* End footer */}
      </Box>
    </ThemeProvider>
  )
}

