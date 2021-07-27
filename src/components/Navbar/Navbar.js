import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { PersonalNavbar } from '../BootstrapStyled.js';



const DarkNavbar = () => {
	return (
		<PersonalNavbar variant="dark" bg="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href="/" >Sherman Lok</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-link" to="/experience">Experience</Link>
						<Link className="nav-link" to="/projects">Projects</Link>
						<Link className="nav-link" to="/contact">Contact</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</PersonalNavbar>
	)
}


export default DarkNavbar;