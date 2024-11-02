import React from 'react';
import CartItem from './CartItem';

function CartList({ cartItems = [] }) {
  return (
    <section className="cart-list">
      {cartItems.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        cartItems.map((item, index) => (
          <React.Fragment key={item.product_id}>
            <CartItem
              product_id={item.product_id}
              product_name={item.product_name}
              shop_name={item.shop_name}
              description={item.description}
              price={item.price}
            />
            {index < cartItems.length - 1 && <hr className="item-divider" />}
          </React.Fragment>
        ))
      )}
      <style>{`
      .cart-list {
        display: flex;
        width: 60%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .item-divider {
        background-color: #295f98;
        height: 1px;
        border: none;
        margin: 12px 0;
      }
      @media (max-width: 991px) {
        .cart-list {
          width: 100%;
          margin-top: 24px;
        }
      }
    `}</style>
    </section>
  );
}

export default CartList;