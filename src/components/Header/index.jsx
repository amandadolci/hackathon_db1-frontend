import { Link } from 'react-router-dom';
import { StyledHeader } from './style';

export function Header({ setShowFavoriteList, setShowFullList }) {
	return (
		<StyledHeader>
			<Link className='header-container-logo' to='/' onClick={() => setShowFavoriteList(false)}>
				<h1>Threads & Co.</h1>
			</Link>
			<nav className='header-container-nav'>
				<button className='header-nav-icon'>
					<span className='material-symbols-rounded'>search</span>
				</button>
				<button
					className='header-nav-icon'
					onClick={() => {
						setShowFavoriteList(true);
						setShowFullList(false);
					}}>
					<span className='material-symbols-rounded'>favorite</span>
				</button>
				<button className='header-nav-icon'>
					<span className='material-symbols-rounded'>shopping_cart</span>
				</button>
			</nav>
		</StyledHeader>
	);
}
