import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductProvider';
import { ProductList } from '../../components/ProductList';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { StyledHomepageMainSection } from './style';

export function Homepage() {
	const {
		productList,
		productList6,
		favoriteList,
		showFullList,
		setShowFullList,
		showFavoriteList,
	} = useContext(ProductContext);

	return (
		<>
			<Header />
			<main>
				<StyledHomepageMainSection className='section-product-list'>
					{showFullList ? (
						<ProductList productList={productList} />
					) : showFavoriteList ? (
						<ProductList productList={favoriteList} />
					) : (
						<ProductList productList={productList6} />
					)}
					{showFavoriteList ? null : (
						<button
							className='product-list-button'
							onClick={() => (showFullList ? setShowFullList(false) : setShowFullList(true))}>
							{showFullList ? 'Ver menos' : 'Ver todos'}
						</button>
					)}
				</StyledHomepageMainSection>
			</main>
			<Footer />
		</>
	);
}
