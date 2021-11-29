import React, { useEffect } from 'react';
import './HomeElement.css';
import img from '../../image/Sabbyosachy.pdf';
import Aos from 'aos';

const HomeElement = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div className="page">
            <div className="container py-5">
            <div className="row element">
                <div data-aos="fade-up-right" className="col-md-6 col-12 info">
                    <p className="fw-bold">Hello I'm</p>
                    <h6 className="name">Sabbyosachy Chakraborty</h6>
                    <h3 className="fw-bold subtitle">.</h3>
                    <p className="description">I am a professional web designer and developer.I spend my whole day, practically every day, experimenting creating, and developing fancy and unique websites. I am always ready to accept a new challenge. I build websites that delight and inform.Building applications with fronted operations.</p>
                       <div data-aos="fade-down" className="button">
                           <button className="btn">About Me</button>
                           <a download href={img}><button className="btn">Resume <i class="fas fa-download"></i></button></a>
                           
                       </div>
                </div>
               
                <div data-aos="zoom-in" className="col-md-5 col-12 imag">
                    <img className="w-75 profile" src="https://i.ibb.co/CJyQ3p9/20210301-125415-01-removebg.png" alt="" srcset="" />                   
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default HomeElement;