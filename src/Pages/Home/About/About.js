import Aos from 'aos';
import React, { useEffect } from 'react';
import './About.css';
import img from '../../image/Sabbyosachy.pdf';

const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div id="about" className="py-5 pt-5 mt-5 about container">
           <div data-aos="fade-down">
           <h3 className="fw-bold">ABOUT ME</h3>
            <h6 className="sub">Why Choose Me?</h6>
            <hr className="w-25 mx-auto"></hr>
           </div>
            <div className="row aboutinfo element-about py-5">
                
                <div data-aos="fade-right" className="col-md-5">
                   <img className="w-75 profile" src="https://i.ibb.co/5Y11WQW/20210220-122023-01-removebg-preview.png" alt="" srcset="" /> 
                </div>
                <div data-aos="fade-left" className="col-md-6 pt-5 bor info">
                <h6 className="name1">Wanna Know Me ?</h6>
                <h4 className="fw-bold about-title">Let me introduce myself</h4>
                <p className="description1">Hi, I'm Sabbyosachy Chakraborty. I’m a web developer. Self-motivated and dedicated, knowledge and proficiency in JavaScript, HTML, CSS,React.js,Bootstrap,Tailwind,Node.js, NodeExpress, MongoDB, and mobile responsive website development.My longing is to become a full-stack web developer.</p>
                <p className="description1">Age : 21</p>
                <p className="description1">Education : Bsc in Cse Running-2019</p>
                <p className="description1">Language</p>
                <ul className="description1">
                    <li>Native : Bangla</li>
                    <li>Intermediate : English</li>
                </ul>
                <div data-aos="fade-up-left">
                <button className="btn">Appoint Me</button>
                <a download href={img}><button className="btn">Resume <i class="fas fa-download"></i></button></a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;