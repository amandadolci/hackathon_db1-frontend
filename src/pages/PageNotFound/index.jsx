import { Header } from '../../components/Header';
import { Styled404Container } from './style';
import Sneakers from '../../assets/sneakers.svg';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';

export function PageNotFound() {
	return (
		<>
			<Header />
			<main>
				<Styled404Container className='404-page-container'>
					<h1>404</h1>
					<h2>Oops, page not found!</h2>
					<figure>
						<img src={Sneakers} alt='Sneakers drawing' />
					</figure>
					<h2>Go back to the</h2>
					<Link to={'/'}>Homepage</Link>
				</Styled404Container>
			</main>
			<Footer />
		</>
	);
}
