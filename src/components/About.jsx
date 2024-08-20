import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Card.Title>About Car Analytics</Card.Title>
              <Card.Text>
                Welcome to the Car Analytics application! This platform helps users analyze car data, including sales figures and fuel efficiency metrics.
              </Card.Text>
              <Card.Text>
                <strong>Technologies Used:</strong>
                <ul>
                  <li>React: For building the user interface.</li>
                  <li>Vite: A fast build tool and development server.</li>
                  <li>React Bootstrap: For responsive, mobile-first front-end development.</li>
                </ul>
              </Card.Text>
              <Card.Text>
                This application is a work in progress, and we welcome any feedback or suggestions!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
