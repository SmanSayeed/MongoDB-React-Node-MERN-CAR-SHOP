import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <Container fluid className="mt-5 bg-dark">
                {/* <p className="text-center">&copy;Copyright {new Date().getFullYear()}</p> */}
                <div className="px-4 py-4 text-center d-flex flex-column flex-md-row text-md-start justify-content-between px-xl-5 bg-dark">
  
                    <div className="mb-3 text-white mb-md-0">
                    Copyright © 2020. All rights reserved.
                    </div>

                    <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>

                </div>
  
            </Container>
        </>
    );
};

export default Footer;