import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';

class Header extends Component {
    render() {
        return (
            <Container className='header-container'>
                <Jumbotron className='jumbotron'>
                    <h1><img src='/SL_Logo.png' alt='SalesLoft Logo' id='header-logo'/><b>Sales</b>Loft People Data</h1>
                    <p>Using <a href="https://developers.salesloft.com/api.html#!/People/get_v2_people_json">SalesLoft's API</a>, we have provided data about all the people on your team.<br/>
                        For detailed email address character stats, click a person's row.
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}

export default Header;