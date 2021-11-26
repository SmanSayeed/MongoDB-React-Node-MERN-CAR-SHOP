import React,{useState} from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import axios from 'axios';

import './MakeAdmin.css';
import { Button, Col } from 'react-bootstrap';
const MakeAdmin = () => {

    const { user, admin } = useAuth();

     const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
        const [error, setError] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
       console.log(user);
        axios.put('users/admin', user).then(res => {
            if (res) {
                console.log(res.data.modifiedCount);
                if (res.data.modifiedCount!==0)
                    setSuccess(true);
               if (res.data.modifiedCount===0)
                    setError(true);
            } 
        })

     

        e.preventDefault()
    }   
    

    return (
        <>
            <h2>Make an Admin</h2>
            {success && <h3 className='alert alert-success'>Success</h3>}
               {error && <h3 className='alert alert-danger'>Failed</h3>}
            
            <form onSubmit={handleAdminSubmit}>
                <div className='row d-flex justify-content-center'>
                    <div className='p-5 rounded col-md-8 form-group bg-dark'>
                        
        
                          <input className='my-3 form-control' type="email" name="email" onBlur={handleOnBlur} placeholder='Email Address' />
                  <Button type="submit" className='btn btn-warning'>Make Admin</Button>
                    </div>
                </div>
              
            
            </form>
        </>
    );
};

export default MakeAdmin;