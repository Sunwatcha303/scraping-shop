import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [activeItem, setActiveItem] = useState('home');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignout = () => {
        // Delete the cookie by setting its expiration date to the past
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";

        // Redirect to the sign-up page
        navigate('/signin');
    };

    return (
        <header className="site-header">
            <h1 className="logo">scraping shop</h1>
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">หน้าแรก</a>
                    </li>
                    <li className="nav-item">
                        <a href="/cart" className="nav-link">ตะกร้า</a>
                    </li>
                    <li className="nav-item">
                        <a href="/profile" className="nav-link">โปรไฟล์</a>
                    </li>
                </ul>
            </nav>
            <button className="logout-btn" onClick={handleSignout}>ออกจากระบบ</button>
            <style>{`
            .site-header {
                background: var(--secondary);
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 19px 28px 11px;
                box-sizing: border-box;
            }

            .logo {
                color: var(--white);
                font: 400 36px Baumans, sans-serif;
                margin: 0;
            }

            .main-nav {
                display: flex;
                align-items: center;
            }

            .nav-list {
                display: flex;
                list-style-type: none;
                padding: 0;
                margin: 0;
                gap: 30px;
            }

            .nav-item {
                font-size: 20px;
                color: var(--gray);
            }

            .nav-link {
                text-decoration: none;
                color: inherit;
                transition: color 0.3s ease;
            }

            .nav-item:hover .nav-link {
                color: var(--primary); /* Change to your desired hover color */
            }

            .nav-item.active::after {
                content: '';
                display: block;
                height: 2px;
                background: var(--primary);
                border-radius: 8px;
                margin-top: 4px;
            }

            .logout-btn {
                background: var(--primary);
                color: var(--white);
                border: none;
                border-radius: 8px;
                padding: 11px 16px;
                font-size: 16px;
                cursor: pointer;
                transition: background 0.3s ease;
            }

            .logout-btn:hover {
                background: darken(var(--primary), 10%);
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
                .nav-list {
                    gap: 20px;
                }

                .logo {
                    font-size: 28px;
                }

                .nav-item {
                    font-size: 18px;
                }

                .logout-btn {
                    padding: 8px 12px;
                    font-size: 14px;
                }
            }

            `}</style>
        </header>
    );
};

export default Header;