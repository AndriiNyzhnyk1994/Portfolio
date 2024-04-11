import './style.css'
import gitHubIcon from '../../img/icons/gitHub-black.svg'

function ButtonGitHub({link}) {
  return (
    <a href={link} rel='noreferrer' className="btn-outline">
                    <img src={gitHubIcon} alt=""/>
                    GitHub repo
                </a>
  )
}

export default ButtonGitHub