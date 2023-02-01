import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './lib/context/auth/AuthProvider';
import { router } from './routes/AppRoutes'
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</Provider>
	);
}

export default App;
