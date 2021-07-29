import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const DarkNavbar = () => {
	return (
		<Navbar className="h-auto" variant="dark" bg="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href="/" >Sherman Lok</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-link" to="/experience">Work/Education</Link>
						<Link className="nav-link" to="/projects">Projects</Link>
						<Link className="nav-link" to="/contact">Contact</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}


export default DarkNavbar;