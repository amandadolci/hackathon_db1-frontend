// import { ProductCard } from '../ProductCard';
// import { useState } from 'react';
import { StyledProductList, StyledProductCard } from './style';

export function ProductList({ productList, favoriteProduct }) {
	// const applyClass = index =>
	// 	index === productList.length - 1
	// 		? 'product-container-card last-row-item'
	// 		: 'product-container-card';
	const applyFavoriteClass = favorite =>
		favorite ? 'material-symbols-rounded material-symbols-filled' : 'material-symbols-rounded';

	return (
		<StyledProductList className='product-container-list'>
			{productList.map(({ id, name, image_url, price, favorite }, index) => (
				<StyledProductCard key={id} /* className={applyClass(index)} */>
					<figure className='product-card-img'>
						<button
							onClick={() => (favorite ? favoriteProduct(id, false) : favoriteProduct(id, true))}>
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

// <ProductCard
// 	key={id}
// 	id={id}
// 	name={name}
// 	image_url={image_url}
// 	price={price}
// 	favorite={favorite}
// />
