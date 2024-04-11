import './style.css'

function Project({imageUrl, title, link}) {
    return (
        <li className="project">
            <a href={link}>
                <img src={imageUrl} alt="Project img" className="project__img" />
                <h3 className="project__title">{ title }</h3>
            </a>
        </li>
    )
}

export default Project