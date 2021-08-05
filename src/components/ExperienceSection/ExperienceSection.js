import { Row, Col } from 'react-bootstrap';
import styles from './experienceSection.module.css';

const ExperienceSection = (props) => {
	const {
		company, 
		title, 
		date, 
		duties,
		technologies,
		url,
		img,
		alt
 	} = props;
	return (
		<>
			<Row className='align-items-center'> 
				<Col sm={12} md={8}>
					<h1>{company}</h1>
					<div className={`text-secondary`}>
						<h3>{title}</h3>
						<h6>{date}</h6>
						<ul>
							{iterateDuties(duties)}
						</ul>
					{ technologies &&
						<>
							<h5>Technologies Used</h5>
							<p>{technologies}</p> 
						</> 
					}
					</div>
					
				</Col>
				<Col sm={12} md={4} className={`${styles.experienceLogoDiv}`}>
					<a href={url}>
						<img 
							src={`${process.env.PUBLIC_URL}/experience_images/${img}`} 
							alt={alt} 
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