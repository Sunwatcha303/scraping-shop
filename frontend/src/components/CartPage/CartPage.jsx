import React from 'react';
import Header from '../util/Header';
import CartList from './CartList';
import CartSummary from './CartSummary.jsx';
import ShopGrid from '../HomePage/ShopGrid';

function CartPage() {
  return (
    <div className="cart-page">
      <main className="cart-content">
        <div className="cart-layout">
          <CartList />
          <CartSummary />
        </div>
        <ShopGrid />
      </main>
      <style >{`
        .cart-page {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: Anuphan, sans-serif;
        }
        .cart-content {
          align-self: center;
          display: flex;
          margin-top: 84px;
          width: 100%;
          max-width: 1156px;
          flex-direction: column;
          align-items: start;
        }
        .cart-layout {
          align-self: stretch;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .cart-content {
            max-width: 100%;
            margin-top: 40px;
          }
          .cart-layout {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default CartPage;