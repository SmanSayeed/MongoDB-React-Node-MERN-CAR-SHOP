import React, { useState,useEffect } from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import useServices from '../../hooks/useServices';
import ServicesCard from '../ServicesCard/ServicesCard';
import HomeTop from './HomeTop';
import Star from './Star';
import StarRatings from 'react-star-ratings';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {

    const [servicesData, sloading] = useServices();
    
    const [reviewData,reviewloading] = useReview();
    
    return (
        <>  
        
        <Header></Header>
            <HomeTop ></HomeTop>
            <Container className="my-5 rounded shadow common bg-dark white-text">
                <h1 className="mt-5 text-center">LATEST CARS</h1>
                <Row xs={1} md={3} className="pb-5 m-5 g-4" >
                    
                    {
                        sloading ? (
                            
                            <>
                                
                                <Col className="" md="12">
                                          <div className="spinner-border text-success" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                              </Col>
                        
                            </>
                        )
                            :
                            (
                                <>
                                   {
                                        servicesData.slice(0, 6).map(data => <ServicesCard key={data._id} data={data} len={6} col="4"></ServicesCard>)
              }
                
                  <Col className="" md="12">
                     <Link className="m-5 btn btn-warning" to="/more-cars">See More</Link>  
                  </Col>
                                </>
                        )
                    }

           
        
             </Row>
            
            </Container>

            <Container className='my-5 shadow border-radius common'>
            <Row className="d-flex justify-content-center">
                 <Col md={12}>
      
                 <h1 className='text-center'>
                   Reviews
                 </h1>
                 <hr/>
                        
                   {
                       reviewloading ? (
                            
                            <>
                                
                                <Col className="" md="12">
                                          <div className="spinner-border text-success" role="status">
                                   <span className="visually-hidden">Loading...</span>
                              </div>
                              </Col>
                        
                            </>
                            )
                                :
                                (
                                    <>
                                        <ListGroup>
                                            
                                            {
                                                reviewData && reviewData.map((item,i) => { 

                                               
                                                    const sl = i + 1;
                                                    let rating = parseInt(item.rating);
                                                

                                                        return (
                                                    <>
                                                         <ListGroupItem className='my-2' key={item._id}>
                                                                    <h2>
                                                                          <strong>
                                                                    {sl}#
                                                                        {item.username} :
                                                                </strong>
                                                                <span>
                                                                        { item.review}
                                                                </span>
                                                              </h2>
                                                                  
                                                                
                                                                     
                                                                   
                                                               <StarRatings
                                                                    rating={rating}
                                                                    starRatedColor="orange"
                                                                    changeRating={rating}
                                                                    numberOfStars={5}
                                                                    name='rating'
                                                                    starDimension="40px"
                                                                    starSpacing="15px"
                                                                    />
                                                               
                                                             
                                                            </ListGroupItem>  
                                                                    </>
                                                                )
                                                } 
                                                )
                                            }
                                           
                                            
                                           
                                    </ListGroup>
                                    </>
                            )
                   }
           
                 </Col>
              
                
             </Row>
         
          
            </Container>
            
            <Container className='common'>
            <Row className='my-5 shadow border-radius d-flex justify-content-around align-items-center'>
                 <Col md={12}>
                    <h1 className='text-center'>
                    Our Partners
                    </h1>
        
                   
                 </Col>
                 <Col md={3} className="p-3 mx-2">
                     <img src="data:image/jpeg;base64,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"  height="200px" width="200px" />
                 </Col>
                 <Col md={3} className="p-3 mx-2">
                     <img src="data:image/png;base64,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" height="200px" width="200px"  />
                 </Col>
                 <Col md={3} className="p-3 mx-2">
                     <img src="data:image/jpeg;base64,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" height="200px" width="200px"  />
                 </Col>
             </Row>
            </Container>

        <Footer></Footer>
        </>
    );
};

export default Home;