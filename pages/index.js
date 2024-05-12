import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube'; // Import YouTube component
import AquoIntro from '../components/AquoIntro'; // Adjust the path as per your directory structure

function Home() {
    // YouTube video options
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,  // Prevent auto-play to adhere to browser policies
        },
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12}>
                    <AquoIntro />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8} className="d-flex justify-content-center">
                    {/* YouTube video embed, centered */}
                    <YouTube
                        videoId="v_UjJ9Lsj1Y" // YouTube Video ID
                        opts={opts}         // Options for the player
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;

