import Aos from 'aos';
import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
    return (
        <div className="footer">
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div data-aos="zoom-in" className="col-md-5 col-12">
              <div className="left-container text-start">
                <h5 className="head">Sabbyosachy Chakraborty</h5>
                <div className="icons-container d-flex">
                  <div className="icon">
                  <i class="fab fa-facebook"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-youtube"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-twitter-square"></i>
                  </div>
                </div>
                <p className="mt-4 text ">I’m a web developer.Highly potent skills and ability in encoding virus-free and efficient code.Highly talented individual with strong analytical skills ability to provide accurate analysis to complex business system problems and suggest useful solutions is needed.</p>
                <p className="mt-2">Copywrite © 2021 sabbyosachy chakraborty</p>
              </div>
            </div>
            <div data-aos="zoom-in" className="col-md-2 col-12">
              <div className="menu-container">
              
                  <p className="menu">Home</p>
                  <p className="menu">About</p>
                  <p className="menu">Projects</p>
                  <p className="menu">Services</p>
                  <p className="menu">Contact</p>
                  
              </div>
            </div>
            <div data-aos="zoom-in" className="col-md-5 col-12">
              <div className="text-start iteams">
              <p><i class="fas fa-map-marker-alt"></i>  chattak,sylhet,Banglaseh</p>
             <p> <i class="fas fa-envelope"></i>  sabbyosachychakraborty@gmail.com</p>
              <p><i class="fas fa-phone-square-alt"></i>  +88 016 1063 5611</p>
              <p><i class="fas fa-phone-square-alt"></i>  +88 016 4688 1492</p>
                         
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
    );
};

export default Footer;