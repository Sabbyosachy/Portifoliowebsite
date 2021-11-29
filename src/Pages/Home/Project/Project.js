import Aos from 'aos';
import React, { useEffect } from 'react';
import './Project.css';

const Project = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
       
        <div data-aos="fade-up" id="projects" className="py-5 container">
            <h3 className="fw-bold">PROJECTS</h3>
            <h6 className="sub">My recent projects</h6>
            <hr className="w-25 mx-auto"></hr>
        </div>
           

    );
};

export default Project;