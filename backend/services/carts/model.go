package carts

import (
	"backend/services/shops"
	"time"
)

type PaymentRequest struct {
	Username string          `json:"username"`
	ShopName string          `json:"shopname"`
	Qty      uint            `json:"qty"`
	Total    float32         `json:"total"`
	Products []shops.Product `json:"products"`
}

type Transaction struct {
	ID        uint `gorm:"primaryKey"` // Primary key
	Username  string
	ShopName  string
	Qty       uint
	Total     float32
	CreatedAt time.Time // You can add this if you want to track creation time
	UpdatedAt time.Time // You can add this if you want to track updates
}

type History struct {
	ID             uint `gorm:"primaryKey"` // Primary key
	Transaction_ID uint
	Product_ID     uint
}

func (Transaction) TableName() string {
	return "transactions"
}

func (History) TableName() string {
	return "history"
}
