import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about" className="py-5 about container">
            <h3 className="fw-bold">ABOUT ME</h3>
            <h6 className="sub">Why Choose Me?</h6>
            <hr className="w-25 mx-auto"></hr>
            <div className="row aboutinfo element py-5">
                
                <div className="col-md-5">
                   <img className="w-75 profile" src="https://i.ibb.co/5Y11WQW/20210220-122023-01-removebg-preview.png" alt="" srcset="" /> 
                </div>
                <div className="col-md-6 pt-5 info">
                <h6 className="name">Wanna Know Me ?</h6>
                <h4 className="fw-bold">Let me introduce myself</h4>
                <p className="description">Hi, I'm Sabbyosachy Chakraborty. I’m a web developer. Self-motivated and dedicated, knowledge and proficiency in JavaScript, HTML, CSS,Recat.js,Bootstrap,Tailwind,Node.js, NodeExpress, MongoDB, and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code.</p>
                <button className="btn">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default About;