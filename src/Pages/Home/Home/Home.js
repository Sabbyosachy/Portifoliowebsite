import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeElement from '../HomeElement/HomeElement';
import Navigation from '../Navigation/Navigation';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
           <Navigation/>
           <HomeElement/>
           <About/>
           <Skills/>
           <Project/>
           <Contact/>
        </div>
    );
};

export default Home;