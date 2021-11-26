import React from 'react';
import './Dheader.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const Dheader = () => {
    return (
        <>
            <div className="col-auto px-0 col-md-3 col-xl-2 px-sm-2 bg-dark">
      <div className="px-3 pt-2 text-white d-flex flex-column align-items-center align-items-sm-start min-vh-100">
        <Link to="/" className="pb-3 text-white d-flex align-items-center mb-md-0 me-md-auto text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </Link>
                    <ul className="mb-0 nav nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start dashboard-menu" id="menu">
                        
          <li className="nav-item">
            <Link to="#" className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>
        
          <li>
            <Link to="#" className="px-0 align-middle dashboard-nav nav-link">
              <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Orders</span></Link>
          </li>
         
         
        </ul>
       
      </div>
    </div>   
        </>
    );
};

export default Dheader;