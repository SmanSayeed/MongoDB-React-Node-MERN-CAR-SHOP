import React,{useEffect,useState} from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useServices from '../../../hooks/useServices';
import axios from 'axios';
import './ServiceManage.css';
import { Col } from 'react-bootstrap';

const ServiceManage = (id) => {

    const { user, admin } = useAuth();

   const [servicesData,setServicesData] = useState([]);

    const [sloading, setLoading] = useState(true);
   

    
        useEffect(() => {

    
        axios.get('cars').then(res=>{
            console.log(res.data);
            setServicesData(res.data);
            setLoading(false);
        })

        }, [])
    
    const deleteCar = (id) => {
          const confirm = window.confirm('Are you sure?');
        if(confirm){
            axios.delete(`cars/${id}`).then(res=>{
                console.log(res.data);
      
                if(res.data.deletedCount > 0){
                    alert('Deleted successfully');
                    const remainings= servicesData.filter(item=>item._id!==id);
                    setServicesData(remainings);
                }
            })
        }
    }

    
    return (
        <div>
           
            <h1>
                 Manage Cars 
            </h1>

            <div className='row'>
                <div className='p-2 col-md-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>sl</th>
                                <th>Car Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>

                            </tr>
                        </thead> 

                        <tbody>
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
                                                servicesData.map((data,i) => (
                                                    <>
                                                        <tr key={ data._id}>
                                                            <td>{ i+1}</td>
                                                            <td>{data.title}</td>
                                                            <td>
                                                                <img src={data.image }  width="100px" height="100px" />
                                                            </td>
                                                            <td>
                                                                {data.description}
                                                            </td>
                                                                      <td>
                                                                {data.price}
                                                            </td>
                                                                <td>
                        <button className='mx-auto mt-2 btn bg-danger color-white w-100' onClick={()=>deleteCar(data._id)}>Delete</button>
                    </td>
                                                    </tr>
                                                    </>
                                        ))
              }
                
              
                                </>
                        )
                    }
                        </tbody>

                      

                      
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceManage;