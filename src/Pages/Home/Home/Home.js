import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HomeElement from '../HomeElement/HomeElement';
import Navigation from '../Navigation/Navigation';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
           <Navigation/>
           <HomeElement/>
           <About/>
           <Skills/>
           <Services/>
           <Project/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;