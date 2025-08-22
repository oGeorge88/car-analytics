import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "/public/logo.png"; // Adjust the path according to your project structure
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)", fontFamily: 'Segoe UI, Roboto, Arial, sans-serif', letterSpacing: '0.5px' }}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ display: "flex", alignItems: "center", fontSize: "26px", fontWeight: "700", color: "#28a745" }}
        >
          <img
            alt="Car Analytics Logo"
            src={Logo}
            style={{ width: "48px", height: "48px", marginRight: "14px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(40,167,69,0.15)" }}
          />
          Car Analytics
        </Navbar.Brand>
        <span style={{ color: "#bbb", fontSize: "14px", marginLeft: "10px", fontStyle: "italic" }}>
          Driving Insights, Empowering Decisions
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: "8px" }}>
            <Nav.Link as={Link} to="/" style={{ color: "#f8f9fa", fontWeight: "500", transition: "color 0.2s" }} activeStyle={{ color: "#28a745" }}>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/highlighted-cars" style={{ color: "#f8f9fa", fontWeight: "500", transition: "color 0.2s" }} activeStyle={{ color: "#28a745" }}>
              Highlighted Cars
            </Nav.Link>
            <Nav.Link as={Link} to="/statistics" style={{ color: "#f8f9fa", fontWeight: "500", transition: "color 0.2s" }} activeStyle={{ color: "#28a745" }}>
              Statistics
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#f8f9fa", fontWeight: "500", transition: "color 0.2s" }} activeStyle={{ color: "#28a745" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "#f8f9fa", fontWeight: "500", transition: "color 0.2s" }} activeStyle={{ color: "#28a745" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
