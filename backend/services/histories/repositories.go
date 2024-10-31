package histories

import (
	"backend/services/users"

	"gorm.io/gorm"
)

type Repositories struct {
	db *gorm.DB
}

func InitRepo(db *gorm.DB) *Repositories {
	return &Repositories{db: db}
}

func (repo *Repositories) FindUserByUsername(username string) (*users.User, error) {
	var user users.User
	if err := repo.db.Where("username = ?", username).First(&user).Error; err != nil {
		return nil, err // Return nil if the user is not found or an error occurred
	}
	return &user, nil // Return the found user
}

func (repo *Repositories) GetHistoriesByUsername(username string) (*[]HistoryResponse, error) {
	var histories []HistoryResponse

	// Query to join history, transactions, and products
	if err := repo.db.Table("history AS h"). // Added alias 'AS h' for the history table
							Select("h.id, p.product_name, t.shop_name, p.price").
							Joins("JOIN transactions t ON h.transaction_id = t.id").
							Joins("JOIN products p ON h.product_id = p.id").
							Where("t.username = ?", username).
							Scan(&histories).Error; err != nil {
		return nil, err // Return error if the query fails
	}

	return &histories, nil // Return the list of histories
}
