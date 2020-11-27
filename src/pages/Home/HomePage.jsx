import React from 'react';
import Banner from '../../components/Carousel/Banners/Banner';
import SliderSlick from '../../components/Slider/Slider'; 

import './HomePage';

const HomePage=()=>{
  return (
    <div className='home-page'>
      <div className='banner'>
        <Banner />
      </div>
      <SliderSlick/>
    </div>
  )
}
export default HomePage;