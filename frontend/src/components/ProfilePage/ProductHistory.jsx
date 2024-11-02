import React from 'react';
import ProductCard from './ProductCard';

const ProductHistory = ({ productData }) => {
    return (
        <section className="product-history">
            {productData.length === 0 ? (
                <p className="no-products-message">ไม่มีสินค้าที่แสดง</p> // Message when there are no products
            ) : (
                productData.map((product) => (
                    <ProductCard
                        key={product.history_id}
                        history_id={product.history_id}
                        product_name={product.product_name}
                        shop_name={product.shop_name}
                        price={product.price}
                    />
                ))
            )}
            <style>{`
                .product-history {
                    background-color: var(--temp2);
                    padding: 1px 0 24px;
                }
                .no-products-message {
                    text-align: center;
                    color: #666; // Adjust the color as needed
                    font-size: 18px;
                    margin: 20px 0; // Add some spacing
                }
            `}</style>
        </section>
    );
};

export default ProductHistory;