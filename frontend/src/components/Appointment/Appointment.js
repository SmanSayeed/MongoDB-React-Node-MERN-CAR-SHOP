import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PageTopBanner from '../PageTopBanner/PageTopBanner';

const Appointment = () => {
    return (
        <>
              <PageTopBanner title="Appointment"></PageTopBanner>
                <Container className='vh-100'>
                    <Row className="mt-5 d-flex justify-content-center">
                    <Col md="11" className="p-5 border rounded shadow blue-bg">
                        <h1>Appointment Details Here</h1>
                        <br />
                            <Form.Control size="lg" type="text" placeholder="Type Here..." />
                            <br />
                            <Button type="submit" className="btn btn-success w-100">Submit</Button>
                          

                    </Col>
                    </Row>
                </Container>
        </>
    );
};

export default Appointment;