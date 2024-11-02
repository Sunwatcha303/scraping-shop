import React from 'react';

function CartItem({ product_id, product_name, shop_name, description, price }) {

  const handleDelete = () => {
    document.cookie = `product_${product_id}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    alert("Product removed from cart!");
    window.location.reload();
  }
  return (
    <article className="cart-item">
      <div className="item-image"></div>
      <div className="item-details">
        <h3 className="item-name">{product_name}</h3>
        <p className="item-shop">@{shop_name}</p>
        <p className="item-description">{description}</p>
      </div>
      <div className="item-actions">
        <p className="item-price">ราคา {price} บาท</p>
        <button className="remove-btn" onClick={handleDelete}>ลบ</button>
      </div>
      <style >{`
        .cart-item {
          display: flex;
          align-items: center;
          gap: 40px;
          padding: 16px 8px;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
        .item-image {
          background-color: #295f98;
          border-radius: 50%;
          width: 101px;
          height: 101px;
        }
        .item-details {
          flex: 1;
          min-width: 240px;
        }
        .item-name {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 4px;
        }
        .item-shop, .item-description {
          font-size: 16px;
          margin: 4px 0;
        }
        .item-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          height: 57px;
        }
        .item-price {
          font-size: 20px;
          font-weight: 700;
          margin: 0;
        }
        .remove-btn {
          background: none;
          border: none;
          color: #000;
          cursor: pointer;
          font-size: 16px;
          padding: 0;
        }
        @media (max-width: 991px) {
          .cart-item {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </article>
  );
}

export default CartItem;