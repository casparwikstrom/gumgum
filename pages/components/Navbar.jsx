import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from "next/link";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
    return (

        <Box className="navbar_top" sx={{ flexGrow: 1 }}>
            <AppBar className="navbar_top lgreen" >
                <Toolbar>

                    <div className='links'>
                        <Link href="#aboutus">About Us<ArrowDropDownIcon /></Link>

                        {/* <Link href="/">dsadasd</Link> */}
                        <Link href="/#contact">Contact<ArrowDropDownIcon /></Link>

                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}