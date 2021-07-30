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
							<h4>Recent graduate from the CST program at BCIT. </h4>
							<h4>Former accountant.</h4>  
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
							I am a recent graduate from the Computer Systems Technology program at the British Columbia Institute of Technology. 
							At school, I've used Javascript, Java, Node.JS and C to complete school projects. For side <Link to="/projects">projects</Link>, I dabbled a bit in Python 
							to create a discord bot for me and my friends, and React for this website. I enjoy programming and the process of creating something solutions to problems.
						</p>
						<br/>
						<p>
							I also had the privilege of being an intern at Absolute Software as a Database Operations Co-op. There, I created SQL stored procedures and performed read queries of 
							varying complexities to provide information for internal staff.
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