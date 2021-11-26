import Button from '@restart/ui/esm/Button';
import React,{useState} from 'react';
import { Container,Row,Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = (props) => {

    const {data,len,col} = props;
    const {_id,title,image,description,price} = data;
    console.log('card');
    console.log(data);

  

    return (
        <>
      
    <Col md={col} className="card-col">
      <Card className="main-card ">
            <Card.Img variant="top" src={image} className="m-auto rounded cardimg" />

        <Card.Body>
            <Card.Title className='text-white'>{title}</Card.Title>
            <Card.Text className="cardtext">
             {description}

            </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p className='text-white'>Price: {price}$</p>
          <Link className="btn btn-warning w-100" to={`/order/${_id}`} > ORDER NOW </Link>
        </Card.Footer>
      </Card>
    </Col>


        </>
    );
};

export default ServicesCard;