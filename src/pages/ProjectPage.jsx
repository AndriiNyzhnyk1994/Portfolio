import React from 'react'
import project1Big from '../img/projects/01-big.jpg'
import ButtonGitHub from '../components/buttonGitHub/ButtonGitHub'


function ProjectPage() {
  return (
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={project1Big} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <ButtonGitHub link='https://github.com'/>

            </div>
        </div>
    </main>
  )
}

export default ProjectPage