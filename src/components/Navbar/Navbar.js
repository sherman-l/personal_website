import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const root = '/personal_website';

const DarkNavbar = () => {
	return (
		<Navbar className="h-auto" variant="dark" bg="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href={root} >Sherman Lok</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-link" to={`${root}/experience`}>Work/Education</Link>
						<Link className="nav-link" to={`${root}/projects`}>Projects</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}


export default DarkNavbar;