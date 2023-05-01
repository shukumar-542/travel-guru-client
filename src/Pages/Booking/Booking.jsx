/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { Link, useLoaderData } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Providers/AuthProvider';


const Booking = () => {
    const {setHotel} = useContext(AuthContext)
    const categoryHotel = useLoaderData()
    console.log(categoryHotel);
    const [startDate, setStartDate] = useState(new Date());
    if(categoryHotel){
        setHotel(categoryHotel)
    }
    return (
        <div className='w-50 mx-auto bg-white p-4'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Origin</Form.Label>
                    <Form.Control type="email" placeholder="Dhaka" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="password" placeholder="cox' bazar" />
                </Form.Group>

                <div className='d-flex'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>From</Form.Label>

                        <ReactDatePicker className='w-75' selected={startDate} onChange={(date) => setStartDate(date)} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>TO</Form.Label>
                        <ReactDatePicker className='w-75' selected={startDate} onChange={(date) => setStartDate(date)} />

                    </Form.Group>
                </div>

                <Link to='/category/hotel'>

                    <Button variant="warning" className='w-full' type="submit">
                        Start Booking
                    </Button></Link>
            </Form>
        </div>
    );
};

export default Booking;