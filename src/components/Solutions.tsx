import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Solutions.scss';

interface SolutionItem {
    id: number;
    title: string;
    features: string[];
    price: string;
    highlight?: boolean;
}

const Solutions = () => {
    const solutions: SolutionItem[] = [
        {
            id: 1,
            title: 'Starter',
            price: '$299/mo',
            features: [
                'Up to 5 pages',
                'Mobile responsive',
                'Basic SEO',
                'Contact form',
                'Monthly updates',
                'Email support'
            ]
        },
        {
            id: 2,
            title: 'Professional',
            price: '$599/mo',
            highlight: true,
            features: [
                'Up to 15 pages',
                'E-commerce ready',
                'Advanced SEO',
                'Blog functionality',
                'Weekly updates',
                'Priority support',
                'Analytics dashboard'
            ]
        },
        {
            id: 3,
            title: 'Enterprise',
            price: 'Custom',
            features: [
                'Unlimited pages',
                'Custom development',
                'Full SEO optimization',
                'CMS integration',
                'Daily updates',
                '24/7 support',
                'Custom integrations'
            ]
        }
    ];

    return (
        <section className="solutions">
            <Container>
                <div className="section-header">
                    <h2>Perfect Plans for Your Business</h2>
                    <p>Flexible pricing options designed for businesses of all sizes</p>
                </div>
                <Row className="solutions-grid">
                    {solutions.map(solution => (
                        <Col lg={4} md={6} sm={12} key={solution.id}>
                            <div className={`solution-card ${solution.highlight ? 'highlight' : ''}`}>
                                {solution.highlight && <div className="badge">Most Popular</div>}
                                <h3>{solution.title}</h3>
                                <div className="price">{solution.price}</div>
                                <ul className="features-list">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="checkmark">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button 
                                    as={Link} 
                                    to="/contact"
                                    className="cta-button"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Solutions;