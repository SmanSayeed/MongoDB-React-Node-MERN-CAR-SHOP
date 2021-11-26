
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Switch,Route,  Redirect,
  useHistory,
  useLocation } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import NoPageFound from './components/NoPageFound/NoPageFound';
import initializeAuthentication from './Firebase/firebase.initialize';
import Signin from './components/Auth/Signin/Signin';
import Register from './components/Auth/Register/Register';
import ServiceDetails from './components/Services/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';
import Review from './components/Review/Review';
import useAuth from './hooks/useAuth';
import useFirebase from './hooks/useFirebase';
import ServiceCreate from './components/Services/ServiceCreate/ServiceCreate';
import axios from 'axios';
import AllBookings from './components/Bookings/AllBookings/AllBookings';
import MyBookings from './components/Bookings/MyBookings/MyBookings';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

axios.defaults.baseURL = 'https://morning-savannah-96188.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:5000/';

  const {user} = useFirebase();
  return (
    <div className="App">

  <AuthProvider>

    <Router>


          <Switch>
            
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="/more-cars">
              <Services></Services>
          </Route>

          <Route path="/signin">
            {user.email ? <Redirect to="/"/> :   <Signin></Signin>}
            
            </Route>
            <Route path="/register">
            {user.email ? <Redirect to="/"/> :   <Register></Register>}
            
          </Route>
        {/*          
          <Route path="/signup">
              <Signup></Signup>
          </Route> */}

        
          <PrivateRoute path="/order/:index">
            <ServiceDetails></ServiceDetails>   
          </PrivateRoute> 

            
          {/* </Route> */}

          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="*">
            <NoPageFound></NoPageFound>
          </Route>



        </Switch>

    </Router>
  </AuthProvider>

    </div>
  );
}

export default App;
