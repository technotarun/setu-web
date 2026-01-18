import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/pages.scss';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    };

    return (
        <div className="contact-page">
            <Container>
                <Row className="my-5">
                    <Col lg={8} className="mx-auto">
                        <h1 className="page-title">Get In Touch</h1>
                        <p className="lead text-center">
                            Ready to take your business online? We'd love to hear from you. 
                            Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                    </Col>
                </Row>

                {submitted && (
                    <Row className="mb-4">
                        <Col lg={8} className="mx-auto">
                            <div className="alert alert-success">
                                Thank you for reaching out! We'll contact you shortly.
                            </div>
                        </Col>
                    </Row>
                )}

                <Row>
                    <Col lg={8} className="mx-auto">
                        <Form onSubmit={handleSubmit} className="contact-form">
                            <Form.Group className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name" 
                                    required 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com" 
                                    required 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (123) 456-7890" 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company" 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={6}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..." 
                                    required 
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" size="lg" className="w-100">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col lg={12}>
                        <h2 className="text-center mb-4">Other Ways to Reach Us</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="mb-4 text-center">
                        <div className="contact-card">
                            <h4>📧 Email</h4>
                            <p><a href="mailto:info@setuweb.com">info@setuweb.com</a></p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 text-center">
                        <div className="contact-card">
                            <h4>📞 Phone</h4>
                            <p><a href="tel:+12345678900">+1 (234) 567-8900</a></p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 text-center">
                        <div className="contact-card">
                            <h4>📍 Address</h4>
                            <p>123 Tech Street, San Francisco, CA 94105</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;