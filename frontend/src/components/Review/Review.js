import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PageTopBanner from '../PageTopBanner/PageTopBanner';

const Review = () => {
    return (
        <div>
             <PageTopBanner title="Customer's Review"></PageTopBanner>
             <Container className='vh-100'>
                    <Row className="mt-5 d-flex justify-content-center">
                    <Col md="11" className="p-5 border rounded shadow blue-bg">
                    <p className=''>
                          <strong>Ahmed Sharif</strong>
                          :
                          Very Helpful
                      </p>
                      <p className=''>
                          <strong>Ali</strong>
                          :
                         They offered me cheapest air ticket
                      </p>

                      <p className=''>
                          <strong>Samia</strong>
                          :
                        This is best
                      </p>
                     

                    </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Review;