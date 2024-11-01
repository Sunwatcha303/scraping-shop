import React from 'react';

function CartSummary() {
  return (
    <aside className="cart-summary">
      <div className="summary-content">
        <div className="summary-row">
          <p className="summary-label">จำนวน</p>
          <p className="summary-value">4</p>
        </div>
        <div className="summary-row">
          <p className="summary-label">รวมราคาทั้งหมด</p>
          <p className="summary-value total">6000</p>
        </div>
      </div>
      <hr className="summary-divider" />
      <button className="create-qr-btn">สร้าง qr code</button>
      <style >{`
        .cart-summary {
          border-radius: 16px;
          background: #e1d7c6;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 40%;
          padding: 21px 33px;
        }
        .summary-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .summary-label {
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }
        .summary-value {
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }
        .summary-value.total {
          font-size: 24px;
          font-weight: 700;
        }
        .summary-divider {
          background-color: #295f98;
          height: 1px;
          border: none;
          margin: 15px 0;
        }
        .create-qr-btn {
          border-radius: 8px;
          background: #295f98;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          padding: 11px 16px;
          border: none;
          cursor: pointer;
          width: 100%;
        }
        @media (max-width: 991px) {
          .cart-summary {
            width: 100%;
            margin-top: 24px;
            padding: 21px 20px;
          }
        }
      `}</style>
    </aside>
  );
}

export default CartSummary;