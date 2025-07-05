import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Alert } from "react-bootstrap";

// Assuming this is the base path for assets
const basePath = "/car-analytics1"; // Define the base path

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`${basePath}/cars.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const selectedCar = data.Cars.find((car) => car.Cid === parseInt(id));
        if (!selectedCar) {
          throw new Error("Car not found");
        }

        // Check if the car is highlighted in localStorage
        const isHighlighted = localStorage.getItem(`highlighted_${id}`) === "true";
        if (isHighlighted) {
          selectedCar.highlighted = true;
        }

        setCar(selectedCar);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); // Set error message in state
      }
    };

    fetchCarDetails();
  }, [id]);

  // If error, show it
  if (error) return <Alert variant="danger">Error: {error}</Alert>;

  // If loading, show loading message
  if (!car) return <Alert variant="info">Loading...</Alert>;

  return (
    <Container style={{ margin: "60px auto", maxWidth: "800px" }}>
      <Card className="shadow-sm border-0 rounded">
        <Card.Body>
          <Card.Title
            className="mb-4"
            style={{ fontSize: "2rem", color: "#008080", fontWeight: "bold" }}
          >
            {car.NameMMT} {car.Model}
          </Card.Title>
          <Card.Text
            style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#555" }}
          >
            <strong>Car ID:</strong> {car.Cid} <br />
            <strong>Is Car Expired:</strong> {car.IsCExp ? "Yes" : "No"} <br />
            <strong>Model:</strong> {car.Model} <br />
            <strong>Year:</strong> {car.Yr} <br />
            <strong>Price:</strong> {car.Prc} {car.Currency} <br />
            <strong>Province:</strong> {car.Province} <br />
            <strong>MkID:</strong> {car.MkID} <br />
            <strong>MdID:</strong> {car.MdID} <br />
            <strong>BdID:</strong> {car.BdID} <br />
            <strong>Update:</strong> {car.Upd} <br />
            <strong>Page Views:</strong> {car.PagesViews} <br />
            <strong>Down Payment:</strong> {car.DPmt} <br />
            <strong>Status:</strong> {car.Status} <br />
          </Card.Text>

          {/* Use the correct field for the image URL */}
          {car.ImageURL && (
            <div className="text-center mt-4">
              <img
                src={`${basePath}/${car.ImageURL}`} // Adjust image path if necessary
                alt={car.Model}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "10px",
                  border: "2px solid #008080",
                }}
              />
            </div>
          )}

          {/* If the car is highlighted, show a highlight message */}
          {car.highlighted && (
            <div className="mt-4 text-center">
              <Alert variant="info">This car is highlighted!</Alert>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CarDetails;
