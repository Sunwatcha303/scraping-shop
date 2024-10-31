import React from 'react';
import Header from './../util/Header';
import ShopProfile from './ShopProfile';
import ProductList from './ProductList';

const ShopPage = () => {
    return (
        <div className="shop-page">
            <main className="main-content">
                <ShopProfile />
                <ProductList />
            </main>
            <style jsx>{`
        .shop-page {
          background-color: #fff;
          display: flex;
          padding-bottom: 54px;
          flex-direction: column;
          overflow: hidden;
        }
        .main-content {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1159px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .main-content {
            max-width: 100%;
          }
        }
      `}</style>
        </div>
    );
};

export default ShopPage;