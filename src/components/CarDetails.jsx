import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import carDataJson from '/src/data/cars.json'; // Adjust the path according to your project structure

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const data = carDataJson;
        const selectedCar = data.Cars.find((car) => car.Cid === parseInt(id));
        setCar(selectedCar);
    }, [id]);

    if (!car) return <div className="text-center my-5" style={{ fontSize: '1.3rem', color: '#888' }}>Loading car details...</div>;

    return (
        <Container fluid style={{ margin: "60px auto", maxWidth: "1100px" }}>
            <Row className="justify-content-center">
                <Col lg={10}>
                    <Card className="shadow-lg border-0 rounded" style={{ backgroundColor: '#f9fafb', padding: '32px 24px', position: 'relative' }}>
                        <Card.Body>
                            <Card.Title className="mb-3" style={{ fontSize: '2.3rem', color: '#28a745', fontWeight: '700', textAlign: 'center', letterSpacing: '1px' }}>
                                {car.NameMMT} <span style={{ color: '#1e2a38', fontWeight: '500' }}>{car.Model}</span>
                            </Card.Title>
                            <div className="mb-4 text-center" style={{ fontSize: '1.1rem', color: '#555', fontStyle: 'italic' }}>
                                {car.Province} &bull; {car.Yr} &bull; {car.Status}
                            </div>
                            <Row>
                                <Col md={5} className="d-flex align-items-center justify-content-center">
                                    {car.Img300 && (
                                        <img
                                            src={car.Img300}
                                            alt={car.Model}
                                            style={{
                                                width: '100%',
                                                maxWidth: '350px',
                                                height: 'auto',
                                                borderRadius: '16px',
                                                border: '4px solid #28a745',
                                                boxShadow: '0 8px 24px rgba(40,167,69,0.10)',
                                                objectFit: 'cover',
                                                background: '#fff',
                                            }}
                                        />
                                    )}
                                </Col>
                                <Col md={7}>
                                    <Card.Text style={{ lineHeight: '2', fontSize: '1.13rem', color: '#333', paddingLeft: '10px' }}>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Price:</strong> <span style={{ fontWeight: '600', color: '#1e2a38' }}>{car.Prc} {car.Currency}</span>
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Down Payment:</strong> {car.DPmt}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Year:</strong> {car.Yr}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Model:</strong> {car.Model}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Province:</strong> {car.Province}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Status:</strong> {car.Status}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Page Views:</strong> {car.PagesViews}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Last Updated:</strong> {car.Upd}
                                        </div>
                                        <hr />
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Car ID:</strong> {car.Cid}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>Expired:</strong> {car.IsCExp ? 'Yes' : 'No'}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>MkID:</strong> {car.MkID}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>MdID:</strong> {car.MdID}
                                        </div>
                                        <div className="mb-2">
                                            <strong style={{ color: '#28a745' }}>BdID:</strong> {car.BdID}
                                        </div>
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CarDetails;
