import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import text from '../text/profile';

const Profile = () => {

  return (
    <Container className="pt-3">
      <Row>
        <Col sm={8}>
          <h1>Hello</h1>
          <p className="text-justify">{text}</p>
        </Col>
        <Col sm={4}>
          <Image src='./profile.jpg' fluid />
        </Col>
      </Row>
    </Container>
  );

};

export default Profile;
