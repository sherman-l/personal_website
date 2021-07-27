import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PageContainer } from '../../components/BootstrapStyled';
import styles from './home.module.css';
import headshotPhoto from '../../img/me.jpg';
import githubLogo from '../../img/GitHub64px.png';
import linkedinLogo from '../../img/LI-In-Bug.png';

const Home = () => {
	return (
		<>
			<PageContainer>
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
							During school, I've learned and used Javascript, Java, Node.JS and C to complete school projects. As side <a href="/projects">projects</a>, I dabbled a bit in Python 
							to create a discord bot for me and my friends, and React for this website. I enjoy programming and the process of creating something out of
							nothing.
						</p>
						<br/>
						<p>
							I also had the privilege of being an intern at Absolute Software as a Database Operations Co-op. There, I created SQL stored procedures and performed read queries of 
							varying complexities to provide information for internal staff.
						</p>
					</div>
				</Row>
				<hr/>
				<Row>
					<div className={`${styles.externalDiv}`}>
						<a href="https://www.linkedin.com/in/shermanlok/">
							<img src={linkedinLogo} alt="My LinkedIn Profile" className={`${styles.logo}`}/>
						</a>
						<a href="https://github.com/sherman-l">
							<img src={githubLogo} alt="My Github Profile" className={`${styles.logo}`}/>
						</a>
					</div>

				</Row>
			</PageContainer>
		</>
	)
}

export default Home;