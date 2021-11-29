import React from 'react';
import './HomeElement.css';
import img from '../../image/Sabbyosachy.pdf';

const HomeElement = () => {
    return (
        <div className="py-5 container">
            <div className="row element">
                <div className="col-md-6 col-12 info">
                    <p className="fw-bold">Hello I'm</p>
                    <h6 className="name">Sabbyosachy Chakraborty</h6>
                    <h3 className="fw-bold subtitle">.</h3>
                    <p className="description">I am a professional web designer and developer.I spend my whole day, practically every day, experimenting creating, and developing fancy and unique websites. I am always ready to accept a new challenge. I build websites that delight and inform.Building applications with fronted operations.</p>
                       <div className="button">
                           <button className="btn">About Me</button>
                           <a download href={img}><button className="btn">Resume <i class="fas fa-download"></i></button></a>
                           
                       </div>
                </div>
               
                <div className="col-md-5 col-12 imag">
                    <img className="w-75 profile" src="https://i.ibb.co/CJyQ3p9/20210301-125415-01-removebg.png" alt="" srcset="" />                   
                </div>
            </div>
           
        </div>
    );
};

export default HomeElement;