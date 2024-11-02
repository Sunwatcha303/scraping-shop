import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'ข้อมูลร้านอาหารยอดนิยมในกรุงเทพฯ',
    description: 'รายชื่อร้านอาหารที่ได้รับความนิยมสูงสุดในกรุงเทพฯ รวมถึงที่ตั้ง, เบอร์โทรศัพท์, รีวิวผู้ใช้งาน และช่วงราคา เพื่อให้คุณสำรวจตัวเลือกที่ดีที่สุดสำหรับการรับประทานอาหาร',
    price: '1000 บาท'
  },
  {
    id: 2,
    name: 'ข้อมูลราคาหุ้นรายวัน (SET)',
    description: 'ข้อมูลราคาหุ้นในตลาดหลักทรัพย์แห่งประเทศไทย (SET) อัปเดตทุกวัน รวมถึงราคาเปิด-ปิด, ราคาสูงสุด-ต่ำสุด และปริมาณการซื้อขาย เหมาะสำหรับผู้ที่สนใจลงทุนในหุ้นไทย',
    price: '1500 บาท'
  },
  {
    id: 3,
    name: 'ข้อมูลที่พักยอดนิยมในเชียงใหม่',
    description: 'รายชื่อที่พักและรีสอร์ทยอดนิยมในเชียงใหม่ พร้อมข้อมูลที่ตั้ง, สิ่งอำนวยความสะดวก, รีวิวผู้เข้าพัก, และราคาโดยประมาณ ช่วยให้คุณวางแผนการเดินทางได้ง่ายขึ้น',
    price: '1000 บาท'
  },
  {
    id: 4,
    name: 'ข้อมูลอันดับเพลงฮิตสากล',
    description: 'อันดับเพลงฮิตประจำสัปดาห์จากชาร์ตสากล รวมถึงชื่อเพลง, ศิลปิน, และประเภทเพลง เหมาะสำหรับผู้ที่ติดตามเพลงยอดนิยมและแนวโน้มในวงการดนตรี',
    price: '1500 บาท'
  }
];

const ProductList = ({products}) => {
  return (
    <section className="product-list">
      {products.map((product, index) => (
        <React.Fragment key={product.product_id}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}
      <style>{`
        .product-list {
          margin-top: 41px;
        }
        .divider {
          margin: 11px 0;
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 1);
        }
        @media (max-width: 991px) {
          .product-list {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductList;