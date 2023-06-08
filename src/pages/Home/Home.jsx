import React from 'react';
import Banner from '../../components/BannerSlider.jsx/Banner';
import PopularClass from './PopularClass';


const Home = () => {
    return (
        <div className='my-container'>
            <Banner/>
            <PopularClass/>
        </div>
    );
};

export default Home;