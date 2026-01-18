import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" className="navbar-custom" sticky="top" expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand-logo">
                    <span className="logo-text">SETUWEB</span>
                    <span className="logo-tagline">Bridge Your Business Online</span>
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(expanded ? false : true)}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-items">
                        <Dropdown className="nav-dropdown">
                            <Dropdown.Toggle as={Nav.Link} id="company-dropdown">
                                Company
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/about-us">About Us</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/clients">Our Clients</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/our-work">Our Work</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/team">Our Team</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/solutions">Solutions</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;