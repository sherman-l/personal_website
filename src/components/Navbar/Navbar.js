import { Navbar, Nav, Container } from 'react-bootstrap';
import { PersonalNavbar, PersonalNavLink } from '../BootstrapStyled.js'
import styles from './navbar.module.css'



const DarkNavbar = () => {
	return (
		<PersonalNavbar variant="dark" bg="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href="/">Sherman Lok</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/experience" activeStyle="active" className={styles.navlink}>Experience</Nav.Link>
						<Nav.Link href="/projects" activeStyle="active" className={styles.navlink}>Projects</Nav.Link>
						<Nav.Link href="/contact" activeStyle="active" className={styles.navlink}>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</PersonalNavbar>
	)
}


export default DarkNavbar;