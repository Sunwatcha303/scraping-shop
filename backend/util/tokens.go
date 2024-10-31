package util

import (
	"time"

	"github.com/golang-jwt/jwt"
)

// Claims represents the structure of the JWT claims.
type Claims struct {
	Username string `json:"username"`
	Role     string `json:"role"`
	jwt.StandardClaims
}

func GenerateToken(username string, role string) (string, error) {
	// Define your secret key (make sure to use a secure key in production)
	secretKey := []byte("your_secret_key") // Change this to your secret key

	// Set the claims, including the username, role, and expiration time
	claims := Claims{
		Username: username,
		Role:     role,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(), // Token valid for 72 hours
		},
	}

	// Create the token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Sign the token with the secret key
	signedToken, err := token.SignedString(secretKey)
	if err != nil {
		return "", err
	}

	return signedToken, nil
}
