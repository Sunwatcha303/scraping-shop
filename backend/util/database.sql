CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,     -- Ensure this is unique and indexed
    password VARCHAR(255) NOT NULL,
    role VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE shops (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    shop_name VARCHAR(255) NOT null UNIQUE,          -- Name of the shop (foreign key)
    description TEXT,                        -- Description of the shop
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    image VARCHAR(255),                       -- Path or URL for the shop's image
    FOREIGN KEY (shop_name) REFERENCES users(username) ON DELETE CASCADE
);

CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    shop_name VARCHAR(255) NOT NULL,          -- Foreign key to shops(username)
    product_name VARCHAR(255) NOT NULL,       -- Name of the product
    price FLOAT NOT NULL,                      -- Price of the product
    description TEXT,                         -- Description of the product
    data TEXT,
    FOREIGN KEY (shop_name) REFERENCES shops(shop_name) ON DELETE CASCADE
);

-- Create the transactions table
CREATE TABLE transactions (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    qty INT NOT NULL,
    total FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
);

-- Create the history table
CREATE TABLE history (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    transaction_id INT UNSIGNED,
    shop_name VARCHAR(255),
    product_id INT UNSIGNED,
    FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE,
    FOREIGN KEY (shop_name) REFERENCES shops(shop_name) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO products VALUES (1, "savelnwza", "ข้อมูลร้านอาหารยอดนิยมในกรุงเทพฯ", 1000, "รายชื่อร้านอาหารที่ได้รับความนิยมสูงสุดในกรุงเทพฯ รวมถึงที่ตั้ง, เบอร์โทรศัพท์, รีวิวผู้ใช้งาน และช่วงราคา เพื่อให้คุณสำรวจตัวเลือกที่ดีที่สุดสำหรับการรับประทานอาหาร", 'ชื่อร้านอาหาร,ประเภทอาหาร,ที่อยู่,คะแนนรีวิว
"ร้านอาหารสยาม", "ไทย", "123 ถนนสยาม, กรุงเทพฯ", 4.5
"ร้านเจ๊เกียว", "ซีฟู้ด", "456 ถนนนราธิวาส, กรุงเทพฯ", 4.7
"ร้านอาหารท่าเรือ", "ไทย", "789 ถนนเจริญนคร, กรุงเทพฯ", 4.3
"ร้านโกทิ", "เวียดนาม", "321 ถนนสุขุมวิท, กรุงเทพฯ", 4.6
"ร้านบ้านข้าวเหนียว", "อีสาน", "654 ถนนรามอินทรา, กรุงเทพฯ", 4.4
"ร้านข้าวแกงลุงหนวด", "ไทย", "987 ถนนพหลโยธิน, กรุงเทพฯ", 4.2
"ร้านหมูกระทะเจ๊หมี", "หมูกระทะ", "258 ถนนลาดพร้าว, กรุงเทพฯ", 4.8
"ร้านข้าวมันไก่เจ๊วรรณ", "ไก่", "159 ถนนพระราม 9, กรุงเทพฯ", 4.5
"ร้านซูชิแม่บ้าน", "ญี่ปุ่น", "753 ถนนทองหล่อ, กรุงเทพฯ", 4.9
"ร้านก๋วยเตี๋ยวเรือ", "ก๋วยเตี๋ยว", "369 ถนนเพชรบุรี, กรุงเทพฯ", 4.3
'),
(2, "savelnwza", "ข้อมูลที่พักยอดนิยมในเชียงใหม่", 1000, "รายชื่อที่พักและรีสอร์ทยอดนิยมในเชียงใหม่ พร้อมข้อมูลที่ตั้ง, สิ่งอำนวยความสะดวก, รีวิวผู้เข้าพัก, และราคาโดยประมาณ ช่วยให้คุณวางแผนการเดินทางได้ง่ายขึ้น", 'ชื่อที่พัก,ประเภทที่พัก,ที่อยู่,คะแนนรีวิว
"โรงแรมดาราเทวี", "โรงแรม", "1 ถนนนิมมานเหมินทร์, เชียงใหม่", 4.6
"พูลแมน คิงพาวเวอร์", "โรงแรม", "199 ถนนศรีดอนชัย, เชียงใหม่", 4.5
"บ้านดิน", "โฮมสเตย์", "72 หมู่ 5 ถนนห้วยแก้ว, เชียงใหม่", 4.7
"กรีนเลค รีสอร์ท", "รีสอร์ท", "89 ถนนช้างคลาน, เชียงใหม่", 4.4
"เชียงใหม่ ฮิลล์", "โรงแรม", "34 ถนนสุเทพ, เชียงใหม่", 4.2
"อาลีนา รีสอร์ท", "รีสอร์ท", "45 ถนนมณีนพรัตน์, เชียงใหม่", 4.8
"เกสต์เฮ้าส์บ้านเรา", "เกสต์เฮ้าส์", "21 ถนนเชียงใหม่-ลำพูน, เชียงใหม่", 4.3
"โรงแรมแอมบาสเดอร์", "โรงแรม", "77 ถนนอุโมงค์, เชียงใหม่", 4.1
"โรงแรมบูรพา", "โรงแรม", "33 ถนนจอมทอง, เชียงใหม่", 4.6
"โฮสเทลเชียงใหม่", "โฮสเทล", "12 ถนนพระปกเกล้า, เชียงใหม่", 4.5
'),
(3, "savelnwza", "ข้อมูลอันดับเพลงฮิตสากล2024", 1000, "อันดับเพลงฮิตประจำสัปดาห์จากชาร์ตสากล รวมถึงชื่อเพลง, ศิลปิน, และประเภทเพลง เหมาะสำหรับผู้ที่ติดตามเพลงยอดนิยมและแนวโน้มในวงการดนตรี", 'อันดับ,ชื่อเพลง,ศิลปิน
1,"Flowers","Miley Cyrus"
2,"Kill Bill","SZA"
3,"Calm Down","Rema & Selena Gomez"
4,"As It Was","Harry Styles"
5,"Cruel Summer","Taylor Swift"
6,"Last Last","Burna Boy"
7,"Anti-Hero","Taylor Swift"
8,"I Can’t Feel My Face","The Weeknd"
9,"Creepin’","Metro Boomin, The Weeknd & 21 Savage"
10,"Unholy","Sam Smith & Kim Petras"
');