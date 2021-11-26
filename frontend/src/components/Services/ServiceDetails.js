import React, {useContext, createContext, useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import axios from 'axios';
import { useForm } from "react-hook-form";

import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


// import useServices from '../../hooks/useServices';
// import PageTopBanner from '../PageTopBanner/PageTopBanner';
// import ServicesCard from '../ServicesCard/ServicesCard';

// import './ServiceDetails.css';

const ServiceDetails = () => {
  const { index } = useParams();
  const {user} = useAuth();
  const [jsonData, setJsonData] = useState([]);
  const [singleData, setSingleData] = useState({
    'title':''
  });
  let title = singleData.title;
  const {register,handleSubmit,reset } = useForm();


  useEffect(() => {

    axios.get(`cars/${index}`).then(res=>{
      console.log(res.data);
      setSingleData(res.data);
      title = singleData.title;
  })

  }, [index]);

  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState('');
  const [error,setError] = useState('');

  const onSubmit = data => {
    setLoading(true);  
      console.log('---------serve-------------');
    console.log(data);
    data.service = singleData.title;
  console.log('---------serve---========------------');
    axios.post('orders',data).then(res=>{
     
      if (res.data.insertedId) {
           console.log('----------------------');
             console.log(res);
          setMessage('Sccessfully Ordered');  
          setLoading(false);  
          reset(res.data);
        }
    })
  }


  
    console.log('jsonData');    
    console.log(jsonData);

    return (
      <>
        <Header></Header>
        <PageTopBanner title="Order Car"></PageTopBanner>
        <Container>

          
          <Row xs={1} md={1} className="m-5 g-4 d-flex justify-content-center" >
            
             
                      <Col md="4" className="card-col">
                      <Card className="main-card d-flex align-items-center justify-content-center">  
                            <Card.Img variant="top" src={singleData.image} className="rounded card-img"  />

                        <Card.Body className="text-white d-flex align-items-center flex-column justify-content-center">
                  <Card.Title>
                    <h2 className="text-center">
                                    {singleData.title}
                  </h2 >
                    <p className="text-center">
                      Price: { singleData.price}$
            </p>
                  </Card.Title>
                            <Card.Text className="text-center cardtext">
                            {singleData.description}
                          
                            </Card.Text>
                        </Card.Body>
                      
                      </Card>
                      </Col>


              {
                singleData ? 
                
                (
                  <>
                  
                    <Col md="6" className="mx-3 text-white rounded shadow bg-dark card-col">

                    {
                    loading && (
                    <>
                            <div className="m-2 spinner-border text-success" role="status">
                                  <span className="visually-hidden">Loading...</span>
                            </div>

                    </>)
                    
                    }

                    {
                        message && (
                        <>
                              <h1 className='m-2 alert alert-success'>{message}</h1>

                        </>)
                        
                      }
                      
                     

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                          <h1>ORDER</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input {...register("name",{required:true})} type="text" className="form-control" id="name" placeholder="Enter name" value={user.displayName} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input {...register("email",{required:true})} type="text" className="form-control" id="email"  placeholder="Enter email link" value={user.email} />
                          </div>

                          <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input {...register("mobile",{required:true})} type="text" className="form-control" id="mobile"  placeholder="Add mobile number" value={user.mobile} />
                          </div>
                          
                               
                        {/* <div className="form-group">
                            <label htmlFor="title">Selected Place Name</label>
                                  
                            <input {...register("service",{required:false})} type="text" className="form-control"  value={singleData._id} id="title" />
                        </div> */}
                       

                        <div className="form-group">
                            <label htmlFor="address">Shipping Address</label>
                            <input {...register("address",{required:true})} type="text" className="form-control" id="address"  placeholder="Enter address" />
                        </div>
                  
                

                        <input {...register("status",{required:true})} type="hidden" className="form-control"  value="Pending"  />
                      
                        <button type="submit" className="mt-2 btn orange-bg">Order</button>
                    </div>

                </form>

                    </Col>

                      </>
                    )
                      :
                      <h1>Loading...</h1>
                     
              }
          

          </Row>

          
        </Container>
        <Footer></Footer>
        </>
    );
};

export default ServiceDetails;