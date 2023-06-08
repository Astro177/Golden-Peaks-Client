import React from 'react';
import Banner from '../../components/BannerSlider.jsx/Banner';
import PopularClass from './PopularClass';
import Bestinstructors from './Bestinstructors';


const Home = () => {
    return (
        <div className='my-container'>
            <Banner/>
            <PopularClass/>
            <Bestinstructors/>
        </div>
    );
};

export default Home;