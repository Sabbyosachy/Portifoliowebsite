import Aos from 'aos';
import React, { useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Skill.css';

const Skill = (props) => {
    const{title,image}=props.ability;
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div>
            <CardGroup className="card-group">
                <Card className="card shadow">
                    <div data-aos="zoom-in">
                    <Card.Img className="img-size w-50 mx-auto" variant="top" src={image} />
                    </div>
                    <Card.Body className="body-color">
                        <div data-aos="zoom-in-down">
                        <h5>{title}</h5>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Skill;