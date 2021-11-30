import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import Projects from '../Home/Projects/Projects';




const Project = () => {
    const[skill,setSkill]=useState([]);
    useEffect(()=>{
        fetch('./projectdata.json')
        .then(res=>res.json())
        .then(data => setSkill(data));
    },[])
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    
    return (
       
        <div data-aos="fade-up" id="projects" className="pt-5 container">
            <h3 className="fw-bold">PROJECTS</h3>
            <h6 className="sub">My recent projects</h6>
            <hr className="w-25 mx-auto"></hr>
            <div data-aos="zoom-in" className="row row-cols-1 row-cols-md-3 g-5 p-5 container mx-auto ">
           
                {
                    skill.map(ability=><Projects key={ability.id} ability={ability}></Projects>)
                }
           
         
            </div>
        </div>
           

    );
};

export default Project;