import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';

class CharacterCount extends Component {
    state = {
        characters: this.props.characters
    }

    showCharacterData = () => {
        let characterObj = this.state.characters;
        let data = [];
        for (let key in characterObj) {
            data.push([key, characterObj[key]]);
        }
        data.sort((a, b) => {
            return b[1] - a[1];
        });
        return data;
    }

    render() {
        return (
            <div>
                <sub>Unique characters found in email address, sorted by frequency</sub>
                <Table bordered size='sm'>
                    <tbody>
                        <tr>
                            <th>Character:</th>
                            {this.showCharacterData().map((character, i) => (
                                <td key={i}>{character[0]}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Count:</th>
                            {this.showCharacterData().map((character, i) => (
                                <td key={i}>{character[1]}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CharacterCount;