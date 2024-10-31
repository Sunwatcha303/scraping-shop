import React from 'react';

const ShopCard = ({ name, description }) => {
    return (
        <article className="shop-card">
            <div className="shop-image" aria-hidden="true"></div>
            <div className="shop-info">
                <h2 className="shop-name">{name}</h2>
                <p className="shop-description">{description}</p>
            </div>
            <style>{`
            
            .shop-card {
                background: var(--white);
                border-radius: 8px;
                box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                overflow: hidden;
            }

            .shop-image {
                background-color: rgba(41, 95, 152, 0.7);
                height: 166px;
                border-radius: 8px 8px 0 0;
            }

            .shop-info {
                padding: 9px 8px;
                min-height: 118px;
            }

            .shop-name {
                font-weight: 700;
                font-size: 16px;
                margin: 0 0 8px;
            }

            .shop-description {
                font-weight: 400;
                font-size: 16px;
                margin: 0;
            }
            `}</style>
        </article>
    );
};

export default ShopCard;