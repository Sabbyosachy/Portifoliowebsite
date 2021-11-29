import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';

const Skills = () => {
    const[skill,setSkill]=useState([]);
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res=>res.json())
        .then(data => setSkill(data));
    },[])
    return (
        <div className="py-5 container">
              <div>
              <h3 className="fw-bold">MY SKILLS</h3>
              <h6 className="sub">List of my skills</h6>
              <hr className="w-25 mx-auto"></hr>
              </div>
              <div className="row row-cols-1 row-cols-md-4 g-4 p-5 container mx-auto">
              {
                 skill.map(ability=><Skill key={ability.id} ability={ability}></Skill>) 
              }
              </div>
        
        </div>
    );
};

export default Skills;