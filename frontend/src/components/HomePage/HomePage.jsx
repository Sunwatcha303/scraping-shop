import React from 'react';
import Header from '../util/Header';
import SearchBar from '../util/SearchBar';
import ShopGrid from './ShopGrid';

const HomePage = () => {
    return (
        <div className="home-page">
            <main className="main-content">
                <h1 className="main-title">Scraping Shop คือร้านค้าออนไลน์ที่ให้คุณค้นหาและเลือกซื้อข้อมูลที่ต้องการ พร้อมชำระเงินง่าย ๆ ผ่าน QR Code</h1>
                <p className="sub-title">และมีประวัติการสั่งซื้อให้ดูย้อนหลังได้ ... เริ่มค้นหาได้เลย</p>
                <SearchBar />
                <ShopGrid />
            </main>
            <style>{`
            .home-page {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
                
            .main-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 45px 0;
                width: 100%;
                max-width: 1200px;
            }

            .main-title,
            .sub-title {
                text-align: center;
                color: #000;
                font-size: 16px;
                font-weight: 400;
                margin: 0 0 21px;
            }
            `}</style>
        </div>
    );
};

export default HomePage;