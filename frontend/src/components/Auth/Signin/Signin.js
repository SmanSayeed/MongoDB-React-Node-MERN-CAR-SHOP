
import {Link,useLocation,useHistory} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import './Signin.css'

import useAuth from '../../../hooks/useAuth';
import PageTopBanner from '../../PageTopBanner/PageTopBanner';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Signin = () => {


    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    

        return (

            <>
      <Header></Header>

                <PageTopBanner title={'Login'}></PageTopBanner>

                <section className="text-white login-section ">
                    <div className="container-fluid">
                        <div className="mt-5 row d-flex justify-content-center ">
                            <div className="rounded shadow col-md-12 col-lg-12 col-xl-5 bg-dark">
                                {/* {message && <h1 className='alert alert-warning'>{message}</h1>}
                                {error && <h1 className='alert alert-danger'>{error}</h1>}
                                {success && <h1 className='alert alert-success'>{success}</h1>}
                                {user && user.name} */}
                                {!isLoading && <form onSubmit={handleLoginSubmit}      >
                                    <div className="my-3 form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onBlur={handleOnChange} />
  
                                    </div>
                                    <div className="my-3 form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onBlur={handleOnChange} />
                                    </div>
                                    <div className="my-3 ">
                                        <button type="submit" className="btn orange-bg">Login</button>
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

export default Signin;

