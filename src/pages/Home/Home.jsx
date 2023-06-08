import React from 'react';
import Banner from '../../components/BannerSlider.jsx/Banner';
import PopularClass from './PopularClass';
import Bestinstructors from './Bestinstructors';
import AboutUS from './AboutUS';


const Home = () => {
    return (
        <div className='my-container'>
            <Banner/>
            <PopularClass/>
            <Bestinstructors/>
            <AboutUS/>
        </div>
    );
};

export default Home;