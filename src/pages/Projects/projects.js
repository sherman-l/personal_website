import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard.js'
import { CardColumns } from 'react-bootstrap'

const Projects = () => {
	return (
		<CardColumns>
			{iterateProjects()}
		</CardColumns>
	)
}

const iterateProjects = () => {
	let i = [1,2,3,4];
	let projectList = i.map((item) => {
		return <ProjectCard/>
	})
	return projectList
}


export default Projects;