import React,{useContext} from 'react';
import { ButtonGroup,Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Switch, Route, Link,NavLink } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const Header = () => {

    const {user,logout} = useAuth();

    return (
    <>
    <div className='top-nav bg-dark'>
        <div className='container'>
            <div className='row'>
                <div className='my-2 col-md-12 d-flex justify-content-between '>
                {
                    user?.email &&(
                        <>
                          
                                <span className='user-name'>
                                    Hello, {user.displayName} &nbsp;
                                </span>
                                <Button className="nav-link bg-success signout"  onClick={logout}> Sign out</Button>
                     
                        </>
                    )
            

                    }

                    {!user?.email &&
                    (
                    <>
                                    <NavLink className="nav-link bg-success pull-right color-white" activeClassName="activeLinkc" as={Link} to="/signin">Sign in</NavLink>
                                    
                                    <NavLink className="nav-link bg-success pull-right color-white" activeClassName="activeLinkc"  as={Link} to="/register">Register</NavLink>
                    </>
                            
                    ) 
                    }
                </div>
            </div>
        </div>
    </div>
       <Navbar  variant="dark" className="orange-bg" expand="lg" >
        <Container>
            <Navbar.Brand  as={Link} to="/" className='brand'>CAR<span> WORLD </span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className=" nav-items">
                <NavLink exact={true} className="nav-link" activeClassName="activeLinkc"  as={Link} to="/">HOME</NavLink>
                <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/more-cars">MORE CARS</NavLink>

                {/* <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/appointment">Appointment</NavLink> */}

                {/* <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/review">REVIEW</NavLink> */}
             
                <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/about">ABOUT</NavLink>
                <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/contact">CONTACT</NavLink>

                {


                    user?.email && (
                        <>
   <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/dashboard">DASHBOARD</NavLink>
                           
                        </>
                     )
                
                }

                {/* <div style={{marginLeft:'200px'}} >
              
                    {
                    user?.email &&(
                        <>
                             <div className='flex-row d-flex align-items-center'>
                                <span >
                                    Hello, {user.displayName} &nbsp;
                                </span>
                                <Button className="nav-link bg-primary signout"  onClick={logout}> Sign out</Button>
                        
                            </div>
                        </>
                    )
            

                    }

                    {!user?.email && <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/signin">Sign in</NavLink>}

                </div> */}
                {/* <NavLink className="nav-link" activeClassName="activeLinkc"  as={Link} to="/signup">Sign up</NavLink> */}
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    </>
    );
};

export default Header;