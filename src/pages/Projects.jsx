import Project from '../components/project/Project'
import { projects } from '../helpers/projectsList'



function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {
                        projects.map(p => {
                            return (
                                <Project
                                    imageUrl={p.imgUrl}
                                    link={p.link}
                                    title={p.title}
                                />
                            )
                        })
                    }

                </ul>
            </div>
        </main>
    )
}

export default Projects