import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ marginTop: "130px", marginBottom: "100px", padding: "20px" }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title
                className="text-center"
                style={{ fontSize: "2rem", fontWeight: "bold", color: "#28a745" }}
              >
                About Car Analytics
              </Card.Title>
              <Card.Text
                className="mt-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#333" }}
              >
                <strong>Our Mission:</strong> <br />
                To empower car enthusiasts and professionals with insightful analytics, enabling informed decisions and a deeper understanding of automotive trends.
              </Card.Text>
              <Card.Text
                className="mt-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#333" }}
              >
                Car Analytics is designed to deliver a seamless and intuitive experience, combining advanced technology with a passion for automobiles. Our platform provides comprehensive data visualization, detailed car information, and interactive tools to enhance your automotive journey.
              </Card.Text>
              <Card.Text
                className="mt-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#333" }}
              >
                <strong style={{ color: "#28a745" }}>Technologies Utilized:</strong>
                <ul className="mt-3">
                  <li>React – Building a dynamic and responsive user interface</li>
                  <li>Vite – Fast build tool and development server for modern web projects</li>
                  <li>React Bootstrap – Responsive, mobile-first front-end design</li>
                </ul>
              </Card.Text>
              <Card.Text
                className="mt-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#333" }}
              >
                We are committed to continuous improvement and welcome your feedback to help us refine and expand our offerings. Thank you for choosing Car Analytics as your trusted automotive data partner.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
