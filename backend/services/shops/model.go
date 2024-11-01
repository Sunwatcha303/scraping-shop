package shops

import "time"

type ShopResponse struct {
	ID          uint   `json:"id"`
	Image       string `json:"image"`       // Assuming image is a URL or file path as a string
	ShopName    string `json:"shop_name"`   // Name of the shop
	Description string `json:"description"` // Description of the shop
}

type Shop struct {
	ID          uint      `gorm:"primaryKey"` // Primary key
	ShopName    string    // Name of the shop
	Description string    // Description of the shop
	CreatedAt   time.Time // You can add this if you want to track creation time
	UpdatedAt   time.Time // You can add this if you want to track updates
	Image       string
}

type ProductRepo struct {
	ID          uint `gorm:"primaryKey"` // Primary key
	ShopName    string
	ProductName string
	Price       float32
	Description string
}

type Product struct {
	ID          uint    `json:"product_id"`
	ProductName string  `json:"product_name"`
	Price       float32 `json:"price"`
	Description string  `json:"description"`
}

type ProductsResponse struct {
	Shop    *ShopResponse `json:"shop"`
	Product *[]Product    `json:"product"`
}

func (ProductRepo) TableName() string {
	return "products"
}

func (Shop) TableName() string {
	return "shops"
}
