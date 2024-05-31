import { GlobalStyle } from './styles/GlobalStyles';
import { ProductProvider } from './contexts/ProductProvider';
import { MainRoutes } from './routes';

function App() {
	return (
		<>
			<GlobalStyle />
			<ProductProvider>
				<MainRoutes />
			</ProductProvider>
		</>
	);
}

export default App;
