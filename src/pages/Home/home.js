import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import headshotPhoto from '../../img/me.jpg';

const Home = () => {
	return (
		<>
			<Container className={styles.homePageContainer}>
				<Row className="h-100 justify-content-center align-items-center no-gutters p-5">
					<Col className="no-gutters" sm={12} md={6}>
					<div className={styles.introductionHeader}>
						<h1>Hi! I'm Sherman.</h1>
						<span className="text-secondary">
							<h4>BCIT Computer Systems Technology diploma grad. </h4>
							<h4>Aspiring developer.</h4>
						</span>
						</div>
					</Col>
					<Col sm={12} md={6} className={`${styles.imgColumn}`}>
						<img src={headshotPhoto} className={`rounded-circle ${styles.headshot}`} alt="Headshot of myself"/>
					</Col>
				</Row>
				<hr/>
				<Row>
					<h1>
						About me.
					</h1>
					<div className={`text-secondary ${styles.aboutDiv}`}>
						<p>
							Welcome to my portfolio website built with React.js, Javascript, HTML/CSS.
							I recently graduated from the Computer Systems Technology diploma program with distinction at the British Columbia Institute of Technology. 
							I enjoy programming and creating solutions to problems. Through my <Link className={styles.projectAnchor} to='/projects'>projects</Link>, academic and non-academic, I've learned and used <b>Java, Javascript, Node.JS, HTML, CSS, and C</b>.
						</p>
						<br/>
						<p>
							As a hobby, I like to learn different languages. I currently speak Cantonese, English and Japanese at an intermediate/fluent level and aiming to learn more in the future.
						</p>
					</div>
				</Row>
				<hr/>
			</Container>
		</>
	)
}

export default Home;