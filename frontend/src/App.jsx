import { StrictMode } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/util/Header';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './components/CartPage/CartPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SignUpPage from './components/SignUpPage/SignUpPage';

const App = () => {
    const location = useLocation();

    return (
        <StrictMode>
            {/* Conditionally render Header if not on the /signup page */}
            {location.pathname !== '/signup' && <Header />}

            <Routes>
                <Route path="signup" element={<SignUpPage />} />
                <Route index element={<HomePage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </StrictMode>
    );
};

export default App;