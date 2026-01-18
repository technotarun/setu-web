import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <Container>
                <Row className="align-items-center hero-content">
                    <Col lg={6} className="hero-text">
                        <h1 className="hero-title">
                            Your Online Presence Starts Here
                        </h1>
                        <p className="hero-subtitle">
                            Affordable, professional websites designed for small and medium businesses. We bridge the gap between your business vision and digital reality.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <Button 
                                    className="btn-primary-custom"
                                    size="lg"
                                >
                                    Get Started Today
                                </Button>
                            </Link>
                            <Link to="/our-work" style={{ textDecoration: 'none' }}>
                                <Button 
                                    className="btn-secondary-custom"
                                    size="lg"
                                    variant="outline-light"
                                >
                                    View Our Work
                                </Button>
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <h3>500+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat">
                                <h3>1000+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat">
                                <h3>10+</h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="hero-image">
                        <div className="hero-graphic">
                            <div className="graphic-box box-1"></div>
                            <div className="graphic-box box-2"></div>
                            <div className="graphic-box box-3"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;