import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard';


const ShopGrid = () => {
    const [shopData, setShopData] = useState([])

    useEffect(() => {
        const fetchShopData = async () => {
            try {
                const response = await fetch('http://localhost:8080/shop/all'); // Replace with your API endpoint
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                // console.log(data)
                setShopData(data);
            } catch (error) {
                console.error('Error fetching shop data:', error);
            }
        };

        fetchShopData();
    }, []);
    return (
        <section className="shop-grid">
            <div className="grid-container">
                {shopData.map((shop) => (
                    <a key={shop.id} href={`/shop/?shop_name=${shop.shop_name}`}>
                        <ShopCard name={shop.shop_name} description={shop.description} />
                    </a>
                ))}
            </div>
            <style>{`
            
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