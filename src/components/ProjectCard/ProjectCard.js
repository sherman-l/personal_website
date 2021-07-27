import { Card } from 'react-bootstrap';
import styles from './projectCard.module.css'
const ProjectCard = (props) => {
	return (
		<a href={`${props.github}`} className={`${styles.linkNoStyle} text-white`}>
			<Card bg="secondary p-2" className={styles.projectCardStyle}>
				<Card.Img 
					variant="top" 
					src={`./project_images/${props.img}`} 
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
			</Card>
		</a>
	)
}

export default ProjectCard;