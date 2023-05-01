/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Hotel.css";
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const Hotel = ({ category }) => {
    // eslint-disable-next-line react/prop-types
    const { img,id,name} = category;
    console.log(img);
    return (
        <Link to={`/category/${id}`}>
            <div className='card-img ms-4'>
                <img src={img} className=' ' alt="" />
                <h4>{name}</h4>
            </div>
        </Link>
    //    <div>
    //         <h1>hotel coming soon</h1>
    //    </div>
          
        
       
    );
};

export default Hotel;