// import { MainRoutes } from './routes';
import { useEffect, useState } from 'react';
import { api } from './services/api';
import { GlobalStyle } from './styles/GlobalStyles';
import { ProductList } from './components/ProductList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
	const [productList, setProductList] = useState([]);
	const [productList6, setProductList6] = useState([]);
	const [favoriteList, setFavoriteList] = useState([]);
	const [showFullList, setShowFullList] = useState(false);
	const [showFavoriteList, setShowFavoriteList] = useState(false);
	// const [productObject, setProductObject] = useState();

	const getRandomProducts = products => products.sort(() => 0.5 - Math.random()).slice(0, 6);

	async function loadProducts() {
		try {
			const { data } = await api.get();
			setProductList(data);
			setProductList6([...data].splice(0, 6));
			// updateShortProductList(data);
			setFavoriteList(data.filter(product => product.favorite === true));
		} catch (error) {
			console.log(error.response.data.message);
		}
	}

	async function favoriteProduct(id, boolean) {
		try {
			await api.patch(`/${id}`, { favorite: boolean });
			loadProducts();
		} catch (error) {
			console.log(error.response.data.message);
		}
	}

	function updateShortProductList(products) {
		const newShortProductList = getRandomProducts(products);
		setProductList6(newShortProductList);
	}

	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<>
			<GlobalStyle />
			<Header setShowFavoriteList={setShowFavoriteList} setShowFullList={setShowFullList} />
			<main>
				<section className='section-product-list'>
					{showFullList ? (
						<ProductList productList={productList} favoriteProduct={favoriteProduct} />
					) : showFavoriteList ? (
						<ProductList productList={favoriteList} favoriteProduct={favoriteProduct} />
					) : (
						<ProductList productList={productList6} favoriteProduct={favoriteProduct} />
					)}
					{showFavoriteList ? null : (
						<button onClick={() => (showFullList ? setShowFullList(false) : setShowFullList(true))}>
							{showFullList ? 'Ver menos' : 'Ver todos'}
						</button>
					)}
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
