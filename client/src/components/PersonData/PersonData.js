import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PersonData(props) {
    return (
        <div>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
             
                    <Row>
                        <Col xs={4}>{props.firstname} {props.lastname}</Col>
                        <Col xs={4}>{props.title}</Col>
                        <Col xs={4}>{props.email}</Col>
                    </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.eventKey}>
                    <Card.Body>
                        <p>More data here</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </div>
    );
}

export default PersonData;