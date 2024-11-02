import React, { useEffect, useState } from 'react';
import Header from '../util/Header';
import CartList from './CartList';
import CartSummary from './CartSummary.jsx';
import ShopGrid from '../HomePage/ShopGrid';

function CartPage() {
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0.0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getCartItemsFromCookies = () => {
      const decodedCookies = decodeURIComponent(document.cookie);
      const cookiesArray = decodedCookies.split(';');
      const productItems = [];

      cookiesArray.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');

        // Filter for cookies that start with 'product_'
        if (name.startsWith('product_')) {
          try {
            const product = JSON.parse(value);
            // console.log(product)
            productItems.push(product);
          } catch (error) {
            console.error("Failed to parse cookie", error);
          }
        }
      });

      setItems(productItems);

      // Calculate quantity and total price
      const totalQuantity = productItems.length;
      const totalPrice = productItems.reduce((sum, item) => sum + item.price, 0);
      setQty(totalQuantity);
      setTotal(totalPrice);
    };

    getCartItemsFromCookies();
  }, []);

  return (
    <div className="cart-page">
      <main className="cart-content">
        <div className="cart-layout">
          <CartList cartItems={items} />
          <CartSummary qty={qty} total={total} items={items}/>
        </div>
        <ShopGrid />
      </main>
      <style>{`
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