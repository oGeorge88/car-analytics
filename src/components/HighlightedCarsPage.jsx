import { useState, useEffect } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import carDataJson from '/src/data/cars.json'; // Adjust the path according to your project structure

const HighlightedCarPage = () => {
    const [highlightedCars, setHighlightedCars] = useState([]);

    useEffect(() => {
        const data = carDataJson;
        const highlighted = data.Cars.filter(car =>
            localStorage.getItem(`highlighted_${car.Cid}`) === 'true'
        );
        setHighlightedCars(highlighted);
    }, []);

    const removeHighlight = (Cid) => {
        // Remove the highlight from localStorage
        localStorage.removeItem(`highlighted_${Cid}`);

        // Update the state to remove the car from the highlighted list
        setHighlightedCars(prevCars => prevCars.filter(car => car.Cid !== Cid));
    };

    return (
        <Container style={{ marginTop: '130px', marginBottom: '60px', maxWidth: '1200px' }}>
            <Row className="mb-4">
                <Col>
                    <h2 className="text-center" style={{ color: '#28a745', fontWeight: '700', letterSpacing: '1px' }}>Highlighted Cars</h2>
                    <p className="text-center" style={{ color: '#555', fontSize: '1.15rem' }}>
                        Your favorite cars, highlighted for quick access and comparison. Remove highlights anytime to update your selection.
                    </p>
                </Col>
            </Row>
            <Row className="gy-4">
                {highlightedCars.length > 0 ? (
                    highlightedCars.map((car) => (
                        <Col sm={12} md={6} lg={4} key={car.Cid} className="d-flex align-items-stretch">
                            <Card className="w-100 shadow-lg border-0 rounded-3" style={{ background: '#f9fafb', borderColor: '#de1a52' }}>
                                <Link to={`/car/${car.Cid}`}>
                                    {car.Img300 && <Card.Img src={car.Img300} alt={car.Model} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />}
                                </Link>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-center" style={{ color: '#de1a52', fontWeight: '700', fontSize: '1.25rem' }}>
                                        <Link to={`/car/${car.Cid}`} className="text-decoration-none" style={{ color: '#de1a52' }}>{car.NameMMT}</Link>
                                    </Card.Title>
                                    <Card.Text className="text-center" style={{ color: '#444', fontSize: '1.08rem', minHeight: '48px' }}>
                                        <span style={{ color: '#28a745', fontWeight: '500' }}>{car.Model}</span> &bull; {car.Yr}<br />
                                        <span style={{ color: '#28a745', fontWeight: '500' }}>{car.Prc} {car.Currency}</span><br />
                                        <span style={{ color: '#888' }}>{car.Province}</span>
                                    </Card.Text>
                                    <Button
                                        variant="danger"
                                        onClick={() => removeHighlight(car.Cid)}
                                        className="mt-auto px-3 py-2 rounded-3 d-flex align-items-center justify-content-center"
                                        style={{ fontWeight: '500', fontSize: '1.05rem' }}
                                        aria-label={`Remove highlight from ${car.NameMMT}`}
                                    >
                                        Remove Highlight <FaStar className="ms-2" />
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p className="text-center" style={{ color: '#888', fontSize: '1.1rem' }}>No highlighted cars found.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default HighlightedCarPage;
