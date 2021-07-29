import githubLogo from '../../img/GitHub64px.png';
import linkedinLogo from '../../img/LI-In-Bug.png';
import styles from './externalLinkSection.module.css'
import { Row, Container } from 'react-bootstrap';

const ExternalLinkSection = () => {
	return (
		<Container>
			<Row>
				<div className={`${styles.externalDiv}`}>
					<a href="https://www.linkedin.com/in/shermanlok/">
						<img src={linkedinLogo} alt="My LinkedIn Profile" className={`${styles.logo}`}/>
					</a>
					<a href="https://github.com/sherman-l">
						<img src={githubLogo} alt="My Github Profile" className={`${styles.logo}`}/>
					</a>
					<div>
						Phone Number: 778-886-9683 
						<br/>
						E-mail: shermanlok@hotmail.com
					</div>
				</div>
			</Row>
		</Container>
	)
}

export default ExternalLinkSection;