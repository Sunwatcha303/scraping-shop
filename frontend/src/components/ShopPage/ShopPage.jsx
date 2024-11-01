import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './../util/Header';
import ShopProfile from './ShopProfile';
import ProductList from './ProductList';

const ShopPage = () => {
  const [shopData, setShopData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/shop/product/${queryParams.get('shop_name')}`); // Replace with your API endpoint
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log(data);
        setShopData(data);
      } catch (error) {
        console.error('Error fetching shop data:', error);
      }
    };

    fetchShopData();
  }, []); // Add queryParams as a dependency

  // Conditional rendering based on shopData state
  if (shopData === null) {
    return (
      <div className="shop-page">
        <main className="main-content">
          <p>Loading shop data...</p> {/* Loading message */}
        </main>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <main className="main-content">
        <ShopProfile shop={shopData.shop} />
        <ProductList products={shopData.product} /> {/* Assuming products is part of shopData */}
      </main>
      <style>{`
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