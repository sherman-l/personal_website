import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard.js'
import { CardColumns, Container } from 'react-bootstrap'
import projectJson from './projects.json'

const Projects = () => {
	return (
		<>
			<Container>
				<h1>
					Projects
				</h1>
				<div>
					Below are
				</div>
			</Container>
			<hr/>
			<CardColumns>
				{iterateProjects()}
			</CardColumns>
		</>
	)
}

const iterateProjects = () => {
	let projectList = projectJson.map((project) => {
		return <ProjectCard 
			title={project.title} 
			img={project.img} 
			description={project.description} 
			github={project.github}
			technologies={project.technologies}
			/>
	})
	return projectList
}


export default Projects;