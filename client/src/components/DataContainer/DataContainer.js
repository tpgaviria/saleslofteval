import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PersonData from '../PersonData/PersonData';
import API from '../../utilities/API.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DataContainer extends Component {
    state = {
        peopleData: null
    }

    data = {
        emails: null,
        charCount: null
    }

    getData = () => {
        API.getData()
            .then(res => {
                let emailData = [];
                for (let i = 0; i < res.data.data.length; i++) {
                    emailData.push(res.data.data[i].email_address)
                }
                this.data.emails = emailData;
                this.getTotalCount(emailData);
                this.setState({ peopleData: res.data.data })
            })

    }

    getTotalCount(data) {
        let freq = {};
        data = data.join('');
        for (let i = 0; i < data.length; i++) {
            let character = data.charAt(i);
            if (freq[character]) {
                freq[character]++;
            } else {
                freq[character] = 1; 
            }
        }
        this.props.charCount(freq);
    }
    
    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Container>
                       <Row className='data-headers'>
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