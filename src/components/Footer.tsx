import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} sm={6} xs={12}>
                        <h5>Contact Us</h5>
                        <p>Email: info@setuweb.com</p>
                        <p>Phone: +1 (234) 567-890</p>
                        <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <h5>Follow Us</h5>
                        <ul className="social-media">
                            <li><a href="https://facebook.com/setuweb" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com/setuweb" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://linkedin.com/company/setuweb" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://instagram.com/setuweb" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <h5>Quick Links</h5>
                        <ul className="social-media">
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <p>&copy; 2024 SETUWEB - Bridging Businesses and Websites. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;