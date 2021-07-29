import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './notFound.module.css';

const NotFound = () => {
	return (
		<Container>
			<Row className={`text-secondary align-items-center ${styles.notFoundContainer}`}>
				<Col>
					<h1>404 Not Found!</h1>
					<Link to='/'>Home.</Link>
				</Col>
			</Row>
		</Container>
	)
}

export default NotFound;