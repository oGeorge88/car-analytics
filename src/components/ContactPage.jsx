import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import georgeImage from '/src/assets/George.png';
import laWeeChanImage from '/src/assets/LaWeeChan.png';
import zaiImage from '/src/assets/Zai.png';

const owners = [
    {
        name: 'Oguejiofor George Obinna',
        id: '6520283',
        email: 'u6520283@au.edu',
        image: georgeImage,
        phone: '0632100659',
    },
    {
        name: 'Min La Wee Chan  ',
        id: '6520189',
        email: 'u6520189@au.edu ',
        image: laWeeChanImage,
        phone: '0649916003',
    },
    {
        name: 'Sai Hein Thu Ya Soe',
        id: '6520051',
        email: 'u6520051@au.edu',
        image: zaiImage,
        phone: '0661078960',
    },
];

const ContactPage = () => {
    const [reviewName, setReviewName] = useState('');
    const [reviewRating, setReviewRating] = useState('');
    const [reviewMessage, setReviewMessage] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            name: reviewName,
            rating: reviewRating,
            message: reviewMessage,
        };
        const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews.push(reviewData);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
        setReviewName('');
        setReviewRating('');
        setReviewMessage('');
        alert('Review submitted successfully!');
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const contactData = {
            name: contactName,
            email: contactEmail,
            message: contactMessage,
        };
        const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        savedContacts.push(contactData);
        localStorage.setItem('contacts', JSON.stringify(savedContacts));
        setContactName('');
        setContactEmail('');
        setContactMessage('');
        alert('Message sent successfully!');
    };

    return (
        <Container style={{ marginTop: '130px', marginBottom: '60px', maxWidth: '900px' }}>
            <Row className="mb-4">
                <Col>
                    <h2 className="text-center" style={{ color: '#28a745', fontWeight: '700', letterSpacing: '1px' }}>Contact Us</h2>
                    <p className="text-center" style={{ color: '#555', fontSize: '1.15rem' }}>
                        We value your feedback and inquiries. Reach out to our team or leave a review to help us improve your experience.
                    </p>
                </Col>
            </Row>
            <Row className="mb-5">
                {owners.map((owner, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="text-center shadow-sm border-0" style={{ borderRadius: '16px', background: '#f9fafb' }}>
                            <Card.Img variant="top" src={owner.image} alt={owner.name} style={{ height: '180px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }} />
                            <Card.Body>
                                <Card.Title style={{ color: '#28a745', fontWeight: '600', fontSize: '1.15rem' }}>{owner.name}</Card.Title>
                                <Card.Text style={{ color: '#444', fontSize: '1rem' }}>
                                    <strong>ID:</strong> {owner.id} <br />
                                    <strong>Email:</strong> <a href={`mailto:${owner.email}`} style={{ color: '#28a745', textDecoration: 'none' }}>{owner.email}</a> <br />
                                    <strong>Phone:</strong> <a href={`tel:${owner.phone}`} style={{ color: '#28a745', textDecoration: 'none' }}>{owner.phone}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="mb-5">
                <Col md={12}>
                    <h3 className="mb-3" style={{ color: '#1e2a38', fontWeight: '600' }}>Leave a Review</h3>
                    <Form className="mt-3" onSubmit={handleReviewSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="reviewName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={reviewName}
                                        onChange={(e) => setReviewName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="reviewRating">
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={reviewRating}
                                        onChange={(e) => setReviewRating(e.target.value)}
                                        required
                                    >
                                        <option value="">Choose...</option>
                                        <option value="5">5 - Excellent</option>
                                        <option value="4">4 - Good</option>
                                        <option value="3">3 - Average</option>
                                        <option value="2">2 - Poor</option>
                                        <option value="1">1 - Terrible</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="reviewMessage" className="mt-3">
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Write your review here..."
                                value={reviewMessage}
                                onChange={(e) => setReviewMessage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" className="mt-3 px-4 py-2" style={{ fontWeight: '500', fontSize: '1.05rem' }}>
                            Submit Review
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <h3 className="mb-3" style={{ color: '#1e2a38', fontWeight: '600' }}>Send Us a Message</h3>
                    <Form className="mt-3" onSubmit={handleContactSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="contactName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={contactName}
                                        onChange={(e) => setContactName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="contactEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={contactEmail}
                                        onChange={(e) => setContactEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="contactMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Write your message here..."
                                value={contactMessage}
                                onChange={(e) => setContactMessage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" className="mt-3 px-4 py-2" style={{ fontWeight: '500', fontSize: '1.05rem' }}>
                            Send Message
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
