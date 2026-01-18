import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="d-lg-none">
            <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse id="navbarNav" className={isOpen ? 'show' : ''}>
                <Nav className="flex-column">
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <Nav.Link href="/clients">Clients</Nav.Link>
                    <Nav.Link href="/our-work">Our Work</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/solutions">Solutions</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    );
};

export default HamburgerMenu;