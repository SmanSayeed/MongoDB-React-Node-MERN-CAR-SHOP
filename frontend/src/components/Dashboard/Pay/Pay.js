import React,{useState} from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import axios from 'axios';

import './Pay.css';

const Pay = () => {

    const { user, admin } = useAuth();

    return (
        <div className='container p-5 m-5'>
            <h1>

           Payment system coming soon
            </h1>
        </div>
    );
};

export default Pay;