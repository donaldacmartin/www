import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Map from './geo-ip/map';

export default class Stun extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      message: 'Loading...',
      city: null,
      country: null
    };

    this.getIpAddress = this.getIpAddress.bind(this);
  }

  componentDidMount(){
    this.getIpAddress();
  }

  getIpAddress() {
    axios.get('/api/stun/getInfo')
      .then(r => this.setState({
        message: `Hello ${r.data.ipAddress}, from ${r.data.city}`,
        city: r.data.city,
        country: r.data.country
      }))
      .catch(e => this.setState({
        message: 'Error getting IP address'
      }));
  }

  render() {
    return (
      <Container className="pt-3">
        <Row>
          <h1>What is my IP Address?</h1>
        </Row>
        <Row>
          <p>{this.state.message}</p>
        </Row>
        <Row className="google-maps">
          <Map city={this.state.city} country={this.state.country} />
        </Row>
      </Container>
    );
  };

};
