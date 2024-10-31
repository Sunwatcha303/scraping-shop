import React from 'react';
import ShopCard from './ShopCard';

const shopData = [
    { id: 1, name: '@shop name', description: 'คำอธิบายร้านค้า' },
    { id: 2, name: '@shop name', description: 'คำอธิบายร้านค้า' },
    { id: 3, name: '@shop name', description: 'คำอธิบายร้านค้า' },
    { id: 4, name: '@shop name', description: 'คำอธิบายร้านค้า' },
    { id: 5, name: '@shop name', description: 'คำอธิบายร้านค้า' },
    { id: 6, name: '@shop name', description: 'คำอธิบายร้านค้า' },
    { id: 7, name: '@shop name', description: 'คำอธิบายร้านค้า' },
    { id: 8, name: '@shop name', description: 'คำอธิบายร้านค้า' },
];

const ShopGrid = () => {
    return (
        <section className="shop-grid">
            <div className="grid-container">
                {shopData.map((shop) => (
                    <a href='/shop'>
                        <ShopCard key={shop.id} name={shop.name} description={shop.description} />
                    </a>
                ))}
            </div>
            <style jsx>{`
            
            .shop-grid {
                background: var(--secondary);
                width: 100%;
                padding: 40px 80px 63px;
                margin-top: 42px;
                box-sizing: border-box;
            }

            .grid-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 24px;
                max-width: 1156px;
                margin: 0 auto;
            }
            `}</style>
        </section>
    );
};

export default ShopGrid;