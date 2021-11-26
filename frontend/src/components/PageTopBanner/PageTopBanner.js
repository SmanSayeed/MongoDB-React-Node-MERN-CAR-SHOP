import React from 'react';
import { Container } from 'react-bootstrap';
import './PageTopBanner.css'

const PageTopBanner = (props) => {

    const topBanner = './images/title-img.jpg';
    const bgImg = {
        backgroundImage:`url('${topBanner}') `,
        backgroundPosition: "center",
        backgroundPosition:'100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
        <div fluid className="page-top w-100" style={bgImg}>
            <h1 className="text-center">{props.title}</h1>
        </div>
     
        </>
    );
};

export default PageTopBanner;