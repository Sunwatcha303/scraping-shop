import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = !!document.cookie.split('; ').find(row => row.startsWith('token='));

    // Redirect to home if authenticated and trying to access signup or signin
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return element;
};

export default ProtectedRoute;
