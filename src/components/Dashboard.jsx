import { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import FilterSearch from './FilterSearch';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const [carData, setCarData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('/src/data/cars.json')
            .then((response) => response.json())
            .then((data) => {
                setCarData(data);
                setFilteredData(data);
            });
    }, []);

    const handleFilter = (query) => {
        const filtered = carData.filter(car =>
            car.make.toLowerCase().includes(query.toLowerCase()) ||
            car.model.toLowerCase().includes(query.toLowerCase()) ||
            car.year.toString().includes(query)
        );
        setFilteredData(filtered);
    };

    return (
        <Container style={{margin: "150px"}}>
            <h2>Car Analytics Dashboard</h2>
            <FilterSearch onFilter={handleFilter} />
            <Row>
                {filteredData.map((car) => (
                    <Col sm={4} key={car.carId}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/car/${car.carId}`}>
                                        {car.make} {car.model}
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    Year: {car.year} <br />
                                    Price: {car.price} <br />
                                    Fuel Type: {car.fuelType} <br />
                                    Mileage: {car.mileage} <br />
                                    Engine Size: {car.engineSize} <br />
                                    Price: {car.price} <br />
                                    Color: {car.color} <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Dashboard;
