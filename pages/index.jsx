import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import Video from './components/Video';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from './components/Footer';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import Button from '@mui/material/Button';

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
                        id="aboutus"
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
                    <div className="yellow col-sm-12 one-fourth">

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
                            <Paper className="form-paper" elevation={3}>
                                <h3>
                                    <MarkAsUnreadIcon fontSize='large' />Get in touch
                                </h3>
                                <form action="https://formsubmit.co/vantagemedia2020@gmail.com" method="POST" className='form'>
                                    <input className="form-field" placeholder='Name' type="text" name="name" required />
                                    <br />
                                    <input className="form-field" placeholder='Email' type="email" name="email" required />
                                    <br />
                                    <input className="form-field text" placeholder='Text' type="text" name="name" required />

                                    <br />

                                    <Button className="green form-button" type="submit">Send</Button>
                                </form>
                            </Paper>

                        </Container>
                    </div>

                </div>
                {/* Start footer */}

            </div>
            <Footer />

        </>
    )
}

