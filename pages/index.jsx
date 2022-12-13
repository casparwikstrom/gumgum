import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import Video from './components/Video';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from './components/Footer';
import Divider from '@mui/material/Divider';

export default function Home() {
    return (
        <>
            <div className="min_height">


                <Navbar />

                <Video />
                {/* padding for not overlapping video */}
                <Divider />
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
                        <Paper elevation={3} className="lgreen" sx={{ backgroundColor: "lgreen" }} />
                        <Paper elevation={3} className="lgreen" sx={{ backgroundColor: "lgreen" }} />
                        <Paper elevation={3} className="lgreen" sx={{ backgroundColor: "green" }} />
                    </Box>

                    <Divider light />

                    <Box className="box-medium">
                        <div className="col-sm-6 one-fourth"></div>
                        <div className="orange col-sm-6 one-fourth"></div>
                    </Box>

                    <Divider />

                    <Box className="box-medium">
                        <div className="yellow col-sm-6 one-fourth"></div>
                        <div className="col-sm-6 one-fourth"></div>
                    </Box>

                    <Divider />
                    
                    <div className="lgreen col-sm-12 one-fourth">
                        <Container sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "50vh",
                        }}>
                            <p>
                                LOREM
                            </p>
                        </Container>
                    </div>

                    <div className="green col-sm-12 one-fourth">
                        <Container sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "50vh",
                        }}>
                            <p>
                                LOREM
                            </p>
                        </Container>
                    </div>

                </div>
                {/* Start footer */}

            </div>
            <Footer />

        </>
    )
}

