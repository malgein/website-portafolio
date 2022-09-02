import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoW from '../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{
	return(
		<div className="nav-bar">
			<Link className="logo" to='/'>
				<img src={LogoW} alt="logo" />
				<p>Wilmer</p>
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4c" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" to="/about"
					className="about-link">
					<FontAwesomeIcon icon={faUser} color="#4d4d4c" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" to="/contact"
					className="contact-link">
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4c" />
				</NavLink>
				<NavLink
          activeclassname="active"
          className="portafolio-link"
          to="/portafolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
			</nav>
				<ul>
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wilmerpocaterra/">
							<FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://github.com/malgein">
							<FontAwesomeIcon icon={faGithub} color="4d4d4e" />
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://join.skype.com/invite/oUFdpU9UhrUb">
							<FontAwesomeIcon icon={faSkype} color="4d4d4e" />
						</a>
					</li>
				</ul>
		</div>
	)
}

export default Sidebar