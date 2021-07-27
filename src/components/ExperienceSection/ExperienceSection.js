import { Row, Col } from 'react-bootstrap';
import styles from './experienceSection.module.css';

const ExperienceSection = (props) => {
	return (
		<>
			<Row> 
				<Col sm={12} md={8}>
					<h1>{props.company}</h1>
					<div className={`text-secondary`}>
						<h3>{props.title}</h3>
						<ul>
							<li>abc</li>
							<li>def</li>
							<li>ghi</li>
						</ul>
					</div>
				</Col>
				<Col sm={12} md={4} className={`${styles.experienceLogoDiv}`}>
					<a href={props.url}>
						<img 
							src={`${process.env.PUBLIC_URL}/experience_images/${props.img}`} 
							alt={props.alt} 
							className={`img-thumbnail rounded align-items-center ${styles.experienceLogo}`}
						/>
					</a>
				</Col>
			</Row>
			<hr/>
		</>
	)
}

export default ExperienceSection;