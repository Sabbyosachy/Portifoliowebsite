import Aos from 'aos';
import React, { useEffect } from 'react';
import './Services.css';
const Services = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div id="servises" className="py-5 container">
            <div data-aos="fade-down">
            <h3 className="fw-bold">SERVICES</h3>
            <h6 className="sub">What i will do for you</h6>
            <hr className="w-25 mx-auto"></hr>
            </div>
            <div>
                <div className="row py-5">
                    <div className="col-md-4 px-4 mt-5 col-12 bgr">
                        <div data-aos="zoom-in">
                        <img  className="w-75 mt-3 srimg" src="https://i.ibb.co/sKFh2zV/im1.jpg" alt="" srcset="" />
                        </div>     
                        <div data-aos="zoom-out">
                        <h6 className="serv-tit">Web Development</h6>
                        <p  className="serv-subtitle">I am expert in Web Developing.I made website which easy to navigate ,website  easy to find/look up/search.I use React Router, Vanilla Js, React JS for it and server side work i use Express JS, Node Js.</p>
                        </div>
                    </div>
                    <div className="col-md-4 px-4 col-12 bgrs">
                   <div data-aos="zoom-in">
                   <img className="w-75 mt-3 srimg" src="https://i.ibb.co/MCdjmqZ/im2.jpg" alt="" srcset="" />
                   </div>
                        <div data-aos="zoom-out">
                        <h6 className="serv-tit">Web Design</h6>
                        <p className="serv-subtitle">I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap,Tailwind,React Router, Vanilla Js, React JS for it.See some of my works in projects section.</p>
                        </div>
                    </div>
                    <div className="col-md-4 px-4 mt-5 col-12 bgr">
                   <div data-aos="zoom-in">
                   <img className="w-75 mt-3 srimg" src="https://i.ibb.co/YPwqnS6/im3.jpg" alt="" srcset="" />
                   </div>
                        <div data-aos="zoom-out">
                        <h6 className="serv-tit">MERN Stack Developer</h6>
                        <p className="serv-subtitle">I am a MERN stack web developer. I use 4 technologies namely: MongoDB, Express, React and Node. js. It is designed to make the development process smoother and easier.See some of my works in projects section.</p>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;