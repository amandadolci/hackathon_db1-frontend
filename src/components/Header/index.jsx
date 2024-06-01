import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductProvider';
import { StyledHeader } from './style';
import { Link } from 'react-router-dom';

export function Header() {
	const { setShowFullList, setShowFavoriteList } = useContext(ProductContext);

	return (
		<StyledHeader>
			<Link className='header-container-logo' to='/' onClick={() => setShowFavoriteList(false)}>
				<h1>Threads & Co.</h1>
			</Link>
			<nav className='header-container-nav'>
				<button className='header-nav-icon'>
					<span className='material-symbols-rounded'>search</span>
				</button>
				<Link
					className='header-nav-icon'
					to={'/favorites'}
					onClick={() => {
						setShowFavoriteList(true);
						setShowFullList(false);
					}}>
					<span className='material-symbols-rounded'>favorite</span>
				</Link>
				<button className='header-nav-icon'>
					<span className='material-symbols-rounded'>shopping_cart</span>
				</button>
			</nav>
		</StyledHeader>
	);
}
