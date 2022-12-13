import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

export default function Navbar() {
    return (

        <Box sx={{ flexGrow: 1, }}>
            <AppBar className="navbar_top lgreen">
                <Toolbar>
                    
                    <div className='links'>
                        <Link href="/">About</Link>
                        <Link href="/">dsadasd</Link>
                        <Link href="/">Contact</Link>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}