import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import Video from './components/Video';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from './components/Footer';

export default function Home() {
    return (<>
        <div className="min_height">


            <Navbar />

            <Video />
            {/* padding for not overlapping video */}
            <div className='container_bot'>


                <Box
                    className="box"
                    sx={{
                        mb: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 2,
                            width: 300,
                            height: 300,
                        },
                    }}
                >
                    <Paper elevation={0} />
                    <Paper sx={{ backgroundColor: ".color1" }} />
                    <Paper elevation={3} />
                </Box>





            </div>
            {/* Start footer */}

        </div>
        <Footer></Footer>


    </>
    )
}

