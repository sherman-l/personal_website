import { Row, Col } from 'react-bootstrap';
import styles from './experienceSection.module.css';

const ExperienceSection = (props) => {
	return (
		<>
			<Row className='align-items-center'> 
				<Col sm={12} md={8}>
					<h1>{props.company}</h1>
					<div className={`text-secondary`}>
						<h3>{props.title}</h3>
						<h6>{props.date}</h6>
						<ul>
							{iterateDuties(props.duties)}
						</ul>
					{ props.technologies &&
						<>
							<h5>Technologies Used</h5>
							<p>{props.technologies}</p> 
						</> 
					}
					</div>
					
				</Col>
				<Col sm={12} md={4} className={`${styles.experienceLogoDiv}`}>
					<a href={props.url}>
						<img 
							src={`${process.env.PUBLIC_URL}/experience_images/${props.img}`} 
							alt={props.alt} 
							className={`img-thumbnail rounded ${styles.experienceLogo}`}
						/>
					</a>
				</Col>
			</Row>
			<hr/>
		</>
	)
}

const iterateDuties = (duties) => {
	let dutyList = duties.map((duty) => {
		return  (
			<li>
				{duty}
			</li>
		)
	})
	return dutyList;
}

export default ExperienceSection;