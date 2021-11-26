import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import './Contact.css'
const Contact = () => {
    return (
        <>
            <Header></Header>
                <PageTopBanner title="Contact Us"></PageTopBanner>
                <Container className='vh-100'>
                <Row className="mt-5 d-flex justify-content-center">
                    <div className='col-md-6'>
                           <Card 
                        className="my-5 shadow contact-card blue-bg"
                    >
                        <Card.Body>
                        <Card.Title className="blue-text"> Inquiry </Card.Title>
                        <Card.Text>
                            <ListGroup className="shadow blue-bg">
                                <ListGroup.Item  className="blue-bg">Phone: 01234569098</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">website@email.com</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">Dhaka, Bangladesh</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>

                      <div className='my-5 shadow col-md-6'>
                          <Card 
                        className="contact-card blue-bg"
                    >
                        <Card.Body>
                        <Card.Title className="blue-text"> Appointment </Card.Title>
                        <Card.Text>
                            <ListGroup className="shadow blue-bg">
                                <ListGroup.Item  className="blue-bg">Phone: 01234569098</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">website@email.com</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">Dhaka, Bangladesh</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>

                      <div className='my-5 shadow col-md-6'>
                        
                    <Card 
                        className="contact-card blue-bg"
                    >
                        <Card.Body>
                        <Card.Title className="blue-text"> Emergency </Card.Title>
                        <Card.Text>
                            <ListGroup className="shadow blue-bg">
                                <ListGroup.Item  className="blue-bg">Phone: 01234569098</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">website@email.com</ListGroup.Item>
                                <ListGroup.Item className="blue-bg">Dhaka, Bangladesh</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                 

                  



                    </Row>
                </Container>

                {/* <Container>
                    <Row className="m-5 d-flex flex-column justify-content-center align-items-center " >
                        
                    <Col md="11" className="p-5 border rounded shadow blue-bg">
                        <h1>Send us a message</h1>
                        <br />
                            <Form.Control size="lg" type="text" placeholder="Type Message Here..." />
                            <br />
                            <Button type="submit" className="btn btn-success w-100">Submit</Button>
                          

                    </Col>
                    </Row>
                </Container> */}
            <Footer></Footer>
        </>
    );
};

export default Contact;