import styled from 'styled-components';

export const StyledProductList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	column-gap: 1rem;
	row-gap: 2.25rem;
`;

export const StyledProductCard = styled.li`
	background-color: #ffffff;
	border-radius: 1.125rem;
	width: 18.75rem;
	height: 24rem;
	display: flex;
	flex-direction: column;
	/* gap: 0.5rem; */
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.02);
	}

	.product-card-img {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		height: 75%;
	}

	.product-card-img button {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		width: 2rem;
		height: 2rem;
		border-radius: 2rem;
		background-color: #e8e8e8;
		color: #f16969;
		cursor: pointer;
	}
	.product-card-img .material-symbols-rounded {
		padding-top: 0.125rem;
	}
	.material-symbols-filled {
		font-variation-settings: 'FILL' 1;
	}
	.product-card-img img {
		width: 90%;
	}

	.product-card-info {
		background-color: #e8e8e8;
		border-radius: 0 0 1.125rem 1.125rem;
		height: 7.75rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 0 0.75rem;
	}

	.product-card-info h2 {
		font-size: 1.375rem;
	}
	.product-card-info h3 {
		font-size: 1.25rem;
	}
`;
