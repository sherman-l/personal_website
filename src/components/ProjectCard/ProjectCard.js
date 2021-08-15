import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './projectCard.module.css'
const ProjectCard = (props) => {
	const { 
		github, 
		img,
		title, 
		description,
		short, 
		technologies, 
		type 
	} = props;
	const [open, setOpen] = useState(false);
	return (
		<Card bg="secondary" className={`${styles.projectCardStyle}`} onClick={() => setOpen(!open)}>
				<Card.Img 
					variant="top" 
					src={`${process.env.PUBLIC_URL}/project_images/${img}`} 
					className={styles.projectCardImg}/>
				<Card.Body>
					<Card.Title>
						Technologies
					</Card.Title>
					<Card.Text>
						{technologies}
					</Card.Text>
					<Card.Title>
						{title + " (" + type + ")"}
					</Card.Title>							
					<Card.Text>
						{description}
						<br/>
						<br/>
						<a href={github}><Button variant="dark">Github</Button></a>
					</Card.Text>
				</Card.Body>
		</Card>
	)
}

export default ProjectCard;