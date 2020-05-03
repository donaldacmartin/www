import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Stun extends Component {

  constructor(props) {
    super(props);

    this.state = { displayMessage: 'Loading...' };

    this.getIpAddress = this.getIpAddress.bind(this);
  }

  componentDidMount(){
    this.getIpAddress();
  }

  getIpAddress() {
    axios.get('/api/stun/get')
      .then(r => this.setState({ displayMessage: 'Hello from ' + r.data }))
      .catch(e => this.setState({ displayMessage: 'Error getting IP address' }));
  }

  render() {
    return (
      <Container className="pt-3">
        <Row>
          <h1>Stun Server</h1>
        </Row>
        <Row>
          <p>{this.state.displayMessage}</p>
        </Row>
      </Container>
    );
  };

};
