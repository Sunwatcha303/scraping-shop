import React from 'react';
import CartItem from './CartItem';

const cartItems = [
    // { id: 1, name: 'ชื่อสินค้า', shop: '@shop\'s name', description: 'คำอธิยบาย', price: 1500 },
    // { id: 2, name: 'ชื่อสินค้า', shop: '@shop\'s name', description: 'คำอธิยบาย', price: 1500 },
    // { id: 3, name: 'ชื่อสินค้า', shop: '@shop\'s name', description: 'คำอธิยบาย', price: 1500 },
    // { id: 4, name: 'ชื่อสินค้า', shop: '@shop\'s name', description: 'คำอธิยบาย', price: 1500 },
];

function CartList() {
    return (
        <section className="cart-list">
            {cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                    <CartItem {...item} />
                    {index < cartItems.length - 1 && <hr className="item-divider" />}
                </React.Fragment>
            ))}
            <style jsx>{`
        .cart-list {
          display: flex;
          width: 60%;
          flex-direction: column;
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