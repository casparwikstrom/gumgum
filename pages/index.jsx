import Navbar from './components/Navbar'
import Container from '@mui/material/Container';
import Video from './components/Video';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from './components/Footer';

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
                            <p>sdasdasd</p>
                        </Paper>
                        <Paper elevation={3} className="lgreen" sx={{ padding: "2%" }} >
                            <p>sdasdasd</p>
                        </Paper>
                        <Paper elevation={3} className="lgreen" sx={{ padding: "2%" }} >
                            <p>sdasdasd</p>
                        </Paper>
                    </Box>



                    <Box className="box-medium">
                        <div className="col-sm-6 one-fourth"></div>
                        <div className="orange col-sm-6 one-fourth"></div>
                    </Box>



                    <Box className="box-medium">
                        <div className="yellow col-sm-6 one-fourth"></div>
                        <div className="col-sm-6 one-fourth"></div>
                    </Box>



                    <div className="lgreen col-sm-12 one-fourth" id="aboutus">

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

                    <div className="col-sm-12 one-fourth" id="contact">


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



                {/* <div class="formbold-main-wrapper">

                    <div class="formbold-form-wrapper">
                        <form action="https://formbold.com/s/FORM_ID" method="POST">
                            <div class="formbold-mb-5">
                                <label for="name" class="formbold-form-label"> Full Name </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    class="formbold-form-input"
                                />
                            </div>

                            <div class="formbold-mb-5">
                                <label for="email" class="formbold-form-label"> Email Address </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    class="formbold-form-input"
                                />
                            </div>

                            <div class="formbold-mb-5">
                                <label for="subject" class="formbold-form-label"> Subject </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    class="formbold-form-input"
                                />
                            </div>

                            <div class="formbold-mb-5">
                                <label for="message" class="formbold-form-label"> Message </label>
                                <textarea
                                    rows="6"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    class="formbold-form-input"
                                ></textarea>
                            </div>

                            <div>
                                <button class="formbold-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div> */}


            </div>
            <Footer />

        </>
    )
}

