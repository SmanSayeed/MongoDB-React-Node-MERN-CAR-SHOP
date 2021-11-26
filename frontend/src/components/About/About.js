import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import './About.css'

const About = () => {

    const topBanner = './images/top-banner.jpg';
    const bgImg = {
        backgroundImage:`url('{topBanner}') `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
            <Header></Header>
            <PageTopBanner title="About Us"></PageTopBanner>
            <Container className="vh-100">
                <Row>
                    <Col md="" className="m-5">
                        <h1 className="mt-3 text-left">
                            CAR WORLD
                        </h1>
                        <p className="about-content">
               CarShop Certified* cars are the cream of the crop — vehicles under 4 years or 50,000 miles old that have passed a rigorous 109-point inspection by our ASE-certified technicians. And that’s just for starters.


No Dings, No Dents, No Scratches
We start with the best used cars, then make them even better — mechanically and cosmetically, with no dings, dents or scratches.


Bumper-to-Bumper Warranty
For the first 6 months or 6,000 miles, we’ve got you covered on your CarShop Certified car, right down to the wiper blades. See Dealer for copy of warranty.


Lifetime Engine Guarantee
We’re so sure of our CarShop Certified cars, we guarantee the engine for as long as you own your car.


The Highest Standards
We are insanely selective. Only 1 in 50 used cars we see makes it to a CarShop lot.


5-day Money Back Guarantee
For 5 days, we accept the return of any CarShop Certified vehicle purchased from us at no cost to you — provided it has been driven less than 500 miles. 


Free Vehicle History Report
We offer a free CARFAX report with each vehicle we sell, so you’ll have further peace of mind about buying our CarShop Certified vehicles.

Browse Certified Cars
                        </p>
                    </Col>
                </Row>
            </Container>

     <Footer></Footer>
        </>
    );
};

export default About;