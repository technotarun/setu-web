import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import HamburgerMenu from './HamburgerMenu';

interface HamburgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar expand="lg" className="navbar-light bg-light">
            <Navbar.Brand href="/">SETUWEB</Navbar.Brand>
            <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            <Navbar.Collapse in={isOpen}>
                <Nav className="ml-auto">
                    <Nav.Link href="/about">Company</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/solutions">Solutions</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;