import React from 'react';
import ProductCard from './ProductCard';

const productData = [
    { id: 1, name: 'ชื่อสินค้า', shop: '@shop\'s name', price: 'ราคา' },
    { id: 2, name: 'ชื่อสินค้า', shop: '@shop\'s name', price: 'ราคา' },
    { id: 3, name: 'ชื่อสินค้า', shop: '@shop\'s name', price: 'ราคา' },
    { id: 4, name: 'ชื่อสินค้า', shop: '@shop\'s name', price: 'ราคา' },
    { id: 5, name: 'ชื่อสินค้า', shop: '@shop\'s name', price: 'ราคา' },
];

const ProductHistory = () => {
    return (
        <section className="product-history">
            {productData.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
            <style jsx>{`
        .product-history {
          background-color: var(--temp2);
          padding: 1px 0 24px;
        }
      `}</style>
        </section>
    );
};

export default ProductHistory;