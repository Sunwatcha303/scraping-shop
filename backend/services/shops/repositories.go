package shops

import "gorm.io/gorm"

type Repositories struct {
	db *gorm.DB
}

func InitRepo(db *gorm.DB) *Repositories {
	return &Repositories{db: db}
}

func (repo *Repositories) GetAllShop() (*[]ShopResponse, error) {
	var shopsList []Shop
	if err := repo.db.Find(&shopsList).Error; err != nil {
		return nil, err // Return error if the query fails
	}

	// Convert the list of shops to a list of ShopResponse
	var shopResponses []ShopResponse
	for _, shop := range shopsList {
		shopResponses = append(shopResponses, ShopResponse{
			ID:          shop.ID,
			ShopName:    shop.ShopName,
			Description: shop.Description,
			Image:       shop.Image,
		})
	}

	return &shopResponses, nil // Return the list of ShopResponse
}

func (repo *Repositories) GetShopByShopName(shop_name string) (*Shop, error) {
	var shop Shop
	if err := repo.db.Where("shop_name = ?", shop_name).First(&shop).Error; err != nil {
		return nil, err // Return nil if the user is not found or an error occurred
	}
	return &shop, nil // Return the found user
}

func (repo *Repositories) GetProductsByShopName(shopName string) (*[]Product, error) {
	var productsList []ProductRepo // Assuming ProductRepo is the struct used for DB queries
	if err := repo.db.Where("shop_name = ?", shopName).Find(&productsList).Error; err != nil {
		return nil, err // Return error if the query fails
	}

	// Convert the list of ProductRepo to a list of Product
	var products []Product
	for _, product := range productsList {
		products = append(products, Product{
			ID:          product.ID,
			ProductName: product.ProductName,
			Price:       product.Price,
			Description: product.Description,
		})
	}

	// Return an empty slice if no products were found
	return &products, nil // Return the list of Product
}
