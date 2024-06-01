import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductProvider';
import { Header } from '../../components/Header';
import { StyledProductDetailsContainer } from './style';
import { Footer } from '../../components/Footer';
import Loader from '../../assets/Spinner.svg';

export function ProductDetails() {
	const { id: productId } = useParams();
	const { productObject, favoriteProduct, getProductById } = useContext(ProductContext);
	const { id, name, image_url, price, favorite } = productObject;

	if (price === undefined || !productObject) {
		getProductById(productId);
		return (
			<>
				<Header />
				<section className='section-product-loading'>
					<img src={Loader} alt='Carregando...' />
				</section>
				<Footer />
			</>
		);
	}

	const productPriceInReais = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	const productInstallmentValues = (price / 6).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return (
		<>
			<Header />
			<main>
				<StyledProductDetailsContainer className='section-product-details'>
					<figure className='product-details-img'>
						<img src={`http://localhost:3000${image_url}`} alt={name} />
					</figure>
					<div className='product-details-info'>
						<div className='product-info-main'>
							<h1>{name}</h1>
							<h2>
								{productPriceInReais} <small>à vista</small>
							</h2>
							<small>{`ou ${productInstallmentValues} em até 6x sem juros`}</small>
						</div>
						<div className='product-info-description'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nostrum incidunt
							minima, non repellendus dignissimos cupiditate harum eos. Voluptates voluptatum aut
							facilis laborum doloribus ab, nihil omnis corporis delectus dicta!
						</div>
						<div className='product-info-actions'>
							<button className='product-actions-buy'>Comprar</button>
							<button
								className='product-actions-favorite'
								onClick={() => (favorite ? favoriteProduct(id, false) : favoriteProduct(id, true))}>
								{favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
							</button>
						</div>
					</div>
				</StyledProductDetailsContainer>
			</main>
			<Footer />
		</>
	);
}
