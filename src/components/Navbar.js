import { Navbar, Nav, Container } from 'react-bootstrap';
import { PersonalNavbar } from './BootstrapStyled.js'



const DarkNavbar = () => {
	return (
		<PersonalNavbar variant="dark" bg="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href="/">Sherman Lok</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/experience">Experience</Nav.Link>
						<Nav.Link href="/projects">Projects</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</PersonalNavbar>
	)
}


export default DarkNavbar;