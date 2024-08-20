import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        fetch('/src/data/cars.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedCar = data.find((car) => car.carId === parseInt(id));
                setCar(selectedCar);
            });
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{car.make} {car.model}</Card.Title>
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
        </Container>
    );
};

export default CarDetails;
