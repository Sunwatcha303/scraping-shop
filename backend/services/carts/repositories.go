package carts

import (
	"backend/services/shops"
	"backend/services/users"

	"gorm.io/gorm"
)

type Repositories struct {
	db *gorm.DB
}

func InitRepo(db *gorm.DB) *Repositories {
	return &Repositories{db: db}
}

func (repo *Repositories) GetShopByShopName(shopName string) (*shops.Shop, error) {
	var shop shops.Shop
	if err := repo.db.Where("shop_name = ?", shopName).First(&shop).Error; err != nil {
		return nil, err // Return nil if the user is not found or an error occurred
	}
	return &shop, nil // Return the found user
}

func (repo *Repositories) GetUserByUsername(username string) (*users.User, error) {
	var user users.User
	if err := repo.db.Where("username = ?", username).First(&user).Error; err != nil {
		return nil, err // Return nil if the user is not found or an error occurred
	}
	return &user, nil // Return the found user
}

func (repo *Repositories) CreateTransaction(paymentReq *PaymentRequest) error {
	// Begin a new transaction
	tx := repo.db.Begin()
	if tx.Error != nil {
		return tx.Error
	}

	transaction := Transaction{
		Username: paymentReq.Username,
		Qty:      paymentReq.Qty,
		Total:    paymentReq.Total,
	}
	if err := tx.Create(&transaction).Error; err != nil {
		tx.Rollback() // Rollback the transaction if creating the transaction fails
		return err
	}

	// Prepare history records for each product in the payment request
	var histories []History
	for _, item := range paymentReq.Items {
		histories = append(histories, History{
			Transaction_ID: transaction.ID, // Reference the transaction ID
			ShopName:       item.ShopName,
			Product_ID:     item.ID, // Link to each product by ID
		})
	}

	// Insert all histories in a batch
	if err := tx.Create(&histories).Error; err != nil {
		tx.Rollback() // Rollback if creating histories fails
		return err
	}

	// Commit the transaction if all operations succeed
	if err := tx.Commit().Error; err != nil {
		return err // Handle any error that occurs during commit
	}

	return nil // All records created successfully
}
