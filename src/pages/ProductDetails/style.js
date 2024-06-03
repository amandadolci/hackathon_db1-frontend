import styled from 'styled-components';

export const StyledProductDetailsContainer = styled.section`
	display: flex;
	justify-content: center;
	gap: 8rem;

	.product-details-img {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #ffffff;
		border-radius: 1.125rem;
		img {
			margin: 0 2rem;
			width: 31.25rem;
			height: 31.25rem;
		}
	}

	.product-details-info {
		max-width: 31.25rem;
		min-width: 19.75rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 1.125rem;
		font-weight: 600;
	}
	.product-info-main {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.product-info-main h1,
	.product-info-main h2 {
		font-size: 2rem;
		text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		small {
			font-size: 1.125rem;
		}
	}

	.product-info-description {
		text-align: justify;
	}

	.product-info-actions {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		button {
			cursor: pointer;
		}
		.product-actions-buy {
			background-color: #ffffff;
			border-radius: 3rem;
			font-size: 1.5rem;
			font-weight: 600;
			color: #3f4045;
			width: 100%;
			min-width: 3.5rem;
			height: 3rem;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			transition: transform 0.3s ease-in-out;
			&:hover {
				transform: scale(1.005);
				background-color: #3f404599;
				color: #ffffff;
			}
		}

		.product-actions-favorite {
			background-color: transparent;
			font-weight: inherit;
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;
