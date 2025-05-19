import React from 'react'
import './Homeslider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import  feedbackslider from '../../constants/feedback'

const Homeslider = () => {
  return (
   <div className='home-slider'>
<Swiper
modules={[ Navigation, Pagination, Autoplay]}

spaceBetween={50}
slidesPerView={3}
pagination={{ clickable: true }}
autoplay={{
  delay: 3500,
  disableOnInteraction: false,
}}
loop={true}
>

{feedbackslider.map((item,index) => (
<SwiperSlide key={index} className='slider-item'>
<div className='slider-content'>
  <div className='slider-rating'>{item.rating}</div>
  <h2 className='slider-title'>{item.title}</h2>
  <p className='slider-description'>{item.description}</p>
  </div>



</SwiperSlide>

))}


</Swiper>

   </div>
  )
}

export default Homeslider