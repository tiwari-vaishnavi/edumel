import React from 'react';

import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';

import {Banner, Counter, CourseGrid,CourseCat,About,CourseGridPopular, Features,Team,Review,Cta}  from '../layouts/home/index';


const Home = () => {
    return (
        <div className="home-page">       
            <Header/>
                <Banner />
                <Counter />
                <CourseGrid />
                <CourseCat />
                <About />
                <CourseGridPopular />
                <Features />
                <Team />
                <Review />
                <Cta />    
            <Footer/>  
        </div>
    )
}

export default Home;