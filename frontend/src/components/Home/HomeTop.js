import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container,Row,Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const homeTopImg  = './images/header.jpg';
console.log(homeTopImg);
const HomeTop = () => {
    return (
        <>
        <div  style={{
                    backgroundImage: `url(${homeTopImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize:'cover',
                    padding: '100px 0px',
                    position: 'relative',
                    overflow: 'hidden',
                     boxSizing:'border-box'
            }}>
                     <div id="color-overlay"></div>
            <Container className='main-top'>
                <Row className="home-top-row "  
                >
                <Col md={12} className="home-top-content d-flex flex-column">
  
                            <section className='top-banner-content'> 
                             
                    <p className="small-text">BUY BEST <span className="orange-text">CAR</span></p>
                    <h1 className="large-text">
                        CAR WORLD
                    </h1>
                    <div className='w-50'>
                        <p className="blue-text small-text">
                                        Find latest model, brand new and super powerful cars here and enjoy your riding with high speed.Be fast be furious.
                        </p>
                    </div>
        
                    </section>
                   
              
                   
                    <Link className="Orange-bg btn btn-primary sign-up " to="/more-cars" >All Cars</Link>
                </Col>
                {/* <Col md={6} className="top-img">
                    <img src={homeTopImg} className="image-fluid" ></img>
                </Col> */}
             
                </Row>
            </Container>
            </div>
        </>
    );
};

export default HomeTop;