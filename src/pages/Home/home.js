import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PageContainerDark } from '../../components/BootstrapStyled';
import styles from './home.module.css';
import myself from '../../img/me.jpg'
const Home = () => {
	return (
		<PageContainerDark>
			<Row className="h-100 justify-content-center align-items-center no-gutters">
				<Col className="no-gutters" sm={12} md={6}>
					<div className={styles.introductionHeader}><h1>Hi! I'm Sherman</h1></div>
					<div>I'm a recent graduate from the Computer Systems Technology Program in BCIT.</div>
				</Col>
				<Col sm={12} md={6} className={`${styles.imgColumn}`}>
					<img src={myself} className={`rounded-circle img-fluid h-100`} alt="Headshot of myself"/>
				</Col>
			</Row>
		</PageContainerDark>
	)
}

export default Home;