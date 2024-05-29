import { StyledFooter } from './style';

export function Footer() {
	return (
		<StyledFooter>
			<h1
				className='footer-container-logo'
				onClick={() => {
					window.scroll({ top: 0, left: 0, behavior: 'smooth' });
				}}>
				Threads & Co.
			</h1>
			<div className='footer-container-info'>
				<p>Rua dos Bobos, nº 0</p>
				<p>CEP 80000-000</p>
				<p>Maringá - PR</p>
			</div>
		</StyledFooter>
	);
}
