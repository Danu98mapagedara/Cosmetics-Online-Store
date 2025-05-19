import React from 'react'
import './Blog.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import  blogslider from '../../constants/blog'

const Blog = () => {
  return (
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
{blogslider.map((item,index) => (

    <SwiperSlide key={index }className='slider-item'>

    <div className='slider-content'>
       <img src={item.image} alt="" width={200} />
        <h2 className='slider-title'>{item.title}</h2>
        <p className='slider-description'>{item.description}</p>
        <button >Read More</button>
        </div>
  </SwiperSlide>

))}



  </Swiper>
  )
}

export default Blog