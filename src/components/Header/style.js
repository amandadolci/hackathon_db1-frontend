import styled from 'styled-components';

export const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-height: 5rem;
	background-color: #3f4045;
	box-shadow: #3f4045 0px 0px 50px 0px;
	padding: 0rem 4rem;
	/* margin-bottom: 2.5rem; */

	.header-container-logo h1 {
		font-family: 'Permanent Marker', cursive;
		font-size: 2.25rem;
		color: #e8e8e8;
		padding-left: 0.25rem;
	}

	.header-container-nav {
		display: flex;
		gap: 0.75rem;
		padding-top: 0.5rem;
	}

	.header-nav-icon {
		background-color: inherit;
		border: none;
		cursor: pointer;
		color: #e8e8e8;
	}

	.header-nav-icon:hover {
		color: #96939b;
	}

	.material-symbols-rounded {
		font-size: 2.25rem;
	}
`;
