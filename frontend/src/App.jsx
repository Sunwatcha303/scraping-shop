import { StrictMode } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/util/Header';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './components/CartPage/CartPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import SignInPage from './components/SignInPage/SignInPage';
import PrivateRoute from './components/util/PrivateRoute'
import ProtectedRoute from './components/util/ProtectedRoute';
const App = () => {
    const location = useLocation();

    return (
        <StrictMode>
            {/* Conditionally render Header if not on the /signup page */}
            {(location.pathname !== '/signup' && location.pathname !== '/signin') && <Header />}

            <Routes>
                <Route path="signup" element={<ProtectedRoute element={<SignUpPage />} />} />
                <Route path="signin" element={<ProtectedRoute element={<SignInPage />} />} />
                <Route index element={<PrivateRoute element={<HomePage />} />} />
                <Route path="shop" element={<PrivateRoute element={<ShopPage />} />} />

                {/* Protected routes */}
                <Route path="cart" element={<PrivateRoute element={<CartPage />} />} />
                <Route path="profile" element={<PrivateRoute element={<ProfilePage />} />} />

                <Route path="*" element={<HomePage />} />
            </Routes>
        </StrictMode>
    );
};

export default App;