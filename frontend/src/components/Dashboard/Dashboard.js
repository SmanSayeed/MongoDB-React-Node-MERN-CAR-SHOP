import React,{useState} from 'react';
import useAuth from '../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Dheader from './Dheader/Dheader';
import './Dashboard.css';
import AdminRoute from '../Auth/AdminRoute/AdminRoute';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ServiceManage from '../Services/ServiceManage/ServiceManage';
import Appointment from '../Appointment/Appointment';
import AddReview from '../Review/AddReview';
import Pay from '../Dashboard/Pay/Pay';
import ServiceCreate from '../Services/ServiceCreate/ServiceCreate';
import MyBookings from '../Bookings/MyBookings/MyBookings';
import AllBookings from '../Bookings/AllBookings/AllBookings';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
    
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const { user, logout } = useAuth();

  let a = Object.values(admin)[0];
  console.log(a)

  
   
    
    const UserMenu = () => {
        return (
            <>
                              <li className="nav-item">
            <Link to={`${url}/pay`} className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Pay</span>
            </Link>
                            </li>
                            
                            

                                <li className="nav-item">
            <Link to={`${url}/my-orders`} className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">My Orders</span>
            </Link>
                            </li>
                            
                            

                                <li className="nav-item">
            <Link to={`${url}/add-review`} className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Reviews</span>
            </Link>
          </li>
            </>
        )
    }

    const AdminMenu = () => {

      

                return (
            <>
            
                              
                                
                                    
                                             <li className="nav-item">
            <Link to={`${url}/manage-orders`}  className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Manage All Orders</span>
            </Link>
          </li>
        
          <li>
            <Link to={`${url}/add-car`} className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Add Car</span></Link>
                            </li>
                                  
          <li>
            <Link to={`${url}/manage-cars`} className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Manage Cars</span></Link>
             </li>
                              <li>
            <Link to={`${url}/make-admin`} className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Make Admin</span></Link>
                            </li>

                                        <li></li>
                 

            </>
        )

    
    }

    const Header = () => {

     
        return (
            <>
                  <div className="col-auto px-0 col-md-3 col-xl-2 px-sm-2 bg-dark">
      <div className="px-3 pt-2 text-white d-flex flex-column align-items-center align-items-sm-start min-vh-100">
        <Link to={`${url}`} className="pb-3 text-white d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">DASHBOARD</span>
        </Link>
    <ul className="mb-0 nav nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start dashboard-menu" id="menu">
                        
          <li className="nav-item">
            <Link to="/" className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
                            </li>
                            
                       {/* <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/allbookings">All Bookings</NavLink>
                            <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/mybookings">My Bookings</NavLink>
                             <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/addservice">Add Services</NavLink> */}
                        
                            
                            
                       
                            { a ?      <AdminMenu></AdminMenu>  :   <UserMenu></UserMenu> }
                    
                     
                           <Button className="nav-link bg-success signout"  onClick={logout}> Sign out</Button>
              

               <li>
                    
            {/* <button  className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-table" onClick={logout} /> <span className="ms-1 d-none d-sm-inline" >Logout</span></button> */}
                            
            </li>
         
        </ul>
       
      </div>
    </div>   
            </>
        )
    }



    return (
        <>
          
            <div className=" container-fluid dashboard">
            <div className="row flex-nowrap">
              <Header></Header>
                <div className="py-3 col">
                 

                        <Switch>
                                <Route exact path={path}>
                                   <DashboardHome></DashboardHome>
                            </Route>
                            
                        {/* admin  */}
                                <AdminRoute path={`${path}/make-admin`}>
                                    <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                                <AdminRoute path={`${path}/manage-cars`}>
                                   <ServiceManage></ServiceManage>
                            </AdminRoute>
                            
                        <AdminRoute path={`${path}/add-car`}>
                            <ServiceCreate></ServiceCreate>
                            </AdminRoute> 
                            
                        <AdminRoute path={`${path}/manage-orders`}>
                            <AllBookings></AllBookings>
                        </AdminRoute> 
                            
                            {/* User  */}
                    
                            
                            <AdminRoute path={`${path}/add-review`}>
                                <AddReview></AddReview>  
                            </AdminRoute> 

                        <AdminRoute path={`${path}/my-orders`}>
                                <MyBookings></MyBookings>
                        </AdminRoute> 


                        <AdminRoute path={`${path}/pay`}>
                            <Pay></Pay>
                        </AdminRoute>   

                        


                </Switch>

                </div>
            </div>
            </div>

        </>
    );
};

export default Dashboard;