/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import Slider from '../Slider/Slider';




const Home = () => {
    const [categorys, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className='d-flex mt-5'>

            {
                    categorys.map(category => <Hotel
                        key={category.id}
                        category={category}
                    ></Hotel>)
                }
            {/* <Slider categorys={categorys}></Slider> */}


        </div>
    );
};

export default Home;