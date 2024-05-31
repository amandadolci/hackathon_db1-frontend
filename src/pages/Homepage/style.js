import styled from 'styled-components';

export const StyledHomepageMainSection = styled.section`
	width: 100%;
	display: flex;
	align-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.25rem;

	.product-list-button {
		cursor: pointer;
		background-color: #ffffff;
		border-radius: 3rem;
		font-size: 1.125rem;
		font-weight: 600;
		color: #3f4045;
		width: 15%;
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
`;
