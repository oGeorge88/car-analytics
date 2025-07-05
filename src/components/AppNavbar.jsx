import { Navbar, Nav, Container } from "react-bootstrap";

const basePath = import.meta.env.VITE_BASE_PATH;

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand
          href={`${basePath}/`}
          style={{ display: "flex", alignItems: "center", fontSize: "24px" }}
        >
          <img
            alt="Brand Logo"
            src={`${basePath}/logo.png`}
            style={{ width: "60px", height: "auto", marginRight: "10px" }}
          />{" "}
          Car Analytics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href={`${basePath}/`}>Dashboard</Nav.Link>
            <Nav.Link href={`${basePath}/highlighted-cars`}>
              Highlighted Cars
            </Nav.Link>
            <Nav.Link href={`${basePath}/statistics`}>Statistics</Nav.Link>
            <Nav.Link href={`${basePath}/about`}>About</Nav.Link>
            <Nav.Link href={`${basePath}/contact`}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
