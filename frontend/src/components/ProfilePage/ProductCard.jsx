import React from 'react';

const ProductCard = ({ history_id, product_name, shop_name, price }) => {
  const handleDownload = async () => {
    try {
      // Fetch the product data from the server
      const response = await fetch(`http://localhost:8080/product/${history_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch the product data');
      }

      // Parse the JSON response
      const productData = await response.json();
      const { data } = productData; // Extract the data field
      console.log(data);

      // Add a BOM for UTF-8
      const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
      const csvData = new Blob([bom, data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(csvData); // Create a URL for the blob

      // Create an anchor element for the download
      const downloadLink = document.createElement('a');
      downloadLink.href = url; // Set the URL as the href
      downloadLink.download = `${product_name}.csv`; // Specify the filename
      document.body.appendChild(downloadLink); // Append to the body
      downloadLink.click(); // Trigger the download

      // Clean up
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url); // Release the blob URL
    } catch (error) {
      console.error('Error downloading CSV:', error);
      // Optionally handle error (e.g., show an alert)
    }
  };

  return (
    <article className="product-card">
      <div className="product-image"></div>
      <div className="product-info">
        <h3 className="product-name">{product_name}</h3>
        <p className="shop-name">@{shop_name}</p>
        <p className="product-price">{price}</p>
      </div>
      <button className="download-btn" onClick={handleDownload}>
        ดาวน์โหลด
      </button>
      <style>{`
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