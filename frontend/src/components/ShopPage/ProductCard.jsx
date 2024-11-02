import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { getCookie } from '../util/util';

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const cookieName = `product_${product.product_id}`;
  const navigate = useNavigate();
  const [searchParam] = useSearchParams()
  const shop_name = searchParam.get('shop_name');

  useEffect(() => {
    if (getCookie(cookieName) !== null) {
      setAdded(true);
    }
  }, [cookieName]);

  const handleAddItemToCart = (e) => {
    e.preventDefault();

    if (!added) {
      const productData = JSON.stringify({
        shop_name: shop_name,
        product_id: product.product_id,
        product_name: product.product_name,
        price: product.price,
        description: product.description,
      });

      const expires = new Date();
      expires.setDate(expires.getDate() + 7);

      document.cookie = `${cookieName}=${encodeURIComponent(productData)};expires=${expires.toUTCString()};path=/`;
      setAdded(true);
      alert("Product added to cart!");
    } else {
      navigate('/cart');
    }
  };

  return (
    <article className="product-card">
      <div className="product-image"></div>
      <div className="product-info">
        <h3 className="product-name">{product.product_name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
      <div className="product-actions">
        <button className="add-to-cart-btn" onClick={handleAddItemToCart}>
          {added ? 'ดูในตะกร้า' : 'เพิ่มใส่ตะกร้า'}
        </button>
      </div>
      <style>{`
        .product-card {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          gap: 40px 52px;
          flex-wrap: wrap;
          padding: 16px 8px;
          font: 700 16px Anuphan, sans-serif;
        }
        .product-image {
          background-color: var(--primary, #295f98);
          border-radius: 50%;
          width: 101px;
          height: 101px;
        }
        .product-info {
          flex: 1;
          min-width: 240px;
          color: #000;
        }
        .product-name {
          font-size: 20px;
          margin: 0 0 4px;
        }
        .product-description {
          font-weight: 400;
          margin: 0 0 4px;
        }
        .product-price {
          margin: 0;
        }
        .product-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 120px;
        }
        .buy-btn, .add-to-cart-btn {
          border-radius: 8px;
          min-height: 42px;
          width: 100%;
          padding: 11px 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }
        .buy-btn {
          background: var(--primary, #295f98);
          color: #fff;
          border: none;
        }
        .add-to-cart-btn {
          background: transparent;
          color: var(--primary, #295f98);
          border: 1px solid var(--primary, #295f98);
        }
        @media (max-width: 991px) {
          .product-card {
            max-width: 100%;
          }
        }
      `}</style>
    </article>
  );
};

export default ProductCard;