import { Card } from 'react-bootstrap';
import styles from './projectCard.module.css'
const ProjectCard = (props) => {
	const { 
		github, 
		img,
		title, 
		description, 
		technologies, 
		type 
	} = props;
	return (
		<Card bg="secondary" className={`${styles.projectCardStyle}`}>
			<a href={`${github}`} className={`${styles.linkNoStyle} text-white`}>
				<Card.Img 
					variant="top" 
					src={`${process.env.PUBLIC_URL}/project_images/${img}`} 
					className={styles.projectCardImg}/>
				<Card.Body>
					<Card.Title>
						{title + " (" + type + ")"}
					</Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
					<Card.Title>
						Technologies
					</Card.Title>
					<Card.Text>
						{technologies}
					</Card.Text>
				</Card.Body>
			</a>
		</Card>
	)
}

export default ProjectCard;