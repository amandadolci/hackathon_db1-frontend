import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';

export function MainRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
		</Routes>
	);
}
