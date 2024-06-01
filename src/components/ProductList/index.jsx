import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductProvider';
import { StyledProductList, StyledProductCard } from './style';
import { useNavigate } from 'react-router-dom';

export function ProductList({ productList }) {
	const navigate = useNavigate();
	const { favoriteProduct, getProductById } = useContext(ProductContext);
	// const applyClass = index =>
	// 	index === productList.length - 1
	// 		? 'product-container-card last-row-item'
	// 		: 'product-container-card';
	const applyFavoriteClass = favorite =>
		favorite ? 'material-symbols-rounded material-symbols-filled' : 'material-symbols-rounded';

	return (
		<StyledProductList className='product-list-container'>
			{productList.map(({ id, name, image_url, price, favorite }, index) => (
				<StyledProductCard
					key={id}
					onClick={async () => {
						navigate(`/products/${name.replaceAll(' ', '-').toLowerCase()}/${id}`);
						await getProductById(id);
					}} /* className={applyClass(index)} */
				>
					<figure className='product-card-img'>
						<button
							onClick={e => {
								e.stopPropagation();
								favorite ? favoriteProduct(id, false) : favoriteProduct(id, true);
							}}>
							<span className={applyFavoriteClass(favorite)}>favorite</span>
						</button>
						<img src={`http://localhost:3000${image_url}`} alt={name} />
					</figure>
					<div className='product-card-info'>
						<h2>{name}</h2>
						<h3>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
					</div>
				</StyledProductCard>
			))}
		</StyledProductList>
	);
}
