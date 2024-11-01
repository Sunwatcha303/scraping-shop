import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!document.cookie.split('; ').find(row => row.startsWith('token='));

    // Redirect to home if authenticated and trying to access signup or signin
    if (isAuthenticated && (location.pathname === '/signup' || location.pathname === '/signin')) {
        return <Navigate to="/" replace />;
    }

    return isAuthenticated ? element : <Navigate to="/signin" replace />;
};

export default PrivateRoute;