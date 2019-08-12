import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class CharCountModal extends Component {
    state = {
        characters: this.props.data.charCount
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
        console.log(this.state.charCount);
        return (
            <Modal {...this.props}
                size="xl"
                aria-labelledby="contained-modal-ti1tle-vcenter"
                centered>

                <Modal.Body>
                    <h6>Total character count for all email addresses, sorted by frequency.</h6>
                    <Table bordered size='sm' responsive>
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
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CharCountModal;