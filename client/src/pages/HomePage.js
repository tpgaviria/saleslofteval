import React, { Component } from 'react';
import DataContainer from '../components/DataContainer/DataContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


class HomePage extends Component {

    state = {
        charCount: null
    }

    handleCharCount(charCount) {
        this.setState({
            charCount: charCount
        })
    }

    render() {
        return (
            <div>
                {this.state.charCount && (<Header charCount={this.state.charCount}/>)}
                <DataContainer charCount={this.handleCharCount.bind(this)}/>
                <Footer />
            </div>
        );
    }
}

export default HomePage;