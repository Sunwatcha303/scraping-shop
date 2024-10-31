import React from 'react';

const ProductCard = ({ name, shop, price }) => {
    return (
        <article className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="shop-name">{shop}</p>
                <p className="product-price">{price}</p>
            </div>
            <button className="download-btn">ดาวน์โหลด</button>
            <style jsx>{`
        .product-card {
          background-color: var(--white);
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          gap: 52px;
          margin: 12px auto;
          padding: 16px;
          max-width: 1156px;
        }
        .product-image {
          background-color: var(--primary);
          border-radius: 50%;
          width: 101px;
          height: 101px;
        }
        .product-info {
          flex-grow: 1;
        }
        .product-name {
          font-size: 20px;
          margin: 0 0 4px;
        }
        .shop-name,
        .product-price {
          font-size: 16px;
          margin: 4px 0;
        }
        .download-btn {
          background-color: var(--primary);
          border: none;
          border-radius: 8px;
          color: var(--white);
          cursor: pointer;
          font-size: 16px;
          padding: 11px 16px;
        }
        @media (max-width: 991px) {
          .product-card {
            flex-wrap: wrap;
            gap: 20px;
            padding: 16px 8px;
          }
        }
      `}</style>
        </article>
    );
};

export default ProductCard;