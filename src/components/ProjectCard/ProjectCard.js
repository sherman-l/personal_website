import { Card } from 'react-bootstrap';
import styles from './projectCard.module.css'
const ProjectCard = (props) => {
	return (
		<Card bg="secondary" className={`${styles.projectCardStyle}`}>
			<a href={`${props.github}`} className={`${styles.linkNoStyle} text-white`}>
				<Card.Img 
					variant="top" 
					src={`${process.env.PUBLIC_URL}/project_images/${props.img}`} 
					className={styles.projectCardImg}/>
				<Card.Body>
					<Card.Title>
						{props.title + " (" + props.type + ")"}
					</Card.Title>
					<Card.Text>
						{props.description}
					</Card.Text>
					<Card.Title>
						Technologies
					</Card.Title>
					<Card.Text>
						{props.technologies}
					</Card.Text>
				</Card.Body>
			</a>
		</Card>
	)
}

export default ProjectCard;