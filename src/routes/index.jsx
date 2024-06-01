import { Routes, Route, Navigate } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
// import { Homepage } from '../pages/Homepage/index';
import { PageNotFound } from '../pages/PageNotFound';

export function MainRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/favorites' element={<Homepage />} />
			{/* <Route path='/products/:$' element={<Homepage />} /> */}
			<Route path='/404' element={<PageNotFound />} />
			<Route path='*' element={<Navigate to='/404' />} />
		</Routes>
	);
}
