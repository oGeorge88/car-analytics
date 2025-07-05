import { useEffect, useState } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const fetchUrl = `${import.meta.env.VITE_BASE_PATH}/cars.json`; // Dynamically fetch data from the right base path

const HighlightedCarPage = () => {
  const [highlightedCars, setHighlightedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(fetchUrl) // Fetch car data
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter the highlighted cars
        const highlighted = data.Cars.filter(
          (car) => localStorage.getItem(`highlighted_${car.Cid}`) === "true"
        );
        setHighlightedCars(highlighted);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load highlighted cars.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const removeHighlight = (Cid) => {
    localStorage.removeItem(`highlighted_${Cid}`);
    setHighlightedCars((prevCars) => prevCars.filter((car) => car.Cid !== Cid));
  };

  if (loading) {
    return <p>Loading highlighted cars...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container style={{ marginTop: "130px" }}>
      <h2>Highlighted Cars</h2>
      <Row className="mt-3 gy-4">
        {highlightedCars.length > 0 ? (
          highlightedCars.map((car) => (
            <Col sm={12} md={6} lg={4} key={car.Cid}>
              <Card>
                <Card.Body>
                  {/* Link to Car Details Page with dynamic path */}
                  <Card.Title>
                    <Link to={`/car/${car.Cid}`} style={{ color: "#023047" }}>
                      {car.NameMMT}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    Model: {car.Model} <br />
                    Year: {car.Yr} <br />
                    Price: {car.Prc} {car.Currency} <br />
                    Province: {car.Province} <br />
                  </Card.Text>
                  <div>
                    {/* Link to car image */}
                    <Link to={`/car/${car.Cid}`}>
                      {car.Img300 && (
                        <img
                          src={car.Img300}
                          alt={car.Model}
                          style={{ width: "100%" }}
                        />
                      )}
                    </Link>
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => removeHighlight(car.Cid)}
                    className="mt-3 d-flex align-items-center"
                  >
                    Remove Highlight <FaStar className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No highlighted cars found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default HighlightedCarPage;
