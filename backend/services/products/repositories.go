package products

import (
	"gorm.io/gorm"
)

type Repositories struct {
	db *gorm.DB
}

func InitRepo(db *gorm.DB) *Repositories {
	return &Repositories{db: db}
}

func (repo *Repositories) GetProductByHistoryID(historyID string) (*ProductResponse, error) {
	var product ProductResponse

	// Query to join history, transactions, and products
	if err := repo.db.Table("history AS h"). // Added alias 'AS h' for the history table
							Select("h.id, h.product_id, p.product_name, p.price, p.description, p.data").
							Joins("JOIN products p ON h.product_id = p.id").
							Where("h.id= ?", historyID).
							Scan(&product).Error; err != nil {
		return nil, err // Return error if the query fails
	}

	return &product, nil // Return the list of histories
}
