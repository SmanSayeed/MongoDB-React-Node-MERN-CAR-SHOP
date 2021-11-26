
import {Link,useLocation,useHistory,NavLink} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import './Register.css';


import useAuth from '../../../hooks/useAuth';
import PageTopBanner from '../../PageTopBanner/PageTopBanner';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Register = () => {

    const [userData, setUserData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...userData };

        newLoginData[field] = value;
        setUserData(newLoginData);

    }
    const handleRegisterSubmit = e => {
        
        if (userData.password !== userData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(userData.email, userData.password, userData.name);
        e.preventDefault();
    }
    



        return (

            <>
      
<Header></Header>
                
                <PageTopBanner title={'Register'}></PageTopBanner>

                <section className="p-5 text-white login-section">
                    <div className="container-fluid">
                        <div className="mt-5 row d-flex justify-content-center ">
                            <div className="rounded shadow col-md-12 col-lg-12 col-xl-5 bg-dark">
                                {/* {message && <h1 className='alert alert-warning'>{message}</h1>}
                                {error && <h1 className='alert alert-danger'>{error}</h1>}
                                {success && <h1 className='alert alert-success'>{success}</h1>}
                                {user && user.name} */}

                                
                                {!isLoading && <form onSubmit={handleRegisterSubmit}      >

                                    <div className="my-3 form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" name="name" onBlur={handleOnBlur} />
  
                                    </div>
                                    
                                    <div className="my-3 form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onBlur={handleOnBlur} />
  
                                    </div>
                                    <div className="my-3 form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onBlur={handleOnBlur} />
                                    </div>
                                    <div className="my-3 form-group">
                                        <label htmlFor="password2">Re Type Password</label>
                                        <input type="password" className="form-control" id="password2" onBlur={handleOnBlur} placeholder="Password" name="password2" />
                                    </div>
                                    <div className="my-3 ">
                                        <button type="submit" className="btn orange-bg">Register</button>
                                    </div>

                                </form>}

       
           
                            </div>
   
                        </div>
                    </div>

 
                </section>
<Footer></Footer>

            </>
        );

    
};

export default Register;

