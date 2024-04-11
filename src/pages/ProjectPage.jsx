import React from 'react'
import ButtonGitHub from '../components/buttonGitHub/ButtonGitHub'
import { useParams } from 'react-router-dom'
import { projects } from '../helpers/projectsList'


function ProjectPage() {

  const { id } = useParams()
  const project = projects[id]

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          
          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <ButtonGitHub link={project.githubLink} />

        </div>
      </div>
    </main>
  )
}

export default ProjectPage