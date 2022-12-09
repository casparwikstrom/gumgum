import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BasicMenu from './Dropdown';


export default function Navbar() {
    return (
        
        <Box sx={{ flexGrow: 1, }}>
            <AppBar className="navbar_top">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <BasicMenu sticky="top">

                    </BasicMenu>

                </Toolbar>
            </AppBar>
        </Box>
    );
}