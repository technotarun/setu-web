import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.scss';

interface ServiceItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const Services = () => {
    const services: ServiceItem[] = [
        {
            id: 1,
            icon: '🎨',
            title: 'Professional Web Design',
            description: 'Custom, responsive designs tailored to your brand identity. Modern aesthetics combined with user-friendly interfaces.'
        },
        {
            id: 2,
            icon: '⚙️',
            title: 'Web Development',
            description: 'Robust, fast-loading websites built with latest technologies. SEO-optimized and mobile-first approach.'
        },
        {
            id: 3,
            icon: '📱',
            title: 'Mobile Optimization',
            description: 'Fully responsive designs that work flawlessly on all devices. Optimized performance for mobile users.'
        },
        {
            id: 4,
            icon: '🛒',
            title: 'E-Commerce Solutions',
            description: 'Complete online store setup with payment gateway integration. Inventory management and order tracking systems.'
        },
        {
            id: 5,
            icon: '🔍',
            title: 'SEO Optimization',
            description: 'On-page and technical SEO to boost your search rankings. Content strategy to drive organic traffic.'
        },
        {
            id: 6,
            icon: '🚀',
            title: 'Website Maintenance',
            description: 'Affordable monthly support and updates. Security patches, backups, and performance monitoring.'
        }
    ];

    return (
        <section className="services">
            <Container>
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>Everything you need to establish a powerful online presence</p>
                </div>
                <Row className="services-grid">
                    {services.map(service => (
                        <Col lg={4} md={6} sm={12} key={service.id} className="service-col">
                            <Card className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;