import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}>
                    <img
                        alt="Brand Logo"
                        src="/public/logo.png"
                        style={{ width: '60px', height: 'auto', marginRight: '10px' }}
                    />{' '}
                    Car Analytics
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
