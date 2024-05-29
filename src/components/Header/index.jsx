import { Link } from 'react-router-dom';
import { StyledHeader } from './style';

export function Header() {
	return (
		<StyledHeader>
			<Link className='header-container-logo' to='/' onClick={() => showFavoriteList(false)}>
				<h1>Threads & Co.</h1>
			</Link>
			<nav className='header-container-nav'>
				<button className='header-nav-icon'>
					<span className='material-symbols-rounded'>search</span>
				</button>
				<button className='header-nav-icon' onClick={() => setShowFavoriteList(true)}>
					<span className='material-symbols-rounded'>favorite</span>
				</button>
				<button className='header-nav-icon'>
					<span className='material-symbols-rounded'>shopping_cart</span>
				</button>
			</nav>
		</StyledHeader>
	);
}
