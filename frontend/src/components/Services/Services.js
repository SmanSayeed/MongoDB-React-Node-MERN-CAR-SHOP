import React, { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
   
    const [servicesData] = useServices();
    console.log('---------------------')
    console.log(servicesData);

    const [loading,setLoading] = useState(true);  
    
    useEffect(()=>{
        if(servicesData){
            setLoading(false);
          }
    },[])

 

  if(loading){
    return (
      <>
                           <div className="spinner-border text-success" role="status">
                                   <span className="visually-hidden">Loading...</span>
                          </div>
      </>
    )
  }


    return (
      <>
        <Header></Header>
        <PageTopBanner title="ALL CARS"></PageTopBanner>
        <Container>
          <Row xs={1} md={3} className="m-5 g-4" >
              {
                     servicesData.map(data =><ServicesCard data={data} len={data.length}>

                        </ServicesCard>)
              }
      
        
          </Row>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Services;