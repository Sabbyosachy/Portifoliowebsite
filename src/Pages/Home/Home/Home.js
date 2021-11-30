import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeElement from '../HomeElement/HomeElement';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
           
           <HomeElement/>
           <About/>
           <Skills/>
           <Services/>
           <Project/>
           <Contact/>
           
        </div>
    );
};

export default Home;