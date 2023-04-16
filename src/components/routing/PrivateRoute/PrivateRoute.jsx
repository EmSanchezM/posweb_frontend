import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../lib/hooks/auth/useAuth';

const PrivateRoute = ({ allowedRoles, children }) => {
	const { auth } = useAuth();
	const location = useLocation();

	if(!allowedRoles?.includes(auth?.user?.rol)) return <Navigate to='/' state={{ from: location }} replace />

	return children ? children : <Outlet />;
};

export default PrivateRoute;
