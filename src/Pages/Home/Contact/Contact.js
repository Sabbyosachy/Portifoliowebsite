import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Aos from 'aos';
const Contact = () => {
    const formRef=useRef();
    const[done ,setDone]=useState(false);
    const handleSubmit=e=>{
        e.preventDefault();
        emailjs.sendForm('service_sclty22', 'template_g0q3lfh', formRef.current, 'user_UpLV9YmyfNAG3CzxH7qSQ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    
    return (
        <div id="contact" className="py-5 pt-5 mt-5  container">
            <div data-aos="fade-down">
            <h4 className="fw-bold">CONTACT ME</h4>
            <h6 className="sub">Fell free to connect me</h6>
            <hr className="w-25 mx-auto"></hr>
            </div>
              <div className="con-bg">
                  <div className="row py-5 mt-5">
                      <div data-aos="fade-right" className="col-md-6 col-12 info">
                          <h5 className="contact-title">Let's Discuss</h5>
                          <br />
                           <p className="contactinfo"><i class="fas fa-phone-square-alt"></i>  +8801646881492</p>
                           <br />
                           <p className="contactinfo"><i class="fas fa-envelope"></i>  sabbyosachychakraborty@gmail.com</p>
                           <br />
                           <p className="contactinfo"><i class="fas fa-map-marker-alt"></i>  Chattak,Sylhet,Bangladesh</p>
                           <a className="contactinfo1" href="https://www.linkedin.com/in/sabbyosachy/"><i class="fab fa-linkedin"></i></a>
                           <a className="contactinfo1" href="https://web.facebook.com/profile.php?id=100019469267782"><i class="fab fa-facebook-square"></i></a>
                           <a className="contactinfo1" href="https://github.com/Sabbyosachy"><i class="fab fa-github-square"></i></a>
                      </div>
                      <div data-aos="fade-left" className="col-md-6 col-12">
                           <form ref={formRef} onSubmit={handleSubmit}>
                               <input type="text" placeholder="Name" name="user_name"/>
                               <br />
                               <input type="text" placeholder="Subject" name="user_subject"/>
                               <br />
                               <input type="email" placeholder="Email" name="user_email"/>
                               <br />
                               <textarea rows="4"  placeholder="Message" name="message"/>
                               <br />
                               <button className="btn">Submit Now</button>
                           </form>
                           {done && <p>Thank You For Your Mail</p>}
                      </div>
                  </div>
              </div>
            </div>
     
    );
};

export default Contact;