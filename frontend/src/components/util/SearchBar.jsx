import React from 'react';

const SearchBar = () => {
    return (
        <form className="search-bar" role="search">
            <label htmlFor="search-input" className="visually-hidden">ค้นหาสินค้าหรือร้านค้า</label>
            <input
                type="search"
                id="search-input"
                className="search-input"
                placeholder="ค้นหาสินค้าหรือร้านค้า"
                aria-label="ค้นหาสินค้าหรือร้านค้า"
            />
            <button type="submit" className="search-button">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eafb8201cc5f106f98d4b39a967573048dcf346b9c58347d13c9a1bec65ef2a?placeholderIfAbsent=true&apiKey=995f48d45d994fa1bbe8730e0edd02c1" alt="Search" className="search-icon" />
            </button>
            <style jsx>{`  
            .search-bar {
                display: flex;
                align-items: center;
                background: var(--secondary);
                border-radius: 24px;
                padding: 7px 10px;
                margin-top: 42px;
                width: 448px;
                max-width: 100%;
            }

            .search-input {
                flex-grow: 1;
                border: none;
                background: transparent;
                color: var(--white);
                font-size: 16px;
                padding: 0 16px;
                outline: none;
            }

            .search-input::placeholder {
                color: var(--white);
            }

            .search-button {
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;
            }

            .search-icon {
                width: 28px;
                height: 28px;
            }

            `}</style>
        </form>
    );
};

export default SearchBar;