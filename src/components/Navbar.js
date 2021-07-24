import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const PersonalNavbar = () => {
	return (
		<Navbar variant="dark" bg="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Sherman Lok</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#experience">Experience</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default PersonalNavbar;