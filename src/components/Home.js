import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "./home.css"

const Home = () => {
    return (
        <div className="home_wrapper">
            <Container fluid>
            <Col>
            <div className="banner1">
            <h1>A World of Knowledge&nbsp;at Your Fingertips</h1>
            <img src="https://static.wixstatic.com/media/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.jpg/v1/fill/w_980,h_627,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.webp" alt="banner1"/>
            </div>
            <div className="banner2">
                <div className="title"><h2>About Us</h2></div>
                <div>
                <div className="text"><p>Learning Together From the Comfort of Your Home</p>
                <button>Learn More</button>
                </div> 
                <img src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_441,h_296,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp" alt="banner2"/>
            </div>
            </div>
            </Col>
            </Container>
        </div>
    )
}

export default Home
