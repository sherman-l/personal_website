import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PageContainerDark } from '../../components/BootstrapStyled';
import styles from './home.module.css';
import myself from '../../img/me.jpg'
const Home = () => {
	return (
		<PageContainerDark>
			<Row className="h-100 justify-content-center align-items-center no-gutters p-5">
				<Col className="no-gutters" sm={12} md={6}>
					<div className={styles.introductionHeader}><h1>Hi! I'm Sherman</h1></div>
					<div>I'm a recent graduate from the Computer Systems Technology Program at BCIT.</div>
				</Col>
				<Col sm={12} md={6} className={`${styles.imgColumn}`}>
					<img src={myself} className={`rounded-circle h-100 ${styles.headshot}`} alt="Headshot of myself"/>
				</Col>
			</Row>
			<Row>
				<div>
					
				</div>
			</Row>
		</PageContainerDark>
	)
}

export default Home;