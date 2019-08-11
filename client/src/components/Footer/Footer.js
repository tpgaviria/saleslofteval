import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
                <footer className='footer'>
                    <div>Created by <a href="https://github.com/tpgaviria">Tanya Gaviria</a> for <a href="http://salesloft.com">SalesLoft</a>'s<br/>Support Engineer Evaluation using <img src='./logo192.png' alt='React Logo' id='logo' />React</div>
                </footer>
        );
    }
}

export default Footer;