/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const BookingDetails = () => {
    const {hotel} = useContext(AuthContext);
    console.log(hotel);
    return (
        <div>
            
        </div>
    );
};

export default BookingDetails;