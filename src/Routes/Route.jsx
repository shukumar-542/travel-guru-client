// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import LoginLayout from '../Layouts/LoginLayout';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import Home from '../Pages/Home/Home';
import Booking from '../Pages/Booking/Booking';
import BookingDetails from '../Pages/BookingDetails/BookingDetails';
import PrivateRoutes from './PrivateRoutes';

const Route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children :[
            {
                path : '/',
                element : <Home></Home>,
                
            },
            {
                path :'category/:id',
                element : <Booking></Booking>,
                loader : ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
                
            },
            {
                path : 'category/hotel',
                element : <PrivateRoutes><BookingDetails></BookingDetails></PrivateRoutes>
            }
        ]
    },
    {
        path : '/login',
        element : <LoginLayout></LoginLayout>,
        children :[
            {
                path : 'login',
                element:<Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            }
        ]
    }
])

export default Route;