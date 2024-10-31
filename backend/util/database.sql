CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,     -- Ensure this is unique and indexed
    password VARCHAR(255) NOT NULL,
    role VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE shops (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    shop_name VARCHAR(255) NOT null UNIQUE,          -- Name of the shop (foreign key)
    description TEXT,                        -- Description of the shop
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    image VARCHAR(255),                       -- Path or URL for the shop's image
    FOREIGN KEY (shop_name) REFERENCES users(username) ON DELETE CASCADE
);

CREATE TABLE products (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    shop_name VARCHAR(255) NOT NULL,          -- Foreign key to shops(username)
    product_name VARCHAR(255) NOT NULL,       -- Name of the product
    price FLOAT NOT NULL,                      -- Price of the product
    description TEXT,                         -- Description of the product
    FOREIGN KEY (shop_name) REFERENCES shops(shop_name) ON DELETE CASCADE
);

-- Create the transactions table
CREATE TABLE transactions (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    shop_name VARCHAR(255),
    qty INT NOT NULL,
    total FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE,
    FOREIGN KEY (shop_name) REFERENCES shops(shop_name) ON DELETE CASCADE
);

-- Create the history table
CREATE TABLE history (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    transaction_id INT UNSIGNED,
    product_id INT UNSIGNED,
    FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO products VALUES (1, "mockup", "a", 1000, "");
INSERT INTO products VALUES (2, "mockup", "b", 1000, "");