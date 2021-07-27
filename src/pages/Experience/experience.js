import ExperienceSection from '../../components/ExperienceSection/ExperienceSection.js'
import { Container } from 'react-bootstrap';
import experienceJson from './experience.json'


const Experience = () => {
	return (
		<Container className={`mt-3`}>
			{iterateExperience()}		
		</Container>
	)
}

const iterateExperience = () => {
	let experienceList = experienceJson.map((experience) => {
		return <ExperienceSection 
			company={experience.company} 
			title={experience.title}
			date={experience.date} 
			description={experience.description} 
			duties={experience.duties}
			img={experience.img}
			alt={experience.alt}
			url={experience.url}
		/>
	})
	return experienceList
}

export default Experience;