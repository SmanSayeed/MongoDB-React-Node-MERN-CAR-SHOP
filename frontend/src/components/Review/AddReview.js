import React,{useState} from 'react';
import useAuth from '../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import axios from 'axios';

import './AddReview.css';
import { useForm } from "react-hook-form";

const AddReview = () => {
    
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const [inputData, setInputData] = useState({
        'user_id':user._id,
        'user_email': user.email,
        'username': user.displayName,
        'review': 'No review',
        'rating':0
    });
    
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const [error, setError] = useState('');
    
  const {reset } = useForm();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...inputData };
        newLoginData[field] = value;
        setInputData(newLoginData);
    }
    const handleSubmit = e => {
        
        axios.post('reviews', inputData).then(res => {
        console.log(res);
          if(res.data.insertedId){
            setMessage('Sccessfully added a review');  
            setLoading(false);  
            reset(res.data);
          }
        })

        e.preventDefault();
    }
    

    return (
        <>
            <div className='container '>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-8'>
                           
                {
                    loading && (
                    <>
                            <div className="spinner-border text-success" role="status">
                                  <span className="visually-hidden">Loading...</span>
                            </div>

                    </>)
                    
                }

{
                    message && (
                    <>
                           <h1 className='alert alert-success'>{message}</h1>

                    </>)
                    
                }
                        <h3 className='text-center'>Add Review</h3>
                        <form onSubmit={handleSubmit}  >
                                 <lable>Review</lable>
                            <textarea name="review" onBlur={handleOnChange} className='form-control'    ></textarea>
                               <lable>Rating</lable>
                               <br/>
                            <input type="radio" name="rating" onBlur={handleOnChange}
                            value="1" />1 &nbsp;&nbsp;
                            <input type="radio" name="rating" onBlur={handleOnChange}
                         value="2"/>2 &nbsp;&nbsp;
                            <input type="radio" name="rating" onBlur={handleOnChange}
                         value="3"/>3 &nbsp;&nbsp;
                            <input type="radio" name="rating" onBlur={handleOnChange}
                         value="4"/>4 &nbsp;&nbsp;
                            <input type="radio" name="rating" onBlur={handleOnChange} value="5" />5 <br />
                            
                            <br />
                                    <button className='btn btn-warning' type="submit"> Submit </button>
                        </form>
                

                    </div>
            </div>
            </div>
        </>
    );
};

export default AddReview;