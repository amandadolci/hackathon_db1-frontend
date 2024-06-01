import { Routes, Route, Navigate } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { ProductDetails } from '../pages/ProductDetails';
import { PageNotFound } from '../pages/PageNotFound';

export function MainRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/favorites' element={<Homepage />} />
			<Route path='/products/:name/:id' element={<ProductDetails />} />
			<Route path='/404-page-not-found' element={<PageNotFound />} />
			<Route path='*' element={<Navigate to='/404-page-not-found' />} />
		</Routes>
	);
}
