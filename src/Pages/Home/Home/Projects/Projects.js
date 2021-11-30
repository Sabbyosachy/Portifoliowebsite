import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Projects.css';
const Projects = (props) => {
    const{site,image,id}=props.ability;
    return (
        <div>
            <CardGroup className="card-group">
                <Card className="card shadow">
                    <div data-aos="zoom-in">
                    <Card.Img className="img-size w-100 p-2 mx-auto proim" variant="top" src={image} />
                    </div>
                    <Card.Body className="body-color">
                        <div data-aos="zoom-in-down">
                        <a href={site}><button className="btn">Live Link</button></a>
                      
                        <button className="btn">Details <i class="fas fa-arrow-circle-right"></i></button>
                        
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
                
             
        </div>
    );
};

export default Projects;
