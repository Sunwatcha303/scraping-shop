package users

import (
	"time"
)

type SignUpRequest struct {
	Role     string `json:"role" binding:"required"`
	Email    string `json:"email" binding:"required,email"`    // Email must be a valid email format
	Username string `json:"username" binding:"required"`       // Username is required
	Password string `json:"password" binding:"required,min=6"` // Password is required and must be at least 6 characters
}

type SignInRequest struct {
	Username string `json:"username" binding:"required"`       // Username is required
	Password string `json:"password" binding:"required,min=6"` // Password is required and must be at least 6 characters
	Role     string `json:"role" binding:"required"`
}

type User struct {
	ID        uint `gorm:"primaryKey"` // Primary key
	Username  string
	Password  string
	Role      string
	CreatedAt time.Time // You can add this if you want to track creation time
	UpdatedAt time.Time // You can add this if you want to track updates
}

func (User) TableName() string {
	return "users"
}
