import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages.scss';

const AboutUs: React.FC = () => {
    return (
        <div className="about-us">
            <Container>
                <Row className="my-5">
                    <Col lg={8} className="mx-auto">
                        <h1 className="page-title">About SETUWEB</h1>
                        <p className="lead">
                            At SETUWEB, we believe that every business deserves a strong online presence. 
                            Our mission is to bridge the gap between businesses and their digital goals. 
                            We specialize in creating stunning, user-friendly websites tailored to the unique needs of small to medium businesses.
                        </p>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col lg={6} md={12} className="mb-4">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to empower businesses by providing them with the tools and support they need to thrive in the digital landscape. 
                            We are committed to delivering high-quality web design and development services that are both affordable and effective.
                        </p>
                        <p>
                            With over 10 years of experience, we have helped more than 500 businesses establish and grow their online presence. 
                            Our team is dedicated to understanding your business needs and delivering solutions that exceed your expectations.
                        </p>
                    </Col>
                    <Col lg={6} md={12}>
                        <h2>Why Choose SETUWEB?</h2>
                        <ul className="feature-list">
                            <li><strong>Affordable Pricing:</strong> We believe quality web design shouldn't break the bank</li>
                            <li><strong>Responsive Design:</strong> Your website works perfectly on all devices</li>
                            <li><strong>SEO Optimized:</strong> Get discovered by your customers online</li>
                            <li><strong>Ongoing Support:</strong> We're here to help you succeed long after launch</li>
                            <li><strong>Modern Technologies:</strong> We use the latest tools and frameworks</li>
                            <li><strong>Custom Solutions:</strong> Every website is tailored to your unique business</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col lg={12}>
                        <h2>Our Team</h2>
                        <p>
                            Our team consists of experienced designers, developers, and digital strategists who are passionate about helping businesses succeed online. 
                            We work closely with our clients to understand their vision and bring it to life through innovative web solutions.
                        </p>
                        <Row>
                            <Col md={4} className="text-center mb-4">
                                <div className="team-member">
                                    <div className="member-avatar">👨‍💼</div>
                                    <h4>Creative Design</h4>
                                    <p>Expert designers crafting beautiful, user-centric interfaces</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center mb-4">
                                <div className="team-member">
                                    <div className="member-avatar">👨‍💻</div>
                                    <h4>Professional Development</h4>
                                    <p>Skilled developers building robust, scalable web applications</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center mb-4">
                                <div className="team-member">
                                    <div className="member-avatar">🎯</div>
                                    <h4>Strategic Support</h4>
                                    <p>Dedicated support ensuring your site performs optimally</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;