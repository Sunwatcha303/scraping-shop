import React from 'react';
import { decodeToken } from '../util/util';
import Cookies from 'js-cookie'; // Ensure you install js-cookie

function CartSummary({ qty, total, items }) {
  const handleCheckout = async () => {
    // Step 1: Extract the token from the cookie
    const token = Cookies.get('token'); // Replace 'token' with your actual cookie name

    if (!token) {
      console.error('No token found in cookies');
      return; // Handle the absence of the token as needed
    }

    // Step 2: Decode the token to extract the username
    const decoded = decodeToken(token);
    console.log(decoded);
    const username = decoded.username; // Adjust according to your token structure

    // Step 3: Prepare the data object
    const data = {
      username: username,
      qty: qty,
      total: total,
      items: items,
    };
    console.log(data)

    // Step 4: Make the POST request
    try {
      const response = await fetch('http://localhost:8080/cart/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token if required for authorization
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Checkout successful:', result);

      // Show success alert
      alert('Checkout successful!');

      // Remove all product_id cookies
      items.forEach(item => {
        Cookies.remove(`product_${item.product_id}`); // Adjust if your cookie naming scheme is different
      });

      // Redirect to profile page
      window.location.href = '/profile';

    } catch (error) {
      console.error('Error during checkout:', error);
      // Handle error (e.g., show an error message)
      alert('Error during checkout, please try again.');
    }
  }

  return (
    <aside className="cart-summary">
      <div className="summary-content">
        <div className="summary-row">
          <p className="summary-label">จำนวน</p>
          <p className="summary-value">{qty}</p>
        </div>
        <div className="summary-row">
          <p className="summary-label">รวมราคาทั้งหมด</p>
          <p className="summary-value total">{total}</p>
        </div>
      </div>
      <hr className="summary-divider" />
      <button className="create-qr-btn" disabled={qty === 0} onClick={handleCheckout}>สร้าง qr code</button>
      <style>{`
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