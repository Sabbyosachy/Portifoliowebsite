import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Skill = (props) => {
    const{title,image}=props.ability;
    return (
        <div>
            <CardGroup className="card-group">
                <Card className="card">
                    <Card.Img className="img-size w-50 mx-auto" variant="top" src={image} />
                    <Card.Body className="body-color">
                        <h5>{title}</h5>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Skill;