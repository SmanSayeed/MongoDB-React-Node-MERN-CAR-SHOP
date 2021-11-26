import React,{useState} from 'react';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import axios from 'axios';

import './DashboardHome.css';
const DashboardHome = () => {

    const { user, admin } = useAuth();

    return (
        <div>
                <h1>DASHBOARD</h1>
                <h3>WELCOME {user.displayName}</h3>
        </div>
    );
};

export default DashboardHome;