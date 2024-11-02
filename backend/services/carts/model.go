package carts

import (
	"time"
)

type PaymentRequest struct {
	Username string  `json:"username"`
	Qty      uint    `json:"qty"`
	Total    float32 `json:"total"`
	Items    []Item  `json:"items"`
}

type Item struct {
	ShopName    string  `json:"shop_name"`
	ID          uint    `json:"product_id"`
	ProductName string  `json:"product_name"`
	Price       float32 `json:"price"`
	Description string  `json:"description"`
}
type Transaction struct {
	ID        uint `gorm:"primaryKey"` // Primary key
	Username  string
	Qty       uint
	Total     float32
	CreatedAt time.Time // You can add this if you want to track creation time
	UpdatedAt time.Time // You can add this if you want to track updates
}

type History struct {
	ID             uint `gorm:"primaryKey"` // Primary key
	Transaction_ID uint
	ShopName       string
	Product_ID     uint
}

func (Transaction) TableName() string {
	return "transactions"
}

func (History) TableName() string {
	return "history"
}
