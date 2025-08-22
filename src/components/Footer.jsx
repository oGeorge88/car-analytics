import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark text-light py-4 mt-5" style={{ fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', letterSpacing: '0.5px' }}>
            <Container>
                <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 style={{ color: '#28a745', fontWeight: '700' }}>Car Analytics</h5>
                        <p style={{ color: '#bbb', fontSize: '1.05rem' }}>Driving Insights, Empowering Decisions.<br />Your trusted partner for automotive analytics.</p>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 style={{ color: '#28a745', fontWeight: '700' }}>Quick Links</h5>
                        <ul className="list-unstyled" style={{ fontSize: '1.05rem' }}>
                            <li><a href="/" className="text-light text-decoration-none" aria-label="Dashboard">Dashboard</a></li>
                            <li><a href="/highlighted-cars" className="text-light text-decoration-none" aria-label="Highlighted Cars">Highlighted Cars</a></li>
                            <li><a href="/statistics" className="text-light text-decoration-none" aria-label="Statistics">Statistics</a></li>
                            <li><a href="/about" className="text-light text-decoration-none" aria-label="About">About</a></li>
                            <li><a href="/contact" className="text-light text-decoration-none" aria-label="Contact Us">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 style={{ color: '#28a745', fontWeight: '700' }}>Contact</h5>
                        <p style={{ color: '#bbb', fontSize: '1.05rem', marginBottom: '6px' }}>u6520283@au.edu</p>
                        <p style={{ color: '#bbb', fontSize: '1.05rem', marginBottom: '6px' }}>u6520189@au.edu</p>
                        <p style={{ color: '#bbb', fontSize: '1.05rem', marginBottom: '6px' }}>u6520051@au.edu</p>
                    </Col>
                </Row>
                <div className="text-center mt-4">
                    <hr style={{ borderColor: '#28a745', opacity: 0.2 }} />
                    <p style={{ color: '#bbb', fontSize: '1rem', marginBottom: 0 }}>
                        &copy; {currentYear} Car Analytics. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
