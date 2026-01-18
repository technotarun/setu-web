import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import '../styles/pages.scss';

interface Portfolio {
    id: number;
    title: string;
    company: string;
    category: string;
    description: string;
    results: string[];
}

const OurWork: React.FC = () => {
    const portfolioItems: Portfolio[] = [
        {
            id: 1,
            title: "E-Commerce Platform Redesign",
            company: "Fashion & Style Boutique",
            category: "E-Commerce",
            description: "Complete redesign of an online retail store with improved UX, faster load times, and integrated payment gateway. The new platform supports multiple payment methods and has an intuitive product management system.",
            results: ["45% increase in conversion rate", "60% faster page load time", "3x more online orders", "Mobile sales now 40% of total"]
        },
        {
            id: 2,
            title: "Dental Practice Website",
            company: "Bright Smile Dental",
            category: "Healthcare",
            description: "Professional website for a dental clinic featuring online appointment booking, patient testimonials, service showcase, and SEO optimization. Includes emergency contact system and insurance information pages.",
            results: ["50 new patient inquiries/month", "40% reduction in phone calls", "Online bookings: 70% of appointments", "Google ranking: Top 3 local results"]
        },
        {
            id: 3,
            title: "Restaurant Website & Menu",
            company: "Mediterranean Kitchen",
            category: "Food & Beverage",
            description: "Beautiful restaurant website with dynamic menu system, reservation booking, photo gallery, and online ordering integration. Mobile-optimized for on-the-go reservations.",
            results: ["25% increase in reservations", "Online orders now available", "Instagram integration", "Local SEO visibility improved"]
        },
        {
            id: 4,
            title: "Fitness Studio Membership Portal",
            company: "FitZone Studio",
            category: "Fitness & Wellness",
            description: "Complete fitness studio website with class scheduling, membership management, trainer profiles, and member portal. Integrated with popular fitness apps for class bookings.",
            results: ["35% increase in memberships", "100 online sign-ups/month", "Member retention up 40%", "Automated booking system reduces admin work by 20 hours/month"]
        },
        {
            id: 5,
            title: "Consulting Firm Portfolio",
            company: "Strategic Business Solutions",
            category: "Professional Services",
            description: "Enterprise-level website for a consulting firm featuring case studies, team profiles, service offerings, and client testimonials. Built with advanced SEO for thought leadership.",
            results: ["15 high-value client inquiries/month", "Ranked #1 for target keywords", "Case study downloads: 200+/month", "Lead quality significantly improved"]
        },
        {
            id: 6,
            title: "Local Real Estate Portal",
            company: "Downtown Properties",
            category: "Real Estate",
            description: "Interactive real estate website with property search, virtual tours, mortgage calculator, and CRM integration. Features advanced filtering and neighborhood information.",
            results: ["500+ property inquiries/month", "Virtual tours increase viewings by 35%", "Top Google ranking for local searches", "Lead conversion rate: 18%"]
        }
    ];

    return (
        <div className="our-work-page">
            <Container>
                <Row className="my-5">
                    <Col lg={8} className="mx-auto text-center">
                        <h1 className="page-title">Our Portfolio</h1>
                        <p className="lead">
                            Explore our latest web design and development projects. Each project represents our commitment to quality, innovation, and client success.
                        </p>
                    </Col>
                </Row>

                <Row className="portfolio-grid">
                    {portfolioItems.map((item) => (
                        <Col lg={6} md={12} key={item.id} className="mb-4">
                            <div className="portfolio-card">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                    <Badge bg="primary">{item.category}</Badge>
                                </div>
                                <div className="card-body">
                                    <h5>{item.company}</h5>
                                    <p>{item.description}</p>
                                </div>
                                <div className="card-results">
                                    <h6>Results Achieved:</h6>
                                    <ul>
                                        {item.results.map((result, idx) => (
                                            <li key={idx}>{result}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row className="my-5">
                    <Col lg={12} className="text-center">
                        <h2>Ready to Be Our Next Success Story?</h2>
                        <p>Let's create something amazing for your business. Get in touch with our team today!</p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Start Your Project
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurWork;