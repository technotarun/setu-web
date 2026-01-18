import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/pages.scss';

interface Testimonial {
    name: string;
    company: string;
    feedback: string;
    industry: string;
}

const Clients: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            name: "Sarah Johnson",
            company: "Digital Boutique Store",
            industry: "E-Commerce",
            feedback: "SETUWEB transformed our online presence completely. Our sales increased by 45% in just 3 months after launching the new website. Highly recommend!"
        },
        {
            name: "Michael Chen",
            company: "Local Dental Clinic",
            industry: "Healthcare",
            feedback: "Professional and efficient service. Our website looks amazing and our appointment bookings have doubled. SETUWEB is our go-to partner."
        },
        {
            name: "Emma Rodriguez",
            company: "Tech Innovations Startup",
            industry: "Technology",
            feedback: "Great support and maintenance. The team understood our vision perfectly and delivered beyond expectations. They're always available when we need help."
        },
        {
            name: "David Thompson",
            company: "Personal Fitness Studio",
            industry: "Fitness",
            feedback: "The website design is beautiful and user-friendly. Our members love the easy class booking system. Worth every penny!"
        },
        {
            name: "Lisa Park",
            company: "Organic Bakery",
            industry: "Food & Beverage",
            feedback: "We couldn't have asked for better service. The team was responsive, professional, and the final product exceeded our expectations."
        },
        {
            name: "James Wilson",
            company: "Consulting Services",
            industry: "Business Services",
            feedback: "The website has become a powerful tool for attracting new clients. The SEO optimization really paid off!"
        }
    ];

    return (
        <div className="clients-page">
            <Container>
                <Row className="my-5">
                    <Col lg={8} className="mx-auto text-center">
                        <h1 className="page-title">Our Clients</h1>
                        <p className="lead">
                            We're proud to have helped over 500 businesses establish and grow their online presence. 
                            Here's what some of our happy clients say about working with us.
                        </p>
                    </Col>
                </Row>

                <Row className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <Col lg={6} md={6} sm={12} key={index} className="mb-4">
                            <div className="testimonial-card">
                                <div className="stars">⭐⭐⭐⭐⭐</div>
                                <p className="feedback">"{testimonial.feedback}"</p>
                                <h4>{testimonial.name}</h4>
                                <p className="company">{testimonial.company}</p>
                                <p className="industry">{testimonial.industry}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="my-5">
                    <Col lg={12}>
                        <h2 className="text-center mb-4">Industries We Serve</h2>
                    </Col>
                </Row>

                <Row className="industry-list">
                    <Col md={4} className="mb-3">
                        <div className="industry-item">
                            <h5>🛍️ E-Commerce</h5>
                            <p>Online stores and retail businesses</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-3">
                        <div className="industry-item">
                            <h5>🏥 Healthcare</h5>
                            <p>Clinics, practices, and medical services</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-3">
                        <div className="industry-item">
                            <h5>💼 Professional Services</h5>
                            <p>Consulting, law, and accounting firms</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-3">
                        <div className="industry-item">
                            <h5>🍽️ Food & Beverage</h5>
                            <p>Restaurants and catering services</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-3">
                        <div className="industry-item">
                            <h5>💪 Fitness & Wellness</h5>
                            <p>Gyms, studios, and wellness centers</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-3">
                        <div className="industry-item">
                            <h5>🏢 Local Businesses</h5>
                            <p>Service-based and retail businesses</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Clients;