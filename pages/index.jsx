import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import Video from './components/Video';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from './components/Footer';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';


export default function Home() {

    return (
        <>
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
                        <Paper elevation={3} className="lgreen" sx={{ padding: "2%" }} >

                            <PeopleOutlineIcon fontSize="large" />
                            <p>Zmarta invest is a group of companies that, together with the management of each group company, develops long-term e-commerce and service companies based in Sweden.</p>
                        </Paper>
                        <Paper elevation={3} className="lgreen" sx={{ padding: "2%" }} >

                            <AddBusinessTwoToneIcon fontSize='large'></AddBusinessTwoToneIcon>
                            <p>We invest in quality small and medium-sized companies, which are generally very focused in a niche, in industries and with business models that we can understand, and where we can be a relevant owner.</p>
                        </Paper>
                        {/* <Paper elevation={3} className="lgreen" sx={{ padding: "2%" }} >
                            <p>sdasdasd</p>
                        </Paper> */}
                    </Box>

                    {/* <Box className="box-medium">
                        <div className="col-sm-6 one-fourth"></div>
                        <div className="orange col-sm-6 one-fourth"></div>
                    </Box>

                    <Box className="box-medium">
                        <div className="yellow col-sm-6 one-fourth"></div>
                        <div className="col-sm-6 one-fourth"></div>
                    </Box>
 */}
                    <div className="yellow col-sm-12 one-fourth" id="aboutus">

                        <Container sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "50vh",
                        }}>
                            <p>
                                Zmart invest is an e-commerce brand that combines high-performance products and high-quality results.
                            </p>
                        </Container>
                    </div>

                    <div className="col-sm-12 one-fourth" id="contact">

                        <Container sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "50vh",
                        }}>
                            <form action="https://formsubmit.co/vantage2020@gmail.com" method="POST">
                                <input type="text" name="name" required />
                                <input type="email" name="email" required />
                                <button type="submit">Send</button>
                            </form>
                        </Container>
                    </div>

                </div>
                {/* Start footer */}




            </div>
            <Footer />

        </>
    )
}

