import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PersonData from '../PersonData/PersonData';
import API from '../../utilities/API.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DataContainer extends Component {
    state = {
        info: 'worked? nice',
        peopleData: null
    }

    getData = () => {
        API.getData()
            .then(res => {
                this.setState({ peopleData: res.data.data })
            })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Container>
                       <Row>
                        <Col>Name</Col>
                        <Col>Title</Col>
                        <Col>Email</Col>
                    </Row>
                {this.state.peopleData &&
                    (<Accordion>
                        {this.state.peopleData.map((person, i) => (
                            <PersonData
                                firstname={person.first_name}
                                lastname={person.last_name}
                                email={person.email_address}
                                title={person.title}
                                eventKey={i}
                                key={person.id} />
                        ))
                        }

                    </Accordion>)
                }
            </Container>
        );
    }
}

export default DataContainer;