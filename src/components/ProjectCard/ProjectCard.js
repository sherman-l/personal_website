import { Card } from 'react-bootstrap';
import styles from './projectCard.module.css'
let imageUrl = 'logo512.png';
const ProjectCard = (props) => {
	return (
		<Card bg="secondary p-2" className={styles.projectCardStyle}>
			<Card.Img 
				variant="top" 
				src={`/project_images/${imageUrl}`} 
				className={styles.projectCardImg}/>
			<br/>
			<Card.Body>
				<Card.Title>
					Test Title
				</Card.Title>
				<Card.Text>
					Example card
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ProjectCard;