import styled from 'styled-components';

export const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4.5rem;
	min-height: 5rem;
	background-color: #3f4045;
	color: #e8e8e8;
	padding: 0rem 4rem;

	.footer-container-logo {
		cursor: default;
		font-family: 'Permanent Marker', cursive;
		color: #e8e8e8;
		font-size: 1.5rem;
	}

	.footer-container-info {
		display: flex;
		flex-direction: column;
	}

	.footer-container-info p {
		font-size: 0.875rem;
	}
`;
