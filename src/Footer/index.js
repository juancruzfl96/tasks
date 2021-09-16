import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className='Footer'>
			<h3>Developed by Juan Cruz Fernandez</h3>
			<div className='links'>
				<a
					target='_blank'
					href='https://www.linkedin.com/in/juan-cruz-fernandez-lago-426373198/'>
					<FontAwesomeIcon className='linkedin icon' icon={faLinkedin} />
				</a>
				<a target='_blank' href='https://github.com/juancruzfl96'>
					<FontAwesomeIcon className='github icon' icon={faGithub} />
				</a>
			</div>
		</div>
	);
}

export default Footer;
