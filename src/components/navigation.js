import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = props => {

  const pageFunc = page => <Nav.Link href={page.link}>{page.title}</Nav.Link>;
  const pages = !props.pages ? [] : props.pages.map(pageFunc);

  const collapseController = pages.length == 0 ? <div /> : (
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  );

  const collapseNav = pages.length == 0 ? <div /> : (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {pages}
      </Nav>
    </Navbar.Collapse>
  );

  return (
    <Navbar bg="dark" variant="dark" expand="md">

      <Navbar.Brand>{props.title}</Navbar.Brand>
      {collapseController}
      {collapseNav}

    </Navbar>
  );

};

export default Navigation;
