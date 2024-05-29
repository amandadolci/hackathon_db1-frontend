import React from 'react';

export function ProductList({ productList }) {
	return (
		<ul>
			{productList.map(({ id, name, image_url, price, favorite }) => (
				<li key={id}>
					<figure>
						<img src={`http://localhost:3000${image_url}`} alt={name} />
					</figure>
					<div>
						<h2>{name}</h2>
						<h3>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
						<button onClick={() => handleClick(id)}>Ver mais</button>
						<button onClick={() => handleClick(id)}>
							<span className='material-symbols-rounded'>favorite</span>
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}
