import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
	const [productList, setProductList] = useState([]);
	const [productList6, setProductList6] = useState([]);
	const [favoriteList, setFavoriteList] = useState([]);
	const [showFullList, setShowFullList] = useState(false);
	const [showFavoriteList, setShowFavoriteList] = useState(false);

	const getRandomProducts = products => products.sort(() => 0.5 - Math.random()).slice(0, 6);

	function updateShortProductList(products) {
		const newShortProductList = getRandomProducts(products);
		setProductList6(newShortProductList);
	}

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

	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<ProductContext.Provider
			value={{
				api,
				productList,
				setProductList,
				productList6,
				setProductList6,
				favoriteList,
				setFavoriteList,
				showFullList,
				setShowFullList,
				showFavoriteList,
				setShowFavoriteList,
				loadProducts,
				favoriteProduct,
			}}>
			{children}
		</ProductContext.Provider>
	);
}
