package users

import (
	"backend/services/shops"

	"gorm.io/gorm"
)

type Repositories struct {
	db *gorm.DB
}

func InitRepo(db *gorm.DB) *Repositories {
	return &Repositories{db: db}
}

func (repo *Repositories) FindUserByUsername(username string) (*User, error) {
	var user User
	if err := repo.db.Where("username = ?", username).First(&user).Error; err != nil {
		return nil, err // Return nil if the user is not found or an error occurred
	}
	return &user, nil // Return the found user
}

func (repo *Repositories) CreateUser(user *User) (*User, error) {
	if err := repo.db.Create(user).Error; err != nil {
		return nil, err
	}
	return user, nil // Return the found user
}

func (repo *Repositories) CreateShop(user *User) (*User, error) {
	shop := shops.Shop{
		ShopName:    user.Username,
		Description: "",
		Image:       "",
	}
	if err := repo.db.Create(&shop).Error; err != nil {
		return nil, err
	}
	return user, nil // Return the found user
}
