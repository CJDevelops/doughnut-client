import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function TopBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>Doughnut</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Manage Data</Nav.Link>
                    <Nav.Link className='ms-auto'>Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default TopBar;