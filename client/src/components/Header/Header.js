import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import CharCountModal from '../CharCountModal/CharCountModal';

function Header(props) {
    const [lgShow, setLgShow] = React.useState(false);
        return (
            <Container className='header-container'>
                <Jumbotron className='jumbotron'>
                    <h1><img src='/SL_Logo.png' alt='SalesLoft Logo' id='header-logo' /><b>Sales</b>Loft People Data</h1>
                    <p>Using <a href="https://developers.salesloft.com/api.html#!/People/get_v2_people_json">SalesLoft's API</a>, we have provided data about all the people on your team.<br />
                        For individual email address character stats, click a person's row.</p>
                    <p>For total count of characters found in all email addresses, click button below.</p>
                    <ButtonToolbar>
                        <Button size="sm" variant="secondary" onClick={() => setLgShow(true)}>
                            Total Email Character Count</Button>

                        <CharCountModal
                            show={lgShow} data={props}
                            onHide={() => setLgShow(false)}
                        />
                    </ButtonToolbar>
                </Jumbotron>
            </Container>
        );
    }

export default Header;