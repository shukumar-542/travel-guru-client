/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import img1 from '../../assets/Sajek.png'
import './Silider.css'
import { Link } from 'react-router-dom';

const Slider = ({categorys}) => {
    const images = categorys;
    console.log(images);
    const [id , setId] = useState(null)
    const[destination, setDestination] = useState('')
    useEffect(()=>{
        console.log(id);
    },[id])
    return (
       
         
         <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
       {
            // eslint-disable-next-line react/jsx-key
            images.map(image=><SwiperSlide>
       <Link to={`/category/:${image.id}`}>
     

                <img src={image.img} alt=""  className={`${id?.id === image.id ? 'border border-2' : ''}`} onClick={()=>setId(image)} />
       </Link>

                </SwiperSlide>)
        }
      
      </Swiper>
         
      
       
    );
};

export default Slider;